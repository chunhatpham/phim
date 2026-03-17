/* ============================================================
   1. KHAI BÁO BIẾN TOÀN CỤC & CẤU HÌNH HỆ THỐNG
   ============================================================ */
let currentUser = null; 
let allUsers = JSON.parse(localStorage.getItem('gogo_auth_users')) || {}; 

// Dữ liệu người dùng hiện tại
let userBalance = 0; 
let userLevel = 1;
let userExp = 0;
let totalDeposited = 0; 
let currentVipLevel = 0;

// Thống kê & Nhiệm vụ
let dailyTasks = 0, dailyGames = 0, dailyAtt = false, dailyCodes = 0;
let lastAttTime = 0, attInterval = null, bonusClaimed = false, weeklyProgress = 6; 

// Kho đồ & Lịch sử
let myInventory = []; 
let myTickets = []; 
let transactionHistory = [];
let myAssets = [];

// Banking & Code
let pendingDepositAmount = 0;
let wrongOtpAttempts = 0;
let usedDepositCodes = JSON.parse(localStorage.getItem('gogo_used_dep_codes')) || [];
let wrongCodeCount = 0, banCodeEndTime = 0, usedCodes = [];

// CÁC HẰNG SỐ HỆ THỐNG
const VALID_REF_CODES = ["FGYB65RT", "NHBVCX43", "TGY67HNM", "W99GG", "V22ULTIMATE", "DACDTTH07"];
const VALID_DEPOSIT_CODES = ["AZ9T4GBN", "K3PQ8LMN", "J7FH2ECD", "R4TG6YUI", "E8W2AZXC", "9H8JKL32", "Q3VT4BNM", "7G4FH8JK", "C9D8EFGH", "V2B8N4ZA"];

// KHO MÃ GIFTCODE KHỔNG LỒ (ĐÃ CẬP NHẬT ĐẦY ĐỦ)
const FULL_GIFTCODES = [
    "A7Q9KP", "ZP4M7C", "8F2JQW", "L9H7TC", "R3M8KQ", "0WJX5A", "C9S2EP", "K3V7MX", "H4D2B9", "Q8J5LN",
    "P0Z7FA", "M9C2RV", "6FQJWP", "Z3A7HS", "T2K9M5", "X6J4BC", "8H0PQA", "7W3FKS", "M2C9DZ", "J8E4RX",
    "P6VYQH", "F3MZ27", "0K2T9A", "W8D4B6", "R7X5PS", "J0Q2LM", "H9C6FE", "A3PZ8R", "7KQDW4", "C2XJ9T",
    "M8P0FE", "Z7WQ6A", "S5D3HJ", "9RKP2X", "F7E0QC", "4ZAWPM", "H6T2C9", "3J8KQS", "0LPM7A", "Q6R5FH",
    "P9K3ZD", "B4CX2W", "M8JQ6H", "7A0F9T", "ZQW4KP", "5E3R2X", "C9M7HS", "D8P0KQ", "JH4L5Z", "T3A9FC",
    "X2P6QM", "7Q4J9W", "8H6LPR", "M3C5DZ", "K0P2X9", "Q7FA4S", "ZP6BWM", "9R2C3K", "H8FJTX", "4W7QAP",
    "6M0Z3D", "C5S8JQ", "KP9L2H", "QF7T4A", "ZC3D5W", "M6P8JR", "0H9K2X", "8QF6ZP", "7M4J3C", "D2A5HS",
    "9X0KQL", "J8RTP4", "5F7BQM", "Z9K6H2", "P3S0XJ", "C4Q8DR", "W7A6PM", "H9TF2Z", "M0B5JX", "8K4SQC",
    "Q9Z6P7", "J2W5RM", "C0F3HD", "A8X9QP", "6JZ7KM", "S2D5R4", "P9QW3B", "7H8CFA", "4M0KXJ", "Z5Q2PS",
    "J9D6TR", "XK8HCF", "0A7M9P", "W5Q3BR", "6C4JTZ", "P8H9XS", "2F0DQM", "Z7M3KP", "Q4R5WJ", "9H6C0F",
    "A8Z2PX", "T5J7QD", "KX3M9H", "P0R4C8", "6FQWJZ", "D9S5H2", "B7PXM4", "Q8A0RC", "5KJ6ZT", "C9W3PH",
    "M7R4QX", "Z2P8DF", "0H5JS9", "KQW7AM", "4C3TXR", "9Z8F6P", "D2B0H5", "J7KMSQ", "XP4WRC", "A5QZ39",
    "F8H6PM", "K2T7J0", "9WQDCS", "P5RX3Z", "M4A0H8", "7QJZ6C", "D2P9WK", "C8XF5H", "Z7M0RQ", "A4P3JS",
    "9W2F6T", "Q8RZC5", "J0M7PH", "6K3XAD", "H9WP2Q", "F4ZC8J", "7M5R0A", "P3Q2KS", "C9JXW6", "8D4HTZ",
    "0Z7MPQ", "H2A3R8", "K9F5WX", "6J7C4D", "P0QMTZ", "S8HXR9", "A2J3P4", "W7KQDC", "F5Z8R0", "M9C2H6",
    "3QJWPX", "8K7DZA", "H4F0RM", "C9P2WJ", "Z5X6Q3", "M7A0KH", "R4J8F9", "P2D3QT", "6WZ5C7", "QH8J9X",
    "0A4F3M", "K5PZRW", "7C6T2H", "J9QX8D", "W0P3MF", "Z2A7RK", "H6C5QJ", "M8F4D9", "P3W0X2", "9ZK7Q5",
    "A4JCRH", "6D8MFP", "T3Q2Z9", "C5H7XK", "W8RMPJ", "0F2Q6D", "9Z4AKP", "H7C3WX", "J5M6D0", "Q2R8FZ",
    "P9KAX3", "6H7J5W", "C0ZQDM", "8R4P2F", "M3T9KH", "A6QXJ7", "D5F8P0", "Z4W9RC", "H2M3Q7", "P6JTX8",
    "0C5ZFA", "Q9RK4D", "7X6MWH", "A3P8J0", "F2Z5QC", "K9H4R7", "C0PDM6", "W8Q3TJ", "Z7M5XF", "4H0KRP",
    "QJ9C2A", "6D7PZW", "M5H8R0", "A4C3F9", "T2Q7JX", "P6K8ZH", "0W5R9M", "C7FQ4D", "X2J0HP", "A6Z8K9",
    "M5D3QW", "H7C4P0", "9R2TXF", "JZ6KQM", "P0W5H8", "C4A3X7", "Z9D2JQ", "6KFM5R", "T7P8H0", "QWCX34",
    "A2Z9M6", "D7R5KJ", "P0HXF8", "C4QW2A", "9ZJ3M6", "K7H8DR", "T5P0FX", "W6C4QZ", "JAM8R2", "H0P9D5",
    "FQ7X4K", "Z3C8W6", "M5T2Q9", "A0KRPJ", "H6D7CF", "P9QW4M", "X2A8J5", "Z6T3KQ", "C0D9H7", "M5P4RX",
    "F8W2J6", "Q9A3KH", "7CZD0M", "H4W5RP", "K8J6TQ", "A9F2XC", "P0Z7D3", "M4Q6KH", "WJ9F5A", "Z8C0P2",
    "R7XH6K", "Q5P4M3", "D9T2WJ", "A6H7C0", "8ZQFMP", "J4R5XD", "M9K2T7", "W3C6Q0", "HAP8Z4", "P5XJ9R",
    "D6F7M2", "QKCW3A", "0ZP8H4", "R7J6MX", "A5T3C9", "WQ4F2P", "D0H8K6", "9ZJM5R", "XCP7Q4", "M2A3T8",
    "H0K6F9", "PZQ4RW", "5C7JDX", "K9A8M3", "6H2P0T", "WQ4FJ7", "Z5C3XD", "P9RMH0", "A6K2J8", "D7T4CF",
    "QXW59P", "H3M0Z6", "K8A9J4", "R5C2QW", "P7TDF0", "M6HXZ3", "A2QW89", "J4C0R7", "K5MZ6P", "QH8A9W",
    "3C2R7F", "0T4DMP", "Z5KJH6", "P8M9XA", "WQ2F7C", "6R0ZDH", "J5P8TK", "Q39MFW", "A2D7C0", "H8ZP4R",
    "K6XJ5T", "M9WQ3F", "0C2DPA", "7ZKJ8H", "R5M6QT", "P3F0W9", "A2C7DX", "H8KQZ4", "M5WTR9", "0FJ2CP",
    "6ZQH8R", "A4KJMD", "T3X7W9", "P8H0C2", "Q5MZFR", "D6A9K4", "W7HJC3", "8Z0PXF", "M2T4RQ", "C9K7D5",
    "Q6A3J0", "PWF8H2", "RZ5M49", "7D6XJC", "KQ2H0P", "A8C3WZ", "M5T7R6", "0JQF4P", "9HK2XD", "C8ZWM3",
    "P6A4JQ", "H0F5RT", "K7C2D9", "WJ3ZAM", "R6M8Q4", "P0T9H2", "X7F5D3", "ZQAK4J", "M2H6WP", "C0T9RF",
    "8JX7A5", "QK4MZD", "R3P6C2", "H0A9TW", "F7J5XZ", "M8KQ4P", "C3Z26H", "9WT0RA", "QJH7D8", "P5M4XF",
    "Z6C3W0", "KQ2R8H", "A4T7J9", "M0F5D3", "WZXP8C", "R6KJQ2", "H7P0M9", "C4A8Z5", "FJ3W6Q", "T5D2XK",
    "9M0C8R", "H6PZ4Q", "A7JX5D", "K8M3W2", "0FQ9R6", "C7HPTZ", "M4J2KD", "QW8A90", "Z5F6RC", "P3H7XM",
    "0D9T4K", "C8JZ2Q", "M6W5RP", "A3H9K0", "Q7FXCD", "Z8P0RM", "T2J4K5", "6H9WAC", "P3M7D8", "FZ2C0R",
    "QKJ6XH", "W4A95M", "C7TDPZ", "0F8R23", "K5H9XM", "A6D7WJ", "P8M4QC", "Z0T3RF", "H5QK92", "J8W4XP",
    "C7D6MA", "PZ9FQ3", "0K52TR", "M4HXJ8", "W6A7QC", "D3ZP0R", "K5F29M", "JX8H7Q", "P4A6T0", "Z9C3W5",
    "QMDH7K", "6RXF2J", "C0T8P9", "A5KMW4", "H7ZDJQ", "R3C6F2", "P0T98X", "W4M5KQ", "8JXH2A", "Z9D6CF",
    "MPR47Q", "A0T2WJ", "H5ZK89", "Q6CXD4", "P3R7M8", "F9J2W0", "K5A6TH", "Z8Q0R3", "C4P7XM", "D2JH9W",
    "M0A6F5", "QZ8W7C", "K3P9TR", "H5XMD4", "A0F6C8", "J2Z7RQ", "W4P9M5", "T8C3HK", "6A0D7X", "QFJ5RP",
    "Z9M4C2", "H8WAKT", "3D0P7Q", "C6J9MX", "K5A4R8", "P2WZ7F", "0HTC93", "M6QXDJ", "ZK5F2P", "8WJ40C",
    "H7T9AR", "QMPZ56", "D2K3J8", "C4A9WX", "P0M5FQ", "Z7H8XR", "W6KJ9D", "M2C3A5", "QF4T0P", "8HZ6RX",
    "K9J7DM", "C5WAP0", "T4FQ2Z", "A6R8M3", "0H9P7K", "Z5CJQ4", "D6X2WM", "M9F3A8", "QHT4RP", "7KZC20",
    "WJ8M5F", "A6P3T9", "R4C7HD", "QZ0KJ8", "M2WX95", "F3A4PH", "K6Z7TC", "0Q9WDM", "8XJ5R2", "C7F4P3",
    "T9KHMA", "Z0D6WJ", "M5RPXQ", "A3H2C7", "K4W8Z6", "QF9TD0", "J5MRC2", "H7XPZ8", "C0K4FQ", "W6A5D3",
    "P9J2TM", "ZRHX87", "A6F4C3", "M5TQ20", "K9W8JP", "D7Z3XH", "0F2C6R", "P5A4MT", "QKJ9W8", "H7MZ30",
    "C4D5X2", "Z0AF6P", "T3KWRJ", "8M9QH7", "A2FJ5D", "MZ0W6X", "Q8R3PC", "H4K9TA", "7DJW5F", "C0X6PM",
    "ZK8A2R", "P9TQW3", "M4FJH0", "C7D2X8", "A5Q9Z6", "W3KPHR", "8J0MFC", "D4ZQ2P", "T6AHW7", "M9R5C3",
    "KJ0F8X", "Z2QW64", "P7H5A9", "C3M0XD", "W6A4KQ", "H9F7ZJ", "R2P5T8", "M3C4D0", "QWJ8FH", "Z6A2XP",
    "T5H9RK", "0F7M3C", "C4QK6J", "P9W2AD", "H8ZRX5", "M3FJ07", "A4K2QW", "6C5ZTM", "P0J8RH", "Q7H9AF",
    "X3M5C2", "W4ZKJ0", "A6T2P9", "R5F3D7", "QH8CXM", "J9ZP4W", "0KMA57", "C2F8T3", "6Q5XRW", "Z9A4HJ",
    "P3D7M2", "K0C6TF", "W8QJ5Z", "A4M9R2", "H7PFCX", "Z0D6JQ", "M5W3A8", "K4X2TH", "QFJ7P0", "C9H6R5",
    "T8ZMP4", "A3KQ2D", "H0FJ9M", "W7X5C8", "R6ZP4A", "2Q3MHD", "K5C0T7", "A9JWP8", "F4H2ZQ", "M6XR35",
    "C7T0KP", "Z8QH9D", "P4J5AM", "W3F2RC", "0Z7M6Q", "H8P4KJ", "T9X5C2", "A6F3D7", "M0ZQ9R", "W4H8KP",
    "C2T7XJ", "Z9A6FQ", "P5M3DR", "H0J8WK", "K7R92A", "C4FQM6", "T3D5XH", "Z8WJ2M", "P9K7RA", "0C4F6Q",
    "H5AXP3", "M2D7W8", "KJ4QT6", "Z9R3F0", "C7A2XW", "P6H8MK", "T4J5QD", "0FZRC9", "W6M8P2", "A3K7HX",
    "C0QF4R", "9WJZ5P", "D2X8AM", "H6R7KQ", "T3F0P9", "Z4A8M5", "C2W7XJ", "K6J9QR", "H5MDFP", "0A3R8W",
    "C7Z4X9", "P2TQKJ", "M5H0AF", "W8D6R3", "ZJQ79C", "A4M6XH", "P2F0K5", "C3R8QW", "T9J7Z4", "H6D5AM",
    "K0XP82", "Z3C4F9", "M5W7R6", "A2JH0Q", "P8TDFK", "W9M4XC", "Z6A3R5", "H7C2JP", "Q0F8MK", "4TD5XH",
    "K3ZAW6", "M9H2QJ", "C0F7P8", "ZXR4WK", "A5T3JM", "H2FQK6", "P7C0D9", "W8Z3R4", "M6A5HX", "KJ2Q0P",
    "C9W8F7", "T4Z5XR", "A3MD6H", "Q9K2FJ", "P0C7R8", "M4JH5W", "Z3F6QK", "T7C2A9", "H0X5D4", "P8M6WQ",
    "C3KJ7Z", "A2F9RH", "T0D5P4", "W8M6CX", "Q7KJ3H", "Z9AR0F", "W99GG", "V22ULTIMATE"
];

const vipConfigFix = [
    { level: 0, cost: 0, daily: 5000, rankUpReward: 0 },
    { level: 1, cost: 100000, daily: 10000, rankUpReward: 50000 },
    { level: 2, cost: 500000, daily: 15000, rankUpReward: 100000 },
    { level: 3, cost: 1000000, daily: 25000, rankUpReward: 200000 },
    { level: 4, cost: 5000000, daily: 40000, rankUpReward: 500000 },
    { level: 5, cost: 10000000, daily: 60000, rankUpReward: 1000000 },
    { level: 6, cost: 30000000, daily: 80000, rankUpReward: 3000000 },
    { level: 7, cost: 50000000, daily: 100000, rankUpReward: 5000000 },
    { level: 8, cost: 100000000, daily: 150000, rankUpReward: 10000000 },
    { level: 9, cost: 200000000, daily: 300000, rankUpReward: 20000000 }
];

/* ============================================================
   2. TIỆN ÍCH CHUNG (TOAST, POPUP, COPY)
   ============================================================ */
function formatMoney(amount) { 
    return Math.floor(amount).toLocaleString('vi-VN') + " VND"; 
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer'); 
    if(!container) return;
    const toast = document.createElement('div'); 
    toast.className = `toast ${type}`;
    let icon = type === 'success' ? '<i class="fa-solid fa-circle-check"></i>' : 
              (type === 'warning' ? '<i class="fa-solid fa-triangle-exclamation"></i>' : '<i class="fa-solid fa-circle-xmark"></i>');
    toast.innerHTML = `${icon}<span>${message}</span>`;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => { 
        toast.classList.remove('show'); 
        setTimeout(() => toast.remove(), 300); 
    }, 3000);
}

function openModal(id) { const m = document.getElementById(id); if(m) m.classList.add('active'); }
function closeModal(id) { const m = document.getElementById(id); if(m) m.classList.remove('active'); }
function copyText(text) { navigator.clipboard.writeText(text).then(() => showToast(`Đã sao chép!`, 'success')).catch(() => showToast("Lỗi sao chép!", 'error')); }

function showWinPopup(msg) {
    document.getElementById('winPopupMsg').innerHTML = msg;
    document.getElementById('winPopup').classList.add('show');
    document.getElementById('overlay').classList.add('show');
}
function closeWinPopup() {
    document.getElementById('winPopup').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
}

// BẢN VÁ LỖI NÚT "ĐÃ HIỂU" TỐI THƯỢNG
window.closeIntroPopup = function() {
    const popup = document.getElementById('introPopup');
    if (popup) {
        popup.classList.remove('show');
        popup.style.display = 'none'; // Ép ẩn nếu CSS lỗi
    }
};

/* ============================================================
   3. ĐIỀU HƯỚNG TAB & SUB-TAB
   ============================================================ */
function navigate(event, pageId) {
    if(event) event.preventDefault();
    document.querySelectorAll('.page-container').forEach(p => p.classList.remove('active'));
    const targetPage = document.getElementById(pageId); 
    if(targetPage) targetPage.classList.add('active');
    
    document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
    const menuItem = document.querySelector(`.menu-item[onclick*="'${pageId}'"]`); 
    if(menuItem) menuItem.classList.add('active');
    
    // Logic phụ khi vào từng trang
    if(pageId === 'page-game') backToLobby();
    if(pageId === 'page-community') renderLeaderboard('deposit');
    if(pageId === 'page-coins') {
        initCoinMarket();
    } else {
        if(typeof coinInterval !== 'undefined' && coinInterval) clearInterval(coinInterval);
    }
}

function switchTab(event, contentId, contentClass) {
    let pageContainer;
    if(event && event.currentTarget) {
        pageContainer = event.currentTarget.closest('.page-container');
    } else {
        pageContainer = document.getElementById(contentId).closest('.page-container');
    }
    if(!pageContainer) return;
    
    pageContainer.querySelectorAll('.' + contentClass).forEach(c => c.classList.remove('active'));
    const targetContent = pageContainer.querySelector('#' + contentId);
    if(targetContent) targetContent.classList.add('active');
    
    if(event && event.currentTarget) { 
        const parentNav = event.currentTarget.parentElement; 
        parentNav.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active')); 
        event.currentTarget.classList.add('active'); 
    }
}

/* ============================================================
   4. HỆ THỐNG DATA & TÀI KHOẢN (LOCALSTORAGE)
   ============================================================ */
function loadData() {
    const sessionUser = localStorage.getItem('gogo_current_session');
    if (sessionUser && allUsers[sessionUser]) {
        currentUser = allUsers[sessionUser];
    } else {
        currentUser = null;
    }

    renderUserPageUI();
    
    const storageKey = currentUser ? `gogo_data_${currentUser.id}` : 'gogo_data_guest';
    const saved = localStorage.getItem(storageKey);
    
    // Khởi tạo data trắng
    userBalance = 0; userLevel = 1; userExp = 0; currentVipLevel = 0; totalDeposited = 0;
    dailyTasks = 0; dailyGames = 0; dailyAtt = false; 
    myInventory = []; myTickets = []; transactionHistory = []; myAssets = [];
    
    if (saved) {
        const data = JSON.parse(saved);
        userBalance = parseFloat(data.balance) || 0; 
        userLevel = data.level || 1; 
        userExp = data.exp || 0;
        currentVipLevel = parseInt(data.vip) || 0; 
        totalDeposited = parseFloat(data.totalDep) || 0;
        
        if(data.dTasks) dailyTasks = data.dTasks; 
        if(data.dGames) dailyGames = data.dGames;
        if(data.dAtt) dailyAtt = data.dAtt; 
        if(data.tickets) myTickets = data.tickets;
        if(data.inventory) myInventory = data.inventory; 
        if(data.history) transactionHistory = data.history;
        if(data.assets) myAssets = data.assets; 
        if(data.lastAtt) lastAttTime = data.lastAtt;
        if(data.usedCodes) usedCodes = data.usedCodes; 
        if(data.wrongCodeCount) wrongCodeCount = data.wrongCodeCount;
        if(data.banCodeEndTime) banCodeEndTime = data.banCodeEndTime;
    }

    // Render lại toàn bộ giao diện sau khi nạp data
    updateBalanceUI(); 
    renderVipUI_Fix(); 
    updateStatsUI(); 
    renderMyAssets(); 
    renderRecentTransactions(); 
    updateAttUI(); 
    updateBanUI();
}

function saveData() {
    const storageKey = currentUser ? `gogo_data_${currentUser.id}` : 'gogo_data_guest';
    const data = { 
        balance: userBalance, level: userLevel, exp: userExp, vip: currentVipLevel, totalDep: totalDeposited,
        dTasks: dailyTasks, dGames: dailyGames, dAtt: dailyAtt, tickets: myTickets,
        inventory: myInventory, history: transactionHistory, assets: myAssets, lastAtt: lastAttTime,
        usedCodes: usedCodes, wrongCodeCount: wrongCodeCount, banCodeEndTime: banCodeEndTime
    };
    localStorage.setItem(storageKey, JSON.stringify(data));
}

function updateBalance(amount) { 
    userBalance += amount; 
    updateBalanceUI();
    saveData();
}

function updateBalanceUI() {
    const formatted = formatMoney(userBalance);
    if(document.getElementById('displayBalance')) document.getElementById('displayBalance').innerText = formatted; 
    if(document.getElementById('walletCardBalance')) document.getElementById('walletCardBalance').innerText = formatted;
    if(document.getElementById('withdrawBalanceHint')) document.getElementById('withdrawBalanceHint').innerText = "Khả dụng: " + formatted;
}

function renderUserPageUI() {
    if (currentUser) {
        document.getElementById('guest-view').style.display = 'none'; 
        document.getElementById('logged-view').style.display = 'block';
        document.getElementById('profileName').innerText = currentUser.charName || "Game Thủ"; 
        document.getElementById('profileTiktok').innerText = currentUser.tiktok || "---"; 
        document.getElementById('profilePhone').innerText = currentUser.id;
    } else {
        document.getElementById('guest-view').style.display = 'block'; 
        document.getElementById('logged-view').style.display = 'none';
    }
}

/* --- LOGIC ĐĂNG NHẬP / ĐĂNG KÝ --- */
function openAuthModal(type) { 
    if(type === 'login') openModal('loginModal');
    if(type === 'register') openModal('registerModal'); 
}

function closeAuthModal(type) { 
    if(type === 'login') closeModal('loginModal');
    if(type === 'register') closeModal('registerModal'); 
}

function processRegister() {
    const id = document.getElementById('regId').value.trim(); 
    const pass = document.getElementById('regPass').value.trim(); 
    const ref = document.getElementById('regRef').value.trim().toUpperCase(); 
    const tiktok = document.getElementById('regTiktok').value.trim();

    if(!id || !pass || !ref || !tiktok) { 
        showToast("Vui lòng điền đủ 4 mục bắt buộc!", "error"); 
        return; 
    }
    if(!VALID_REF_CODES.includes(ref)) { 
        showToast("Mã giới thiệu không hợp lệ!", "error"); 
        return; 
    }
    if(allUsers[id]) { 
        showToast("Tài khoản đã tồn tại!", "error"); 
        return; 
    }

    window.tempRegData = { id, pass, ref, tiktok }; 
    closeAuthModal('register'); 
    openModal('setNameModal');
}

function rollRandomUsername() {
    const prefixes = ["Hacker", "Vip", "Pro", "Master", "Dark", "Light"]; 
    const suffixes = ["Player", "Lord", "King", "Queen", "Knight", "Ghost"];
    let newName = prefixes[Math.floor(Math.random() * prefixes.length)] + suffixes[Math.floor(Math.random() * suffixes.length)] + (Math.floor(Math.random() * 999) + 1);
    
    let inputField = document.getElementById('charNameInput'); 
    inputField.value = newName;
    inputField.style.transform = 'scale(1.1)'; 
    inputField.style.borderColor = '#f5c518';
    
    setTimeout(() => { 
        inputField.style.transform = 'scale(1)'; 
        inputField.style.borderColor = '#00c6ff'; 
    }, 250);
}

function completeRegistration() {
    const charName = document.getElementById('charNameInput').value.trim(); 
    if(!charName) { 
        showToast("Vui lòng nhập tên nhân vật!", "error"); 
        return; 
    }

    const { id, pass, ref, tiktok } = window.tempRegData; 
    const newUser = { id, pass, ref, tiktok, charName };
    
    allUsers[id] = newUser; 
    localStorage.setItem('gogo_auth_users', JSON.stringify(allUsers)); 
    localStorage.setItem('gogo_current_session', id);
    
    document.getElementById('regId').value = ""; 
    document.getElementById('regPass').value = ""; 
    document.getElementById('regRef').value = ""; 
    document.getElementById('regTiktok').value = ""; 
    document.getElementById('charNameInput').value = "";
    
    closeModal('setNameModal'); 
    showToast("Đăng ký thành công! Chào mừng " + charName, "success"); 
    loadData();
}

function processLogin() {
    const id = document.getElementById('loginId').value.trim(); 
    const pass = document.getElementById('loginPass').value.trim();

    if(!allUsers[id]) { 
        showToast("Tài khoản không tồn tại!", "error"); 
        return; 
    }
    if(allUsers[id].pass !== pass) { 
        showToast("Sai mật khẩu!", "error"); 
        return; 
    }

    localStorage.setItem('gogo_current_session', id); 
    closeAuthModal('login'); 
    showToast("Đăng nhập thành công!", "success");
    
    document.getElementById('loginId').value = ""; 
    document.getElementById('loginPass').value = ""; 
    loadData();
}

function handleLogout() {
    if(confirm("Bạn muốn đăng xuất?")) { 
        localStorage.removeItem('gogo_current_session'); 
        showToast("Đã đăng xuất. Về chế độ Khách.", "success"); 
        loadData(); 
        navigate(null, 'page-user'); 
    }
}

function confirmResetAccount() {
    if (confirm("⚠️ CẢNH BÁO QUAN TRỌNG!\n\nBạn có chắc chắn muốn xóa toàn bộ dữ liệu để chơi lại từ đầu không?")) {
        const btn = event.target; 
        if(btn) { 
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> ĐANG XÓA...'; 
            btn.disabled = true; 
        }
        setTimeout(() => { 
            localStorage.clear(); 
            location.reload(); 
        }, 1500);
    }
}

/* ============================================================
   5. BANKING (NẠP, RÚT, LỊCH SỬ)
   ============================================================ */
function addTransaction(type, amount, desc) {
    transactionHistory.unshift({ 
        id: Date.now(), type: type, amount: amount, desc: desc, time: new Date().toLocaleString('vi-VN') 
    });
    saveData(); 
    renderRecentTransactions();
}

function renderRecentTransactions() {
    const container = document.getElementById('recentTransList'); 
    if(!container) return;
    
    if(transactionHistory.length === 0) { 
        container.innerHTML = `<div style="text-align:center; color:#666; font-size:0.8rem; margin-top:20px;"><i class="fa-solid fa-clock-rotate-left" style="font-size:1.5rem; margin-bottom:10px;"></i><br>Chưa có giao dịch nào</div>`; 
        return; 
    }
    
    container.innerHTML = '';
    transactionHistory.slice(0, 5).forEach(t => {
        const div = document.createElement('div'); div.className = 'trans-item';
        const isIn = t.type === 'deposit'; 
        const iconClass = isIn ? 't-in' : 't-out'; 
        const iconSign = isIn ? '<i class="fa-solid fa-arrow-down"></i>' : '<i class="fa-solid fa-arrow-up"></i>'; 
        const amountClass = isIn ? 'plus' : 'minus'; 
        const sign = isIn ? '+' : '-';
        
        div.innerHTML = `
            <div class="trans-left">
                <div class="trans-icon ${iconClass}">${iconSign}</div>
                <div class="trans-info"><h4>${t.desc}</h4><p>${t.time}</p></div>
            </div>
            <div class="trans-amount ${amountClass}">${sign}${formatMoney(t.amount)}</div>
        `; 
        container.appendChild(div);
    });
}

function openHistoryModal(filterType) {
    const container = document.getElementById('historyListContent'); 
    const title = document.getElementById('historyTitle'); 
    container.innerHTML = '';
    
    let filtered = filterType === 'deposit' ? transactionHistory.filter(t => t.type === 'deposit') : transactionHistory.filter(t => t.type === 'withdraw');
    title.innerText = filterType === 'deposit' ? "Lịch Sử Nạp Tiền" : "Lịch Sử Rút Tiền";
    
    if(filtered.length === 0) {
        container.innerHTML = `<div style="text-align:center; color:#666; margin-top:50px;">Không có dữ liệu</div>`;
    } else {
        filtered.forEach(t => {
            const div = document.createElement('div'); div.className = 'trans-item'; 
            const isIn = t.type === 'deposit'; 
            const iconClass = isIn ? 't-in' : 't-out'; 
            const iconSign = isIn ? '<i class="fa-solid fa-arrow-down"></i>' : '<i class="fa-solid fa-arrow-up"></i>'; 
            const amountClass = isIn ? 'plus' : 'minus'; 
            const sign = isIn ? '+' : '-';
            
            div.innerHTML = `<div class="trans-left"><div class="trans-icon ${iconClass}">${iconSign}</div><div class="trans-info"><h4>${t.desc}</h4><p>${t.time}</p></div></div><div class="trans-amount ${amountClass}">${sign}${formatMoney(t.amount)}</div>`; 
            container.appendChild(div);
        });
    }
    openModal('historyModal');
}

function showReceiptPopup(type, amount) {
    const popup = document.getElementById('bankingReceiptPopup'); 
    const overlay = document.getElementById('overlay'); 
    const header = document.getElementById('receiptHeader'); 
    const icon = document.querySelector('.receipt-icon-circle'); 
    const title = document.getElementById('receiptTitle'); 
    const val = document.getElementById('receiptAmount'); 
    const typeTxt = document.getElementById('receiptType');
    
    if (type === 'deposit') { 
        header.classList.remove('withdraw'); header.style.backgroundColor = "#32d74b"; 
        icon.innerHTML = '<i class="fa-solid fa-check"></i>'; icon.style.color = "#32d74b"; 
        title.innerText = "NẠP THÀNH CÔNG"; val.innerText = "+" + formatMoney(amount); 
        val.style.color = "#32d74b"; typeTxt.innerText = "Nạp tiền vào ví"; 
    } else { 
        header.classList.add('withdraw'); header.style.backgroundColor = "#ff9500"; 
        icon.innerHTML = '<i class="fa-solid fa-paper-plane"></i>'; icon.style.color = "#ff9500"; 
        title.innerText = "LỆNH RÚT ĐÃ GỬI"; val.innerText = "-" + formatMoney(amount); 
        val.style.color = "#ff453a"; typeTxt.innerText = "Rút về tài khoản"; 
    }
    
    document.getElementById('receiptTime').innerText = new Date().toLocaleString('vi-VN'); 
    document.getElementById('receiptCode').innerText = "TRX" + Math.floor(Date.now());
    
    popup.classList.add('show'); 
    if(overlay) overlay.classList.add('show');
}

function closeReceiptPopup() { 
    document.getElementById('bankingReceiptPopup').classList.remove('show'); 
    const overlay = document.getElementById('overlay'); 
    if(overlay) overlay.classList.remove('show'); 
}

/* NẠP TIỀN 2 BƯỚC */
let depositTimerInterval = null;

window.setAmount = function(amount) {
    const input = document.getElementById('depositAmount');
    if(input) input.value = amount;
}

window.openDepositModal = function() {
    if (!currentUser) { 
        showToast("Vui lòng Đăng ký/Đăng nhập để nạp tiền!", "warning"); 
        openAuthModal('register'); 
        return; 
    }
    
    document.getElementById('depositStep1').style.display = 'block';
    document.getElementById('depositStep2').style.display = 'none';
    document.getElementById('depositAmount').value = '';
    
    if(depositTimerInterval) clearInterval(depositTimerInterval);
    
    openModal('depositModal');
};

window.generateDepositOrder = function() {
    const amount = parseInt(document.getElementById('depositAmount').value);
    
    if (!amount || amount < 10000) { 
        showToast("Vui lòng nhập tối thiểu 10,000 VND!", "error"); 
        return; 
    }
    
    pendingDepositAmount = amount;
    
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; 
    let randomCode = '';
    for (let i = 0; i < 6; i++) randomCode += chars.charAt(Math.floor(Math.random() * chars.length));
    const finalCode = "GOGO-" + randomCode;
    
    document.getElementById('finalDepositCode').innerText = finalCode;
    document.getElementById('finalDepositAmount').innerText = formatMoney(amount);
    
    let timeLeft = 600; 
    if(depositTimerInterval) clearInterval(depositTimerInterval);
    
    depositTimerInterval = setInterval(() => {
        timeLeft--;
        let m = Math.floor(timeLeft / 60);
        let s = timeLeft % 60;
        document.getElementById('depositCountdown').innerText = `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
        
        if(timeLeft <= 0) {
            clearInterval(depositTimerInterval);
            cancelDepositOrder();
            showToast("Đã hết thời gian nạp tiền. Vui lòng tạo lệnh mới!", "error");
        }
    }, 1000);

    document.getElementById('depositStep1').style.display = 'none';
    const step2 = document.getElementById('depositStep2');
    step2.style.display = 'block';
    step2.style.animation = "fadeIn 0.4s ease";
};

window.copyDepositCode = function() {
    copyText(document.getElementById('finalDepositCode').innerText);
}

window.cancelDepositOrder = function() {
    if(depositTimerInterval) clearInterval(depositTimerInterval);
    document.getElementById('depositStep1').style.display = 'block';
    document.getElementById('depositStep2').style.display = 'none';
}

window.confirmDepositTransfer = function() {
    if(depositTimerInterval) clearInterval(depositTimerInterval);
    closeModal('depositModal');
    
    document.getElementById('depositVerifyCode').value = ''; 
    document.getElementById('depositVerifyCode').classList.remove('input-error'); 
    document.getElementById('verifyErrorMsg').style.display = 'none';
    
    setTimeout(() => { openModal('verifyDepositModal'); }, 400);
};

window.handleVerifyDeposit = function() {
    const inputEl = document.getElementById('depositVerifyCode'); 
    const errorMsg = document.getElementById('verifyErrorMsg');
    const code = inputEl.value.trim().toUpperCase(); 

    inputEl.classList.remove('input-error'); 
    errorMsg.style.display = 'none';

    if (VALID_DEPOSIT_CODES.includes(code) && !usedDepositCodes.includes(code)) {
        usedDepositCodes.push(code); 
        localStorage.setItem('gogo_used_dep_codes', JSON.stringify(usedDepositCodes));
        
        closeModal('verifyDepositModal');
        showToast("Mã chính xác! Đang cập nhật số dư...", "success");
        
        setTimeout(() => {
            totalDeposited += pendingDepositAmount; 
            updateBalance(pendingDepositAmount);
            
            let oldLevel = currentVipLevel; 
            let newLevel = calculateVipLevel(totalDeposited);
            
            if (newLevel > oldLevel) {
                currentVipLevel = newLevel; 
                let bonus = 0;
                for(let i = oldLevel + 1; i <= newLevel; i++) bonus += vipConfigFix[i].rankUpReward;
                updateBalance(bonus);
                showWinPopup(`THĂNG CẤP VIP ${newLevel} THÀNH CÔNG!<br><br><span style="font-size:1rem; color:green;">Thưởng: +${formatMoney(bonus)}</span>`);
            }
            
            saveData(); 
            renderVipUI_Fix(); 
            addTransaction('deposit', pendingDepositAmount, "Nạp qua Ngân hàng");
            
            if(newLevel === oldLevel) showReceiptPopup('deposit', pendingDepositAmount);
        }, 1000); 
    } else {
        inputEl.classList.add('input-error'); 
        errorMsg.style.display = 'block';
        if(usedDepositCodes.includes(code)) {
            showToast("Mã xác nhận đã được sử dụng!", "error"); 
        } else {
            showToast("Mã không chính xác!", "error");
        }
        if(navigator.vibrate) navigator.vibrate(200);
    }
}

// RÚT TIỀN
function openWithdrawModal() {
    if (!currentUser) { 
        showToast("Vui lòng Đăng Nhập để rút tiền!", "warning"); 
        openAuthModal('login'); 
        return; 
    }
    if (currentVipLevel < 1) {
        showToast("Bảo mật: Bạn cần đạt VIP 1 để mở khóa Rút Tiền!", "error");
        setTimeout(() => { 
            navigate(null, 'page-home'); 
            switchTab(null, 'h-capvip', 'h-content'); 
        }, 1500); 
        return;
    }
    
    document.getElementById('withdrawAmount').value = ''; 
    document.getElementById('withdrawBalanceHint').innerText = "Khả dụng: " + formatMoney(userBalance);
    openModal('withdrawModal');
}

function confirmWithdraw() {
    const bank = document.getElementById('withdrawBank').value; 
    const accNum = document.getElementById('withdrawAccNum').value; 
    const name = document.getElementById('withdrawName').value; 
    const amount = parseInt(document.getElementById('withdrawAmount').value);

    if(!accNum || !name) { showToast("Thiếu thông tin nhận tiền!", "error"); return; }
    if(!amount || amount < 50000) { showToast("Rút tối thiểu 50,000 VND!", "error"); return; }
    if(amount > userBalance) { showToast("Số dư không đủ!", "error"); return; }

    updateBalance(-amount); 
    addTransaction('withdraw', amount, `Rút về ${bank} - ${name.toUpperCase()}`);
    
    closeModal('withdrawModal'); 
    showReceiptPopup('withdraw', amount);
}

/* ============================================================
   6. HỆ THỐNG VIP & ĐIỂM DANH, CODE
   ============================================================ */
function calculateVipLevel(totalMoney) {
    let level = 0; 
    for (let i = vipConfigFix.length - 1; i >= 0; i--) { 
        if (totalMoney >= vipConfigFix[i].cost) { level = vipConfigFix[i].level; break; } 
    } 
    return level;
}

function renderVipUI_Fix() {
    if(document.getElementById('currentVipTitle')) document.getElementById('currentVipTitle').innerText = "VIP " + currentVipLevel;
    let nextLevelConfig = vipConfigFix[currentVipLevel + 1]; 
    let percent = 100;
    
    if (nextLevelConfig) {
        let range = nextLevelConfig.cost - vipConfigFix[currentVipLevel].cost; 
        let progress = totalDeposited - vipConfigFix[currentVipLevel].cost;
        percent = Math.max(0, Math.min((progress / range) * 100, 100));
        
        let textEl = document.getElementById('vip-progress-info');
        if(!textEl) { 
            const barContainer = document.querySelector('.vip-bar-bg'); 
            if(barContainer) { 
                textEl = document.createElement('div'); 
                textEl.id = 'vip-progress-info'; 
                textEl.style.fontSize = '0.7rem'; textEl.style.marginTop = '5px'; 
                textEl.style.color = '#fff'; textEl.style.textAlign = 'right'; 
                barContainer.parentNode.insertBefore(textEl, barContainer.nextSibling); 
            } 
        }
        if(textEl) textEl.innerText = `Nạp thêm ${formatMoney(nextLevelConfig.cost - totalDeposited)} lên VIP ${nextLevelConfig.level}`;
    }
    
    if(document.getElementById('vipProgressBar')) document.getElementById('vipProgressBar').style.width = percent + "%";
    if(document.getElementById('dailyRewardText')) document.getElementById('dailyRewardText').innerText = `VIP ${currentVipLevel}: Nhận ${formatMoney(vipConfigFix[currentVipLevel].daily)} / lần`;
    
    const container = document.getElementById('vipListContainer');
    if(container) {
        container.innerHTML = "";
        vipConfigFix.forEach(vip => {
            const isCurrent = (vip.level === currentVipLevel); 
            const isActive = (vip.level <= currentVipLevel); 
            const color = isCurrent ? "var(--ios-accent)" : (isActive ? "#fff" : "#666");
            
            container.innerHTML += `
                <div class="vip-item-row" style="border-color:${isCurrent ? 'var(--ios-accent)' : 'rgba(255,255,255,0.05)'}">
                    <div style="display:flex; align-items:center; gap:10px;">
                        <div class="vip-tag" style="color:${color}">VIP ${vip.level}</div>
                        <div>
                            <div style="font-size:0.75rem; color:#fff;">Mốc: ${formatMoney(vip.cost)}</div>
                            <div style="font-size:0.65rem; color:#888;">Thưởng: ${formatMoney(vip.rankUpReward)}</div>
                        </div>
                    </div>
                    <div style="font-size:0.7rem; font-weight:bold; color:${isCurrent ? 'var(--ios-green)' : '#666'}">${isActive ? 'Đã đạt' : 'Chưa đạt'}</div>
                </div>`;
        });
    }
}

function addExp(amount) {
    userExp += amount;
    if (userExp >= 1000) { 
        userLevel++; 
        userExp -= 1000; 
        showWinPopup(`BẠN ĐÃ LÊN CẤP ${userLevel}!<br>Nhận ngay 10,000 VND thưởng.`); 
        updateBalance(10000); 
    }
    if(document.getElementById('userLevelDisplay')) document.getElementById('userLevelDisplay').innerText = userLevel;
    if(document.getElementById('expText')) document.getElementById('expText').innerText = `${userExp} / 1000 EXP`;
    if(document.getElementById('expFill')) document.getElementById('expFill').style.width = (userExp / 1000 * 100) + '%';
    saveData();
}

function updateStatsUI() {
    if(document.getElementById('statTask')) document.getElementById('statTask').innerText = dailyTasks;
    if(document.getElementById('statGame')) document.getElementById('statGame').innerText = dailyGames;
    
    const statAtt = document.getElementById('statAtt'); 
    if(statAtt) { 
        if(dailyAtt) { statAtt.innerText = "Đã xong"; statAtt.style.color = "var(--ios-green)"; } 
        else { statAtt.innerText = "Chưa"; statAtt.style.color = "#fff"; } 
    }
    
    if(document.getElementById('statCode')) document.getElementById('statCode').innerText = dailyCodes;
    
    const btnGame = document.getElementById('btnTaskGame'); 
    if(btnGame) { 
        if(dailyGames >= 3) { btnGame.innerText = "Nhận thưởng"; if(btnGame.classList.contains('completed')) btnGame.innerText = "Đã nhận"; } 
        else { btnGame.innerText = `${dailyGames}/3`; } 
    }
    
    let currentProgress = weeklyProgress; 
    if(dailyAtt && dailyTasks >= 3) currentProgress = 7;
    
    if(document.getElementById('weeklyProgressBar')) document.getElementById('weeklyProgressBar').style.width = (currentProgress / 7 * 100) + "%";
    if(document.getElementById('weeklyProgressText')) document.getElementById('weeklyProgressText').innerText = `Tiến độ: ${currentProgress}/7 ngày`;
    
    const btnBonus = document.getElementById('btnBonusWeek');
    if(btnBonus) {
        if(bonusClaimed) { btnBonus.innerText = "ĐÃ NHẬN THƯỞNG TUẦN"; btnBonus.disabled = true; btnBonus.style.background = "#333"; } 
        else if(currentProgress >= 7) { btnBonus.innerText = "NHẬN NGAY 250.000 VND"; btnBonus.disabled = false; btnBonus.style.background = "var(--ios-accent)"; btnBonus.style.color = "#000"; } 
        else { btnBonus.innerText = "CHƯA ĐỦ ĐIỀU KIỆI"; btnBonus.disabled = true; btnBonus.style.background = "#444"; }
    }
}

function handleAttendance() {
    const now = Date.now(); 
    const cooldown = 24 * 60 * 60 * 1000;
    
    if (now - lastAttTime < cooldown) {
        const remaining = cooldown - (now - lastAttTime); 
        const hours = Math.floor(remaining / (1000 * 60 * 60)); 
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        showToast(`Chưa đến giờ! Quay lại sau ${hours} giờ ${minutes} phút.`, 'warning'); 
        return;
    }
    
    const reward = vipConfigFix[currentVipLevel].daily; 
    updateBalance(reward); addExp(50);
    lastAttTime = now; dailyAtt = true; 
    
    saveData(); 
    updateAttUI(); 
    showWinPopup(`Điểm danh thành công!<br><br><span style="color:var(--ios-green)">+${formatMoney(reward)}</span>`);
}

function updateAttUI() {
    const btn = document.getElementById('btnAtt'); 
    const statusText = document.getElementById('timelineStatusText'); 
    if(!btn) return;
    
    if(attInterval) clearInterval(attInterval);
    
    attInterval = setInterval(() => {
        const diff = Date.now() - lastAttTime; 
        const cooldown = 24 * 60 * 60 * 1000;
        
        if (diff < cooldown) {
            const rem = cooldown - diff; 
            btn.innerText = `Chờ: ${Math.floor((rem / (1000*60*60)) % 24)}h ${Math.floor((rem / (1000*60)) % 60)}m ${Math.floor((rem / 1000) % 60)}s`; 
            btn.disabled = true; btn.style.background = "#444"; btn.style.boxShadow = "none";
            if(statusText) { statusText.innerText = "Vui lòng chờ hết thời gian đếm ngược"; statusText.style.color = "#888"; }
        } else {
            btn.innerText = "BẤM ĐỂ ĐIỂM DANH"; btn.disabled = false; btn.style.background = "var(--ios-blue)"; btn.style.boxShadow = "0 4px 15px rgba(0, 122, 255, 0.4)";
            if(statusText) { statusText.innerText = "Đã có thể nhận thưởng ngay!"; statusText.style.color = "var(--ios-green)"; } 
            clearInterval(attInterval);
        }
    }, 1000);
}

// BẢN VÁ LỖI NHẬP CODE: Thưởng từ 20k -> 50k
function redeemCode() {
    if(Date.now() < banCodeEndTime) { 
        showToast(`Bạn bị cấm nhập. Thử lại sau ${Math.ceil((banCodeEndTime - Date.now()) / 1000 / 60)} phút.`, 'error'); 
        return; 
    }
    
    const codeInput = document.getElementById('giftcodeInput'); 
    const code = codeInput.value.trim().toUpperCase();
    
    if(code === "") { showToast("Vui lòng nhập mã Giftcode!", 'error'); return; }
    
    if(FULL_GIFTCODES.includes(code)) {
        if(usedCodes.includes(code)) { 
            showToast("Mã Giftcode này đã được sử dụng!", 'warning'); 
        } else {
            // Random từ 20.000 đến 50.000
            const minReward = 20000;
            const maxReward = 50000;
            const reward = Math.floor(Math.random() * (maxReward - minReward + 1)) + minReward; 
            
            updateBalance(reward); addExp(200); dailyCodes++; 
            usedCodes.push(code); wrongCodeCount = 0; 
            saveData(); updateStatsUI();
            
            showWinPopup(`NHẬP CODE THÀNH CÔNG!<br><br>Mã: <b style="color:#fff">${code}</b><br>Phần thưởng: <span style="color:var(--ios-green); font-size:1.5rem; font-weight:bold;">+${formatMoney(reward)}</span>`); 
            codeInput.value = "";
        }
    } else {
        wrongCodeCount++; saveData();
        if(wrongCodeCount >= 5) { 
            banCodeEndTime = Date.now() + (24 * 60 * 60 * 1000); 
            saveData(); updateBanUI(); 
            showToast("Nhập sai quá 5 lần! Cấm 24h.", 'error'); 
        } else { 
            showToast(`Mã Code không tồn tại! (${wrongCodeCount}/5)`, 'error'); 
        }
    }
}

function updateBanUI() {
    const banMsg = document.getElementById('banMessage');
    if(Date.now() < banCodeEndTime) { 
        if(banMsg) banMsg.style.display = "block"; 
        document.getElementById('banTimeDisplay').innerText = new Date(banCodeEndTime).toLocaleTimeString(); 
        document.getElementById('giftcodeInput').disabled = true; 
    } else { 
        if(banMsg) banMsg.style.display = "none"; 
        document.getElementById('giftcodeInput').disabled = false; 
    }
}

setInterval(() => { 
    if(banCodeEndTime > 0 && Date.now() > banCodeEndTime) { 
        banCodeEndTime = 0; wrongCodeCount = 0; saveData(); updateBanUI(); 
    } 
}, 60000);

function claimWeeklyBonus() { 
    if(bonusClaimed) return; 
    bonusClaimed = true; 
    updateBalance(250000); updateStatsUI(); 
    showWinPopup("CHÚC MỪNG BẠN ĐÃ NHẬN ĐƯỢC 250.000 VND THƯỞNG TUẦN!"); 
}

function handleWatchAd(btn) { 
    if(btn.classList.contains('completed')) return; 
    window.open('https://changdinhanh-cyber.github.io/MMOaucot/', '_blank'); 
    btn.innerText = "Đang kiểm tra..."; btn.disabled = true; 
    setTimeout(() => { 
        updateBalance(1000); addExp(50); dailyTasks++; updateStatsUI(); 
        btn.innerText = "Đã nhận"; btn.classList.add('completed'); 
        showToast("+1,000 VND & +50 XP"); 
    }, 3000); 
}

function handleGameTask(btn) { 
    if(btn.classList.contains('completed')) return; 
    if(dailyGames < 3) { 
        showToast(`Bạn cần chơi thêm ${3 - dailyGames} ván nữa!`, 'warning'); 
        navigate(null, 'page-game'); 
    } else { 
        updateBalance(5000); addExp(100); dailyTasks++; updateStatsUI(); 
        btn.innerText = "Đã nhận"; btn.classList.add('completed'); 
        showToast("+5,000 VND & +100 XP"); 
    } 
}

function handleGoToReferral() { 
    navigate(null, 'page-home'); 
    switchTab(null, 'h-tongquan', 'h-content'); 
    setTimeout(() => { 
        document.getElementById('referralSection').scrollIntoView({ behavior: 'smooth', block: 'center' }); 
        showToast("Hãy sao chép mã và gửi cho bạn bè!", 'success'); 
    }, 300); 
}

async function handleShareApp(btn) { 
    if(btn.classList.contains('completed')) return; 
    try { 
        if (navigator.share) await navigator.share({ title: 'GoGo Lite', url: 'https://gogolite.com/' }); 
        else await navigator.clipboard.writeText('https://gogolite.com/'); 
        updateBalance(2000); dailyTasks++; updateStatsUI(); 
        btn.innerText = "Đã nhận"; btn.classList.add('completed'); 
        showToast("Đã nhận thưởng chia sẻ!", 'success'); 
    } catch (err) {} 
}

function copyRefCode() { 
    copyText(document.getElementById('myRefCode').innerText); 
}

/* ============================================================
   7. CHATBOT & GIAO DIỆN PHỤ
   ============================================================ */
const overlay = document.getElementById('overlay');
if(document.getElementById('openNoti')) document.getElementById('openNoti').onclick = () => { document.getElementById('notiTab').classList.add('show'); overlay.classList.add('show'); };
if(document.getElementById('closeNoti')) document.getElementById('closeNoti').onclick = () => { document.getElementById('notiTab').classList.remove('show'); overlay.classList.remove('show'); };
if(document.getElementById('btnOpenSupport')) document.getElementById('btnOpenSupport').onclick = () => { document.getElementById('supportTab').classList.add('show'); overlay.classList.add('show'); };
if(document.getElementById('closeSupport')) document.getElementById('closeSupport').onclick = () => { document.getElementById('supportTab').classList.remove('show'); overlay.classList.remove('show'); };
if(document.getElementById('btnAgreeSupport')) document.getElementById('btnAgreeSupport').onclick = () => { window.open('https://t.me/nhatpham27', '_blank'); document.getElementById('supportTab').classList.remove('show'); overlay.classList.remove('show'); };
if(document.getElementById('robotBtn')) document.getElementById('robotBtn').onclick = () => document.getElementById('chatWidget').classList.toggle('active');
if(document.getElementById('closeChat')) document.getElementById('closeChat').onclick = () => document.getElementById('chatWidget').classList.remove('active');
if(document.getElementById('openRobotDetail')) document.getElementById('openRobotDetail').onclick = () => { document.getElementById('robotDetailTab').classList.add('show'); overlay.classList.add('show'); };
if(document.getElementById('closeRobotDetail')) document.getElementById('closeRobotDetail').onclick = () => { document.getElementById('robotDetailTab').classList.remove('show'); overlay.classList.remove('show'); };

if(overlay) overlay.onclick = () => { 
    [document.getElementById('notiTab'), document.getElementById('robotDetailTab'), document.getElementById('winPopup'), document.getElementById('supportTab')].forEach(el => { if(el) el.classList.remove('show'); }); 
    overlay.classList.remove('show'); 
};

// Đảm bảo nút Đã hiểu hoạt động dù click trực tiếp
document.addEventListener('DOMContentLoaded', () => {
    const btnDaHieu = document.querySelector('#introPopup .btn-main');
    if (btnDaHieu) {
        btnDaHieu.addEventListener('click', window.closeIntroPopup);
    }
});

const chatInput = document.getElementById('chatInput');
const chatBody = document.getElementById('chatBody');
const botKnowledge = [
    { keywords: ['chào', 'hi', 'alo'], response: "Chào bạn! Tôi là trợ lý ảo. Bạn cần hỗ trợ gì?" },
    { keywords: ['nạp', 'tiền chưa vào'], response: "1. Kiểm tra kỹ nội dung CK. 2. Đợi 1-3 phút. 3. Gửi biên lai lên Telegram nếu bị lỗi." },
    { keywords: ['rút'], response: "Cần VIP 1 để rút. Duyệt tự động 5-15 phút." },
    { keywords: ['vip', 'cấp độ'], response: "VIP tính theo Tổng Nạp tích lũy. Xem chi tiết ở trang chủ." },
    { keywords: ['code', 'giftcode'], response: "Tham gia nhóm Telegram ở mục Cộng Đồng để nhận Code hàng ngày." }
];

function handleSend() {
    const text = chatInput.value.trim();
    if (text) {
        const userDiv = document.createElement('div'); userDiv.className = 'msg user'; userDiv.innerText = text; chatBody.appendChild(userDiv);
        chatInput.value = ''; chatBody.scrollTop = chatBody.scrollHeight;
        setTimeout(() => {
            let res = "Tôi chưa hiểu. Bạn có thể hỏi về Nạp, Rút, VIP, Code.";
            for (let item of botKnowledge) { for (let key of item.keywords) { if (text.toLowerCase().includes(key)) { res = item.response; break; } } }
            const botDiv = document.createElement('div'); botDiv.className = 'msg bot'; botDiv.innerText = res; chatBody.appendChild(botDiv); chatBody.scrollTop = chatBody.scrollHeight;
        }, 800); 
    }
}
if(document.getElementById('sendBtn')) document.getElementById('sendBtn').onclick = handleSend;
if(chatInput) chatInput.onkeypress = (e) => { if(e.key === 'Enter') handleSend(); };

/* ============================================================
   8. MINI GAMES
   ============================================================ */
function showMaintenance(gameName) { 
    if(navigator.vibrate) navigator.vibrate(50); 
    showToast(`Game [${gameName}] đang bảo trì!`, 'warning'); 
}

function openGame(gameType, gameName) {
    document.getElementById('gameLobby').classList.add('hidden'); 
    document.getElementById('gamePlayArea').classList.add('active'); 
    document.getElementById('activeGameTitle').innerText = gameName || "Game Zone"; 
    document.querySelectorAll('.single-game-content').forEach(el => el.classList.remove('active'));
    
    const contentEl = document.getElementById('content-' + gameType);
    if(contentEl) { 
        contentEl.classList.add('active'); 
        if(gameType === 'jackpot') renderTickets(); 
    } else {
        showToast('Đang tải...', 'warning');
    }
}

function backToLobby() {
    if (typeof isFishGameActive !== 'undefined' && isFishGameActive) { 
        if(!confirm("Đang chơi dở, thoát sẽ mất tiền?")) return; 
        endFishGame(); 
    }
    if (typeof isAviatorFlying !== 'undefined' && isAviatorFlying) { 
        if(!confirm("Máy bay đang bay! Thoát sẽ mất cược?")) return; 
        resetAviator(); 
    }
    
    document.getElementById('gamePlayArea').classList.remove('active'); 
    document.getElementById('gameLobby').classList.remove('hidden');
    
    if(document.getElementById('spinStatus')) document.getElementById('spinStatus').innerText = ""; 
    if(document.getElementById('giftStatus')) document.getElementById('giftStatus').innerText = "";
    
    const fishOverlay = document.getElementById('fishStartOverlay'); 
    if(fishOverlay) fishOverlay.classList.remove('hidden');
}

// 8.1. CHẴN LẺ
let parityTimeLeft = 30; let isParityRunning = false; let userBet = { choice: null, amount: 0 }; let currentPlayers = 1240;
function startParityGameLoop() { 
    if(isParityRunning) return; 
    isParityRunning = true; 
    setInterval(() => { 
        parityTimeLeft = 30 - (new Date().getSeconds() % 30); 
        const el = document.getElementById('parityTimer'); 
        if(el) { el.innerText = parityTimeLeft; el.style.color = parityTimeLeft <= 5 ? "var(--ios-red)" : "var(--ios-accent)"; } 
        if ((parityTimeLeft === 30 || parityTimeLeft === 0) && !window.isResolving) resolveParityRound(); 
        else if (parityTimeLeft > 25) window.isResolving = false; 
        
        if(Math.random() > 0.3) { 
            currentPlayers += ((Math.floor(Math.random() * 15) + 1) * (Math.random() > 0.5 ? 1 : -1)); 
            if(currentPlayers < 800) currentPlayers = 850; 
            if(currentPlayers > 2500) currentPlayers = 2450; 
            const userEl = document.getElementById('liveUserCount'); 
            if(userEl) userEl.innerText = currentPlayers.toLocaleString(); 
        } 
    }, 1000); 
}
function adjustBet(delta) { 
    const input = document.getElementById('parityBetAmount'); 
    let val = parseInt(input.value) || 0; val += delta; 
    if(val < 0) val = 0; input.value = val; 
}
function placeBet(choice) {
    if(userBet.choice !== null || parityTimeLeft <= 5) return;
    const amount = parseInt(document.getElementById('parityBetAmount').value); 
    if(!amount || amount > userBalance) return;
    
    updateBalance(-amount); 
    userBet = { choice: choice, amount: amount }; 
    document.getElementById('btnBetChan').classList.add('disabled'); 
    document.getElementById('btnBetLe').classList.add('disabled');
    const status = document.getElementById('parityStatus'); 
    status.innerText = `Đã cược: ${formatMoney(amount)} vào ${choice.toUpperCase()}`; 
    status.style.color = choice === 'chan' ? "#d64b4b" : "#4b8ad6"; 
    showToast("Cược thành công!", 'success');
}
function resolveParityRound() {
    window.isResolving = true; 
    const overlay = document.getElementById('resultOverlay'); 
    if(!overlay) return;
    overlay.style.display = 'flex';
    
    let res = Math.floor(Math.random() * 10); 
    if (userBet.choice) {
        res = (Math.random() < 0.3) ? (userBet.choice === 'chan' ? [0,2,4,6,8][Math.floor(Math.random()*5)] : [1,3,5,7,9][Math.floor(Math.random()*5)]) : (userBet.choice === 'chan' ? [1,3,5,7,9][Math.floor(Math.random()*5)] : [0,2,4,6,8][Math.floor(Math.random()*5)]);
    }
    
    const type = (res % 2 === 0) ? 'chan' : 'le'; 
    document.getElementById('finalResultNumber').innerText = res; 
    document.getElementById('finalResultText').innerText = type === 'chan' ? "CHẴN" : "LẺ"; 
    document.getElementById('finalResultText').style.color = type === 'chan' ? "#d64b4b" : "#4b8ad6";
    
    if (userBet.choice) { 
        if (userBet.choice === type) { 
            const payout = userBet.amount * 1.9; 
            setTimeout(() => { updateBalance(payout); showWinPopup(`THẮNG CƯỢC: +${formatMoney(payout)}`); }, 1500); 
        } else {
            setTimeout(() => { showToast("Thua rồi!", 'error'); }, 1500); 
        }
        dailyGames++; updateStatsUI(); saveData(); 
    }
    
    setTimeout(() => { 
        overlay.style.display = 'none'; 
        userBet = { choice: null, amount: 0 }; 
        document.getElementById('btnBetChan').classList.remove('disabled'); 
        document.getElementById('btnBetLe').classList.remove('disabled'); 
        document.getElementById('parityStatus').innerText = "Phiên mới bắt đầu..."; 
        document.getElementById('parityStatus').style.color = "#8e8e93"; 
    }, 4000);
}

// 8.2. BẦU CUA
const bauCuaItems = ['deer', 'gourd', 'chicken', 'fish', 'crab', 'shrimp']; 
const bauCuaEmoji = {'deer':'🦌', 'gourd':'🎃', 'chicken':'🐔', 'fish':'🐟', 'crab':'🦀', 'shrimp':'🦐'};
let bauCuaBets = { deer:0, gourd:0, chicken:0, fish:0, crab:0, shrimp:0 }; 
let isBauCuaRolling = false;

function placeBauCuaBet(item) { 
    if(isBauCuaRolling || userBalance < 10000) return; 
    updateBalance(-10000); 
    bauCuaBets[item] += 10000; 
    document.querySelector(`.bau-cua-item[onclick*="${item}"]`).classList.add('selected'); 
    document.getElementById(`bet-${item}`).innerText = formatMoney(bauCuaBets[item]); 
}

function clearBauCuaBets() { 
    if(isBauCuaRolling) return; 
    let refund = 0; 
    bauCuaItems.forEach(i => refund += bauCuaBets[i]); 
    updateBalance(refund); 
    bauCuaBets = { deer:0, gourd:0, chicken:0, fish:0, crab:0, shrimp:0 }; 
    document.querySelectorAll('.bau-cua-item').forEach(el => { 
        el.classList.remove('selected'); 
        el.querySelector('.bau-cua-bet').innerText = "0"; 
    }); 
}

function playBauCua() {
    let tot = 0; 
    bauCuaItems.forEach(i => tot += bauCuaBets[i]); 
    if(tot === 0 || isBauCuaRolling) return; 
    isBauCuaRolling = true;
    
    const dices = [document.getElementById('dice1'), document.getElementById('dice2'), document.getElementById('dice3')]; 
    dices.forEach(d => d.classList.add('dice-shaking'));
    
    setTimeout(() => {
        dices.forEach(d => d.classList.remove('dice-shaking')); 
        let safe = bauCuaItems.filter(i => bauCuaBets[i] === 0); 
        if (safe.length === 0) safe.push(bauCuaItems.reduce((a, b) => bauCuaBets[a] < bauCuaBets[b] ? a : b));
        let res = [safe[Math.floor(Math.random()*safe.length)], safe[Math.floor(Math.random()*safe.length)], safe[Math.floor(Math.random()*safe.length)]]; 
        dices.forEach((d, i) => d.innerText = bauCuaEmoji[res[i]]);
        
        let win = 0; 
        res.forEach(r => { if(bauCuaBets[r] > 0) win += (bauCuaBets[r] * 2); }); 
        dailyGames++; updateStatsUI();
        
        if(win > 0) { 
            updateBalance(win); 
            showWinPopup(`BẦU CUA: +${formatMoney(win)}`); 
        } else {
            showToast("Mất sạch!", 'error');
        }
        
        setTimeout(() => { 
            clearBauCuaBets(); 
            isBauCuaRolling = false; 
            dices.forEach(d => d.innerText = "❓"); 
        }, 3000);
    }, 2000);
}

// 8.3. VÒNG QUAY & HỘP QUÀ
let isSpinning = false;
if(document.getElementById('spinBtn')) {
    document.getElementById('spinBtn').onclick = () => {
        if (isSpinning || userBalance < 100000) return; 
        isSpinning = true; 
        updateBalance(-100000); dailyGames++; updateStatsUI(); saveData();
        
        const deg = Math.floor(Math.random() * 360) + 3600; 
        document.getElementById('wheel').style.transform = `rotate(${deg}deg)`;
        
        setTimeout(() => {
            isSpinning = false; 
            const idx = Math.floor(((360 - (deg % 360) + 22.5) % 360) / 45); 
            const p = [{v:0},{v:10000},{v:20000},{v:0},{v:50000},{v:5000},{v:0},{v:10000}][idx];
            if (p.v > 0) { 
                showWinPopup(`Trúng: +${formatMoney(p.v)}!`); 
                updateBalance(p.v); addExp(20); 
            } else {
                showToast("Trượt rồi!", 'error');
            }
        }, 4000);
    };
}

function openGift(type, cost) {
    if (userBalance < cost) return; 
    updateBalance(-cost); dailyGames++; updateStatsUI();
    setTimeout(() => { 
        let w = 0, e = 0; 
        if (type === 'Đồng') { w = Math.floor(Math.random() * 3001); e = 10; } 
        else if (type === 'Bạc') { w = Math.floor(Math.random() * 8001); e = 20; } 
        else if (type === 'Vàng') { w = Math.floor(Math.random() * 13001); e = 50; } 
        else if (type === 'Kim Cương') { w = Math.floor(Math.random() * 70001); e = 500; } 
        showWinPopup(`Hộp ${type}: +${formatMoney(w)} & +${e} XP!`); 
        updateBalance(w); addExp(e); saveData(); 
    }, 1000);
}

// 8.4. TÀI XỈU (AUTO LOOP CHUẨN)
let txBet = { side: null, amount: 0 }; 
let isTxResolving = false; 
let txTimeLeft = 30;
let isTxRunning = false;

function startTaiXiuLoop() {
    if(isTxRunning) return;
    isTxRunning = true;
    setInterval(() => {
        txTimeLeft = 30 - (new Date().getSeconds() % 30);
        const el = document.getElementById('txTimer'); 
        if(el) { 
            el.innerText = txTimeLeft; 
            el.style.color = txTimeLeft <= 5 ? '#ff453a' : '#ffdb05'; 
        }
        
        const bowl = document.getElementById('txBowl');
        const resultBar = document.getElementById('txResultBar');

        if (txTimeLeft <= 5 && !isTxResolving) {
            if(bowl) bowl.classList.add('shaking');
            if (txBet.side !== null && resultBar) {
                resultBar.innerHTML = `<span style="color:#ffdb05; font-weight:bold;">ĐÃ KHÓA SỔ! ĐANG XÓC...</span>`;
            } else if (resultBar) {
                resultBar.innerHTML = `<span style="color:#888;">Hết giờ cược...</span>`;
            }
        }
        
        if ((txTimeLeft === 30 || txTimeLeft === 0) && !isTxResolving) {
            resolveTaiXiuRound();
        } else if (txTimeLeft > 25) {
            isTxResolving = false;
        }
    }, 1000);
}

function adjustTaiXiuBet(delta) { 
    if(txBet.side !== null || txTimeLeft <= 5) return; 
    const input = document.getElementById('txBetAmount'); 
    let val = parseInt(input.value) || 0; val += delta; 
    if(val < 10000) val = 10000; input.value = val; 
}

function placeTaiXiuBet(side) {
    if(txTimeLeft <= 5) { showToast("Đã hết thời gian cược!", 'warning'); return; }
    if(txBet.side !== null) { showToast("Bạn đã đặt cược rồi!", 'warning'); return; }
    
    const amount = parseInt(document.getElementById('txBetAmount').value); 
    if(amount > userBalance) { showToast("Số dư không đủ!", 'error'); return; }
    
    updateBalance(-amount); txBet = { side: side, amount: amount };
    document.getElementById('btnTai').classList.add('disabled'); document.getElementById('btnXiu').classList.add('disabled'); 
    document.getElementById(side === 'tai' ? 'btnTai' : 'btnXiu').classList.remove('disabled'); 
    document.getElementById(side === 'tai' ? 'btnTai' : 'btnXiu').classList.add('selected'); 
    document.getElementById('txResultBar').innerHTML = `<span style="color:#fff;">Cược <b>${formatMoney(amount)}</b> vào <b>${side.toUpperCase()}</b></span>`;
    showToast("Đặt cược thành công!", 'success');
}

function resolveTaiXiuRound() {
    isTxResolving = true;
    const bowl = document.getElementById('txBowl');
    if(bowl) bowl.classList.remove('shaking');
    
    let targetType = (Math.random() < 0.8) ? (txBet.side === 'tai' ? 'xiu' : 'tai') : txBet.side;
    if(!txBet.side) targetType = Math.random() > 0.5 ? 'tai' : 'xiu';

    let d1, d2, d3, sum; 
    do { 
        d1 = Math.floor(Math.random()*6)+1; d2 = Math.floor(Math.random()*6)+1; d3 = Math.floor(Math.random()*6)+1; sum = d1+d2+d3; 
        if ((sum > 10 ? 'tai' : 'xiu') === targetType) break; 
    } while (true);
    
    renderDiceFaces([d1, d2, d3]);
    if(bowl) bowl.classList.add('open');
    
    setTimeout(() => {
        let txt = (sum > 10) ? `TÀI (${sum})` : `XỈU (${sum})`; 
        const resultBar = document.getElementById('txResultBar');
        if(resultBar) resultBar.innerHTML = `<b style="color:${sum > 10 ? '#ff4d4d' : '#4d94ff'};">${d1}-${d2}-${d3} : ${txt}</b>`;
        
        if (txBet.side) {
            if (targetType === txBet.side) { 
                const w = txBet.amount * 1.9; updateBalance(w); showWinPopup(`TÀI XỈU: +${formatMoney(w)}`); 
            } else {
                showToast(`Thua rồi!`, 'error');
            }
            dailyGames++; updateStatsUI(); saveData(); 
        }
        
        setTimeout(resetTaiXiu, 4000);
    }, 500);
}

function renderDiceFaces(diceValues) {
    const group = document.getElementById('diceGroup');
    if(!group) return;
    group.innerHTML = '';
    diceValues.forEach(val => {
        let dotsHtml = '';
        if(val === 1) dotsHtml = '<div class="dot center"></div>';
        else if(val === 2) dotsHtml = '<div class="dot top-left"></div><div class="dot bottom-right"></div>';
        else if(val === 3) dotsHtml = '<div class="dot top-left"></div><div class="dot center"></div><div class="dot bottom-right"></div>';
        else if(val === 4) dotsHtml = '<div class="dot top-left"></div><div class="dot top-right"></div><div class="dot bottom-left"></div><div class="dot bottom-right"></div>';
        else if(val === 5) dotsHtml = '<div class="dot top-left"></div><div class="dot top-right"></div><div class="dot center"></div><div class="dot bottom-left"></div><div class="dot bottom-right"></div>';
        else if(val === 6) dotsHtml = '<div class="dot top-left"></div><div class="dot top-right"></div><div class="dot mid-left"></div><div class="dot mid-right"></div><div class="dot bottom-left"></div><div class="dot bottom-right"></div>';
        
        const div = document.createElement('div');
        div.className = 'dice-cube';
        div.setAttribute('data-val', val); 
        div.innerHTML = dotsHtml;
        group.appendChild(div);
    });
}

function resetTaiXiu() { 
    txBet = { side: null, amount: 0 }; 
    document.getElementById('btnTai').classList.remove('disabled', 'selected'); 
    document.getElementById('btnXiu').classList.remove('disabled', 'selected'); 
    document.getElementById('txResultBar').innerHTML = `<span style="color:#888;">Chờ phiên mới...</span>`; 
    document.getElementById('txBowl').classList.remove('open'); 
}

// 8.5. XÓC ĐĨA (AUTO LOOP CHUẨN)
let xocDiaBet = { side: null, amount: 0 }; 
let isXdResolving = false; 
let xdTimeLeft = 30;
let isXdRunning = false;

function startXocDiaLoop() {
    if(isXdRunning) return;
    isXdRunning = true;
    setInterval(() => {
        xdTimeLeft = 30 - (new Date().getSeconds() % 30);
        const el = document.getElementById('xdTimer'); 
        if(el) { 
            el.innerText = xdTimeLeft; 
            el.style.color = xdTimeLeft <= 5 ? '#ff453a' : '#ffdb05'; 
        }
        
        const status = document.getElementById('xocdiaStatus');
        const bowl = document.getElementById('bowl');

        if (xdTimeLeft <= 5 && !isXdResolving) {
            if(bowl) bowl.classList.add('shaking');
            if (xocDiaBet.side !== null && status) {
                status.innerText = "ĐÃ KHÓA SỔ! ĐANG XÓC...";
            } else if(status) {
                status.innerText = "Hết giờ cược...";
            }
        }

        if ((xdTimeLeft === 30 || xdTimeLeft === 0) && !isXdResolving) {
            resolveXocDiaRound();
        } else if (xdTimeLeft > 25) {
            isXdResolving = false;
        }
    }, 1000);
}

function adjustXocDiaBet(delta) { 
    if(xocDiaBet.side !== null || xdTimeLeft <= 5) return; 
    const input = document.getElementById('xocDiaBetAmount'); 
    let val = parseInt(input.value) || 0; val += delta; 
    if(val < 10000) val = 10000; input.value = val; 
}

function placeXocDiaBet(side) {
    if(xdTimeLeft <= 5) { showToast("Đã hết thời gian cược!", 'warning'); return; }
    if(xocDiaBet.side !== null) { showToast("Bạn đã đặt cược rồi!", 'warning'); return; }
    
    const amount = parseInt(document.getElementById('xocDiaBetAmount').value); 
    if(amount > userBalance) { showToast("Số dư không đủ!", 'error'); return; }
    
    updateBalance(-amount); 
    xocDiaBet = { side: side, amount: amount }; 
    
    document.getElementById('btnXocDiaChan').style.opacity = '0.3'; 
    document.getElementById('btnXocDiaLe').style.opacity = '0.3'; 
    const selectedBtn = side === 'chan' ? 'btnXocDiaChan' : 'btnXocDiaLe';
    document.getElementById(selectedBtn).style.opacity = '1'; 
    document.getElementById(selectedBtn).style.boxShadow = '0 0 15px #fff';
    
    document.getElementById('xocdiaStatus').innerText = `Đã cược: ${formatMoney(amount)} vào ${side.toUpperCase()}`; 
    showToast("Đặt cược thành công!", 'success');
}

function resolveXocDiaRound() {
    isXdResolving = true;
    const bowl = document.getElementById('bowl');
    if(bowl) bowl.classList.remove('shaking');
    
    let resultSide = (Math.random() < 0.8) ? (xocDiaBet.side === 'chan' ? 'le' : 'chan') : xocDiaBet.side;
    if(!xocDiaBet.side) resultSide = Math.random() > 0.5 ? 'chan' : 'le';

    let coins = []; 
    if (resultSide === 'chan') { 
        const r = Math.random(); if(r < 0.3) coins = [1,1,1,1]; else if(r < 0.6) coins = [0,0,0,0]; else coins = [1,1,0,0]; 
    } else { 
        if(Math.random() < 0.5) coins = [1,1,1,0]; else coins = [0,0,0,1]; 
    }
    
    coins.sort(() => Math.random() - 0.5); 
    const coinGroup = document.getElementById('coinGroup'); 
    if(coinGroup) {
        coinGroup.innerHTML = ''; 
        coins.forEach(c => { const div = document.createElement('div'); div.className = `coin ${c === 1 ? 'red' : 'white'}`; coinGroup.appendChild(div); });
    }
    
    if(bowl) bowl.classList.add('open');
    
    setTimeout(() => {
        if (xocDiaBet.side) {
            if (xocDiaBet.side === resultSide) { 
                const w = xocDiaBet.amount * 1.9; updateBalance(w); 
                showWinPopup(`XÓC ĐĨA: +${formatMoney(w)}`); 
                document.getElementById('xocdiaStatus').innerText = `Về ${resultSide.toUpperCase()} - Ăn to!`;
            } else {
                showToast(`Mất trắng!`, 'error');
                document.getElementById('xocdiaStatus').innerText = `Về ${resultSide.toUpperCase()} - Thua rồi`;
            }
            dailyGames++; updateStatsUI(); saveData(); 
        } else {
            document.getElementById('xocdiaStatus').innerText = `Kết quả: ${resultSide.toUpperCase()}`;
        }
        
        setTimeout(resetXocDia, 4000);
    }, 800);
}

function resetXocDia() {
    xocDiaBet = { side: null, amount: 0 }; 
    document.getElementById('btnXocDiaChan').style.opacity = '1'; 
    document.getElementById('btnXocDiaLe').style.opacity = '1'; 
    document.getElementById('btnXocDiaChan').style.boxShadow = 'none'; 
    document.getElementById('btnXocDiaLe').style.boxShadow = 'none'; 
    document.getElementById('xocdiaStatus').innerText = "Phiên mới bắt đầu..."; 
    const bowl = document.getElementById('bowl');
    if(bowl) bowl.classList.remove('open'); 
}

// 8.6. MÁY BAY (AVIATOR)
let aviatorInterval = null; let aviatorMultiplier = 1.0; let isAviatorFlying = false; 
let aviatorCanvas, ctx; let aviatorWidth, aviatorHeight; let aviatorPoints = []; let crashPoint = 0; let aviatorBetAmount = 0;

function adjustAviatorBet(delta) { 
    if(isAviatorFlying) return; 
    const input = document.getElementById('aviatorBetAmount'); 
    let val = parseInt(input.value) || 0; val += delta; 
    if(val < 10000) val = 10000; input.value = val; 
}
function initAviatorCanvas() { 
    aviatorCanvas = document.getElementById('aviatorCanvas'); 
    if(!aviatorCanvas) return;
    ctx = aviatorCanvas.getContext('2d'); 
    const container = document.querySelector('.aviator-stage'); 
    aviatorWidth = container.clientWidth; aviatorHeight = container.clientHeight; 
    aviatorCanvas.width = aviatorWidth; aviatorCanvas.height = aviatorHeight; resetAviator(); 
}
function resetAviator() { 
    if(aviatorInterval) cancelAnimationFrame(aviatorInterval); 
    isAviatorFlying = false; aviatorMultiplier = 1.0; aviatorPoints = []; 
    document.getElementById('aviatorMultiplier').innerText = "1.00x"; document.getElementById('aviatorMultiplier').style.color = "#fff"; 
    document.getElementById('boomEffect').style.display = 'none'; document.getElementById('btnAviatorStart').innerText = "BAY"; document.getElementById('btnAviatorStart').disabled = false; 
    if(ctx) ctx.clearRect(0, 0, aviatorWidth, aviatorHeight); 
}
function startAviator() {
    const amount = parseInt(document.getElementById('aviatorBetAmount').value); if(amount > userBalance) return;
    updateBalance(-amount); aviatorBetAmount = amount; isAviatorFlying = true; 
    document.getElementById('btnAviatorStart').disabled = true; document.getElementById('btnAviatorStart').innerText = "ĐANG BAY...";
    crashPoint = (Math.random() < 0.85) ? (1.1 + Math.random() * 0.75) : (2.0 + Math.random() * 3.0); 
    window.aviatorStartTime = Date.now(); drawAviatorFrame();
}
function drawAviatorFrame() {
    if(!isAviatorFlying) return; 
    const elapsed = (Date.now() - window.aviatorStartTime) / 1000; 
    aviatorMultiplier = 1 + 0.1 * elapsed; document.getElementById('aviatorMultiplier').innerText = aviatorMultiplier.toFixed(2) + "x";
    
    if(aviatorMultiplier >= crashPoint) {
        isAviatorFlying = false; document.getElementById('aviatorMultiplier').style.color = "#ff453a"; document.getElementById('boomEffect').style.display = 'block';
        showToast("Nổ! Mất cược.", 'error'); setTimeout(() => { resetAviator(); dailyGames++; updateStatsUI(); saveData(); }, 3000);
    } else if (aviatorMultiplier >= 1.9 && crashPoint >= 1.9) {
        isAviatorFlying = false; document.getElementById('aviatorMultiplier').style.color = "#32d74b"; 
        const w = aviatorBetAmount * 1.9; updateBalance(w); showWinPopup(`THẮNG 1.9x: +${formatMoney(w)}`); 
        setTimeout(() => { resetAviator(); dailyGames++; updateStatsUI(); saveData(); }, 3000);
    } else aviatorInterval = requestAnimationFrame(drawAviatorFrame);
}

// 8.7. VÉ SỐ (JACKPOT)
function adjustTicketQty(delta) { const input = document.getElementById('ticketQty'); let val = parseInt(input.value) || 1; val += delta; if(val < 1) val = 1; input.value = val; }
function buyJackpotTicket() {
    const qty = parseInt(document.getElementById('ticketQty').value) || 1; const cost = qty * 10000; if (userBalance < cost) return;
    updateBalance(-cost); dailyGames++; updateStatsUI(); 
    for (let i = 0; i < qty; i++) myTickets.unshift({ id: Date.now()+i, code: "JP" + Math.floor(100000 + Math.random() * 900000), buyTime: Date.now(), status: 'pending' });
    saveData(); renderTickets(); showWinPopup(`Mua thành công ${qty} Vé!`);
}
function filterTickets(type) { document.getElementById('tab-pending').classList.remove('active'); document.getElementById('tab-history').classList.remove('active'); document.getElementById(`tab-${type}`).classList.add('active'); renderTickets(type); }
function renderTickets(type = 'pending') {
    const container = document.getElementById('ticketList'); if(!container) return; container.innerHTML = "";
    const filtered = myTickets.filter(t => type === 'pending' ? t.status === 'pending' : t.status !== 'pending');
    if (filtered.length === 0) { container.innerHTML = `<div style="text-align:center; color:#666; padding:20px;">Trống</div>`; return; }
    
    filtered.forEach(t => {
        const isReady = Date.now() >= t.buyTime + (24 * 3600000); let stat = "", act = "";
        if (t.status === 'pending') { 
            if (isReady) { stat = `<span class="ticket-status" style="color:#32d74b; background:rgba(50,215,75,0.1)">Đã có kết quả</span>`; act = `<button class="btn-main" onclick="openJackpotResult('${t.id}')" style="padding:5px;">MỞ</button>`; } 
            else stat = `<span class="ticket-status status-wait"><i class="fa-solid fa-clock"></i> Chờ 24h</span>`; 
        } else { stat = `<span class="ticket-status status-lose">Trượt</span>`; }
        const el = document.createElement('div'); el.className = 'ticket-item'; el.innerHTML = `<div><div class="ticket-code">${t.code}</div></div><div style="text-align:right">${stat}<br>${act}</div>`; container.appendChild(el);
    });
}
function openJackpotResult(id) {
    const i = myTickets.findIndex(t => t.id == id); if (i === -1) return; showToast("Đang kết nối...", "warning");
    setTimeout(() => { myTickets[i].status = 'lost'; saveData(); renderTickets('pending'); showWinPopup(`RẤT TIẾC! Vé ${myTickets[i].code} không trúng.`); addExp(10); }, 1500);
}

// 8.8. BẮN CÁ
let fishGameInterval = null; let fishTimeLeft = 60; let currentSessionMoney = 0; let isFishGameActive = false;
function startFishGame() {
    if (userBalance < 100000) return; updateBalance(-100000); currentSessionMoney = 0; fishTimeLeft = 60; isFishGameActive = true;
    document.getElementById('fishSessionMoney').innerText = "0"; document.getElementById('fishTimer').innerText = "60s"; document.getElementById('fishStartOverlay').classList.add('hidden');
    document.querySelectorAll('.fish-item').forEach(e => e.remove());
    fishGameInterval = setInterval(() => {
        fishTimeLeft--; document.getElementById('fishTimer').innerText = fishTimeLeft + "s"; if (fishTimeLeft <= 0) endFishGame();
        if(isFishGameActive && Math.random() > 0.5) {
            const ocean = document.getElementById('oceanContainer'); const el = document.createElement('div'); el.className = `fish-item fish-small`; el.innerText = "🐠"; el.style.top = (Math.random() * 80 + 5) + "%";
            el.style.animation = `${Math.random() > 0.5 ? 'swimLeft' : 'swimRight'} 5s linear forwards`;
            el.onclick = (e) => { e.stopPropagation(); currentSessionMoney += 2000; updateBalance(2000); document.getElementById('fishSessionMoney').innerText = currentSessionMoney; el.remove(); };
            ocean.appendChild(el); setTimeout(() => { if(el && el.parentNode) el.remove(); }, 5000);
        }
    }, 1000);
}
function endFishGame() {
    isFishGameActive = false; clearInterval(fishGameInterval); dailyGames++; updateStatsUI(); saveData();
    const profit = currentSessionMoney - 100000; document.getElementById('fishStartOverlay').classList.remove('hidden');
    if (profit > 0) showWinPopup(`Lãi ${formatMoney(profit)}`); else showWinPopup(`Lỗ! Thu về: ${formatMoney(currentSessionMoney)}`);
}

/* ============================================================
   9. SHOP, INVENTORY, COIN & LEADERBOARD
   ============================================================ */
const shopData = [
    { id: 'course_mmo', name: 'Ebook MMO', category: 'buff', price: 50000, icon: 'fa-solid fa-book-open', color: '#00d2ff', desc: 'Sách.', link: 'https://t.me/MMOaucot' },
    { id: 'group_vip', name: 'Nhóm Code Telegram', category: 'buff', price: 100000, icon: 'fa-brands fa-whatsapp', color: '#32d74b', desc: 'Nhận kèo.', link: 'https://t.me/gogolite' },
    { id: 'tool_auto', name: 'Tool Auto Click', category: 'tech', price: 200000, icon: 'fa-solid fa-robot', color: '#ff3b30', desc: 'Auto nhiệm vụ.', link: 'https://t.me/MMOaucot/25' },
    { id: 'card_100k', name: 'Thẻ Viettel 100K', category: 'buff', price: 55000, icon: 'fa-solid fa-sim-card', color: '#ff9500', desc: 'Mã thẻ qua Link.', link: 'https://www.tiktok.com/@chunhatpham?_r=1&_t=ZS-92sCT5OvwFm' },
    { id: 'voucher_shopee', name: 'Voucher Shopee 100K', category: 'buff', price: 9000, icon: 'fa-solid fa-bag-shopping', color: '#fe623d', desc: 'Giảm 100K.', link: 'https://www.tiktok.com/@chunhatpham01?_r=1&_t=ZS-92sCXMQZ6zX' },
    { id: 'moto_sh', name: 'Honda SH', category: 'vehicle', price: 120000000, icon: 'fa-solid fa-motorcycle', color: '#fff', desc: 'Đẳng cấp.', link: 'https://honda.com.vn' },
    { id: 'car_vinfast', name: 'VinFast VF3', category: 'vehicle', price: 250000000, icon: 'fa-solid fa-car-side', color: '#007aff', desc: 'Xe điện.', link: 'https://vinfastauto.com' },
    { id: 'car_porsche', name: 'Porsche 911 GT3', category: 'vehicle', price: 15000000000, icon: 'fa-solid fa-car-sport', color: '#ffdb05', desc: 'Siêu xe.', link: 'https://porsche.com' },
    { id: 'house_chungcu', name: 'Chung Cư Cao Cấp', category: 'property', price: 3500000000, icon: 'fa-regular fa-building', color: '#4ecca3', desc: 'View sông.', link: 'https://batdongsan.com.vn' },
    { id: 'house_bietthu', name: 'Biệt Thự Vinhomes', category: 'property', price: 25000000000, icon: 'fa-solid fa-house-chimney-window', color: '#af52de', desc: 'Khu biệt lập.', link: 'https://vinhomes.vn' }
];

function renderShop(filter = 'all') {
    const grid = document.getElementById('shopGrid'); if(!grid) return; grid.innerHTML = '';
    const items = filter === 'all' ? shopData : shopData.filter(i => i.category === filter);
    items.forEach(item => {
        const isOwned = (item.category === 'vehicle' || item.category === 'property') && myInventory.filter(x => x.id === item.id).length > 0;
        const card = document.createElement('div'); card.className = 'shop-item'; card.style.setProperty('--item-color', item.color);
        card.innerHTML = `<div class="item-icon-box"><i class="${item.icon}"></i></div><div class="item-name">${item.name}</div><div class="item-desc">${item.desc}</div><div class="item-price">${formatMoney(item.price)}</div><button class="btn-buy-item ${isOwned ? 'owned' : ''}" onclick="buyShopItem('${item.id}')">${isOwned ? 'ĐÃ SỞ HỮU' : 'MUA NGAY'}</button>`;
        grid.appendChild(card);
    });
}
function filterShop(category, btn) { document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); renderShop(category); }

function buyShopItem(itemId) {
    const item = shopData.find(i => i.id === itemId); if (!item) return;
    if ((item.category === 'vehicle' || item.category === 'property') && myInventory.filter(x => x.id === item.id).length > 0) { showToast("Đã sở hữu!", "warning"); return; }
    if (userBalance < item.price) { showToast("Số dư không đủ!", "error"); return; }
    updateBalance(-item.price);
    myInventory.push({ id: item.id, name: item.name, category: item.category, icon: item.icon, color: item.color, link: item.link, buyTime: Date.now() });
    saveData(); showToast("Mua thành công!", "success"); renderShop('all'); 
}

function renderInventory() {
    const grid = document.getElementById('inventoryGrid'); if(!grid) return; grid.innerHTML = ''; 
    if (myInventory.length === 0) { grid.innerHTML = `<div style="text-align:center; padding:20px;">Trống</div>`; return; }
    myInventory.forEach(item => {
        const row = document.createElement('div'); row.className = 'inv-item-row'; row.style.setProperty('--item-color', item.color);
        row.innerHTML = `<div class="inv-icon"><i class="${item.icon}"></i></div><div class="inv-info"><div class="inv-name">${item.name}</div></div><div class="inv-qty">x1</div><a href="${item.link}" target="_blank" class="btn-use-item">Dùng</a>`;
        grid.appendChild(row);
    });
}

let coinInterval = null;
function initCoinMarket() {
    const grid = document.getElementById('coinListContainer'); if(!grid) return; grid.innerHTML = '';
    const coins = [{ id: 'btc', symbol: 'BTC', price: 96000, change: 2.4 }, { id: 'eth', symbol: 'ETH', price: 3400, change: -1.2 }, { id: 'bnb', symbol: 'BNB', price: 590, change: 0.8 }, { id: 'sol', symbol: 'SOL', price: 145, change: 5.4 }, { id: 'doge', symbol: 'DOGE', price: 0.18, change: 8.2 }];
    coins.forEach(c => {
        const div = document.createElement('div'); div.className = 'coin-item';
        div.innerHTML = `<div class="coin-symbol">${c.symbol}</div><div class="coin-price-box"><div class="coin-price" id="price-${c.id}">$${c.price}</div></div><div class="coin-change-btn ${c.change>=0?'bg-green':'bg-red'}">${c.change}%</div>`;
        grid.appendChild(div);
    });
}
function investSimulate(type) {
    if(userBalance < 100000) { showToast("Không đủ 100k!", 'error'); return; }
    updateBalance(-100000); showToast("Đang khớp lệnh...", "warning");
    setTimeout(() => { if(Math.random() > 0.5) showWinPopup("LÃI GIẢ ĐỊNH: +15%"); else showToast("Thị trường đỏ! Tạm lỗ 5%.", 'error'); dailyGames++; updateStatsUI(); saveData(); }, 1500);
}
function openInvestModal(type, name, risk) {
    document.getElementById('investAmountInput').value = ''; document.getElementById('btnConfirmInvest').disabled = true;
    document.getElementById('modalCoinName').innerText = name; document.getElementById('modalUserBalance').innerText = formatMoney(userBalance);
    document.getElementById('investModalOverlay').classList.add('active'); document.getElementById('investModal').classList.add('active');
    window.currentInvestName = name;
}
function closeInvestModal() { document.getElementById('investModalOverlay').classList.remove('active'); document.getElementById('investModal').classList.remove('active'); }
function setInvestPercent(percent) { const amount = Math.floor(userBalance * percent); const input = document.getElementById('investAmountInput'); input.value = amount; checkInputAmount(); }
function checkInputAmount() { const val = parseInt(document.getElementById('investAmountInput').value) || 0; const btn = document.getElementById('btnConfirmInvest'); if (val >= 10000 && val <= userBalance) { btn.disabled = false; btn.style.opacity = "1"; } else { btn.disabled = true; btn.style.opacity = "0.5"; } }
function executeInvest() {
    const amount = parseInt(document.getElementById('investAmountInput').value); if (!amount || amount < 10000 || amount > userBalance) return;
    updateBalance(-amount); myAssets.unshift({ id: Date.now(), name: window.currentInvestName, amount: amount, buyTime: new Date().toLocaleString() });
    closeInvestModal(); showToast("Đầu tư thành công!", "success"); renderMyAssets(); dailyGames++; updateStatsUI(); saveData();
}
function renderMyAssets() {
    const container = document.getElementById('myAssetList'); if (!container) return;
    if (myAssets.length === 0) { container.innerHTML = `<div style="text-align:center; padding:20px;">Trống</div>`; return; }
    container.innerHTML = '';
    myAssets.forEach(asset => {
        const randPercent = (Math.random() * 5) - 2; const profitColor = randPercent >= 0 ? 'var(--ios-green)' : 'var(--ios-red)';
        const div = document.createElement('div'); div.className = 'asset-item';
        div.innerHTML = `<div><div style="font-weight:bold; color:#fff;">${asset.name}</div><div style="font-size:0.7rem; color:#8e8e93;">${asset.buyTime}</div></div><div style="text-align:right;"><div style="font-weight:bold; color:#fff;">${formatMoney(asset.amount)}</div><div style="font-size:0.7rem; color:${profitColor}; font-weight:bold;">${randPercent >= 0 ? '+' : ''}${randPercent.toFixed(2)}%</div></div>`;
        container.appendChild(div);
    });
}

function renderLeaderboard(type) {
    const list = document.getElementById('leaderboardList'); const title = document.getElementById('rankValueTitle'); const myVal = document.getElementById('myRankValue');
    if(!list) return; list.innerHTML = '';
    const fakeNames = ["Hùng", "Dũng", "Tuấn", "Lan", "Hương", "Minh", "Đức", "Thành", "Vinh", "Nam"]; const fakeLastNames = ["Nguyễn", "Trần", "Lê", "Phạm", "Hoàng"];
    const genName = () => `${fakeLastNames[Math.floor(Math.random()*fakeLastNames.length)].substring(0, 3)}*** ${fakeNames[Math.floor(Math.random()*fakeNames.length)]}`;
    
    if (type === 'deposit') { title.innerText = "Tổng Nạp"; myVal.innerText = formatMoney(currentVipLevel * 2500000 + userBalance); } 
    else if (type === 'withdraw') { title.innerText = "Tổng Rút"; myVal.innerText = formatMoney(Math.floor(userBalance * 0.8)); } 
    else if (type === 'vip') { title.innerText = "Cấp VIP"; myVal.innerText = "VIP " + currentVipLevel; }

    for(let i=0; i<10; i++) {
        let rankClass = i === 0 ? 'rank-1' : (i === 1 ? 'rank-2' : (i === 2 ? 'rank-3' : ''));
        let rankIcon = i === 0 ? '<i class="fa-solid fa-crown"></i>' : (i === 1 || i === 2 ? '<i class="fa-solid fa-medal"></i>' : i + 1);
        let valStr = type === 'vip' ? `VIP ${9-Math.floor(i/3)}` : formatMoney(500000000 - Math.floor(Math.random() * 30000000 * i));
        const row = document.createElement('div'); row.className = 'rank-item';
        row.innerHTML = `<div class="rank-num ${rankClass}">${rankIcon}</div><div class="rank-avatar ${i === 0 ? 'top-1' : ''}">${genName().split(' ').pop().substring(0,1)}</div><div class="rank-info"><div class="rank-name">${genName()}</div><div class="rank-sub">VIP ${9-Math.floor(i/3)} • <span style="color:#8e8e93">Vừa xong</span></div></div><div class="rank-value">${valStr}</div>`;
        list.appendChild(row);
    }
}
function filterRank(type, btn) { document.querySelectorAll('.rank-filter-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); renderLeaderboard(type); }

/* ============================================================
   10. KHỞI CHẠY HỆ THỐNG
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Tải toàn bộ dữ liệu trước
    loadData();
    // 2. Chạy Market ảo
    initCoinMarket();
    // 3. Chạy loop các game Time-based (Cốt lõi)
    startParityGameLoop();
    startTaiXiuLoop();   
    startXocDiaLoop();   
    
    // 4. Hiển thị Popup nhắc nhở
    setTimeout(() => { 
        const p = document.getElementById('introPopup'); 
        if(p) p.classList.add('show'); 
    }, 500);
});
