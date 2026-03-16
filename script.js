// ================= KHO DỮ LIỆU PHIM (HOT & SERIES) =================
const hotMovies = [
    { img: "https://i.postimg.cc/W3GF2m7J/IMG_0531.jpg", title: "Yếu Lòng Với Em Yêu" },
    { img: "https://i.postimg.cc/T2VzMtZH/IMG-0532.jpg", title: "Rời Xa Gia Đình Tệ Bạc" },
    { img: "https://i.postimg.cc/jqHp0MGg/IMG-0533.jpg", title: "Ở Cùng Chị Gái Xinh" },
    { img: "https://i.postimg.cc/RC7k5gjP/IMG-0534.jpg", title: "Làm Hỏng Đồ Của Hôn Thê" },
    { img: "https://i.postimg.cc/HWwqD6fR/IMG-0535.jpg", title: "Phá Sản Nên Phải Yêu" },
    { img: "https://i.postimg.cc/sfYkdTtk/IMG-0536.jpg", title: "Quay Lại Thừa Kế Tài Sản" },
    { img: "https://i.postimg.cc/xjvwD6wV/IMG-0537.jpg", title: "Bố Bỉm Sữa Siêu Cấp" },
    { img: "https://i.postimg.cc/CLwWFjgP/IMG-0538.jpg", title: "Vợ Đã Thật Sự Yêu Tôi" },
    { img: "https://i.postimg.cc/029L8pst/IMG-0539.jpg", title: "Thần Y Thiếu Gia Thật" },
    { img: "https://i.postimg.cc/3J3PKgTV/IMG-0540.jpg", title: "Tôi Quyết Định Nghỉ Việc" },
    { img: "https://i.postimg.cc/jdRGszbB/IMG-0541.jpg", title: "Em Đã Hối Hận Rồi" },
    { img: "https://i.postimg.cc/VLz3Yj83/IMG-0542.jpg", title: "Mẹ Vợ Quá Đáng Sợ" },
    { img: "https://i.postimg.cc/KvmdZn26/IMG-0543.jpg", title: "Mẹ Bắt Cưới Tiểu Thư" },
    { img: "https://i.postimg.cc/RVvjMcmz/IMG-0544.jpg", title: "Hoa Khôi Chỉ Thích Tôi" },
    { img: "https://i.postimg.cc/X7nTVwW4/IMG-0545.jpg", title: "Chặn Đầu Đại Sự Họ" },
    { img: "https://i.postimg.cc/jdRGszTS/IMG-0546.jpg", title: "Cố Gắng Kiếm Vợ Đẹp" },
    { img: "https://i.postimg.cc/YqtJp17t/IMG-0547.jpg", title: "Vừa Giàu Lại Còn Đẹp Trai" },
    { img: "https://i.postimg.cc/PrdBtmHx/IMG-0548.jpg", title: "Đã Là Của Nhau Từ Bé" },
    { img: "https://i.postimg.cc/jdRGszT2/IMG-0549.jpg", title: "Chốt Hôn Em Từ Nhỏ" },
    { img: "https://i.postimg.cc/029L8pvr/IMG-0550.jpg", title: "Bị Vợ Giám Đốc Xem Thường" },
    { img: "https://i.postimg.cc/jdRGszTW/IMG-0551.jpg", title: "Thân Phận Này Quá Chán" },
    { img: "https://i.postimg.cc/ncTNMCVV/IMG-0552.jpg", title: "Muốn Lấy Em Gái Làm Vợ" },
    { img: "https://i.postimg.cc/VL425dsY/IMG-0553.jpg", title: "Lời Nói Đầy Tổn Thương" },
    { img: "https://i.postimg.cc/hPMNhf4G/IMG-0554.jpg", title: "Điên Cuồng Bám Lấy Tôi" },
    { img: "https://i.postimg.cc/ZKjX0CYW/IMG-0555.jpg", title: "Được Tiểu Thư Yêu Thầm" },
    { img: "https://i.postimg.cc/Dy5Rm8f8/IMG-0556.jpg", title: "Bạn Thân Của Mẹ Tôi" },
    { img: "https://i.postimg.cc/J4KStG7y/IMG-0557.jpg", title: "Cố Gắng Chinh Phục Em" },
    { img: "https://i.postimg.cc/wTFn37xR/IMG-0558.jpg", title: "Học Cùng Thiếu Gia Thật" },
    { img: "https://i.postimg.cc/hPMNhf4d/IMG-0559.jpg", title: "Kẻ Xuyên Không Giàu Có" },
    { img: "https://i.postimg.cc/KvQC4RcT/IMG-0560.jpg", title: "Giả Nghèo Để Yêu Em" },
    { img: "https://i.postimg.cc/65zFTy6R/IMG-0561.jpg", title: "Tự Dưng Tôi Có Hệ Thống" },
    { img: "https://i.postimg.cc/BQNRtXZH/IMG-0562.jpg", title: "Tận Hưởng Quá Trình Theo Đuổi" },
    { img: "https://i.postimg.cc/8Pwxsjkd/IMG-0563.jpg", title: "Chèo Chống Gia Đình Mình" },
    { img: "https://i.postimg.cc/Hs3FjVW4/IMG-0564.jpg", title: "Đã Giàu Lại Xuyên Không" },
    { img: "https://i.postimg.cc/TYQBhp2c/IMG-0565.jpg", title: "Mở Đầu Đã Kết Thúc" },
    { img: "https://i.postimg.cc/65zFTy60/IMG-0566.jpg", title: "Vị Hôn Thê Thử Thách Tôi" },
    { img: "https://i.postimg.cc/bNL4dsY6/IMG-0567.jpg", title: "Dứt Khoát Với Chị Gái" },
    { img: "https://i.postimg.cc/sgXqWs17/IMG-0568.jpg", title: "Là Con Trai Duy Nhất Trong Nhà" },
    { img: "https://i.postimg.cc/P5x9DTNW/IMG-0569.jpg", title: "Ma Nữ Thanh Mai Trúc Mã" },
    { img: "https://i.postimg.cc/520Tzbj5/IMG-0570.jpg", title: "Tôi Âm Thầm Rời Đi" },
    { img: "https://i.postimg.cc/520Tzbj3/IMG-0571.jpg", title: "Nam Thần Là Anh Trai" },
    { img: "https://i.postimg.cc/7Z6dzwbX/IMG-0572.jpg", title: "Cùng Tôi Đổi Cha Mẹ" },
    { img: "https://i.postimg.cc/9QMK9CzJ/IMG-0573.jpg", title: "Tôi Nghèo Bị Gán Đi" },
    { img: "https://i.postimg.cc/9QMK9CzL/IMG-0574.jpg", title: "Mẹ Tôi Là Tỷ Phú" },
    { img: "https://i.postimg.cc/pLT4jRyc/IMG-0575.jpg", title: "15 Năm Chờ Đợi Cô Ấy" },
    { img: "https://i.postimg.cc/13t2Fs4Y/IMG-0576.jpg", title: "Bị Cắm Sừng Mà Không Biết" },
    { img: "https://i.postimg.cc/mgDJ9Bhn/IMG-0577.jpg", title: "Giáo Viên Chủ Nhiệm Của Em" },
    { img: "https://i.postimg.cc/x1Chmnq7/IMG-0578.jpg", title: "Vợ Tưởng Tôi Như Trước" },
    { img: "https://i.postimg.cc/Gm2VDd9V/IMG-0579.jpg", title: "Quay Về Để Thừa Kế" },
    { img: "https://i.postimg.cc/Bn6kF4tR/IMG-0580.jpg", title: "Giả Vờ Để Yêu Em" }
];

const hotGrid = document.getElementById('hot-movie-grid');
let hotHTML = '';
for(let i = 0; i < hotMovies.length; i++) {
    hotHTML += `
    <div class="movie-card" onclick="openPlayer('${hotMovies[i].title}')">
        <img src="${hotMovies[i].img}" alt="${hotMovies[i].title}">
        <div class="hot-fire-badge"><i class="fas fa-fire"></i> HOT</div>
        <div class="card-overlay">
            <h3>${hotMovies[i].title}</h3>
            <span><i class="fas fa-play-circle"></i> Xem Ngay</span>
        </div>
    </div>`;
}
if(hotGrid) hotGrid.innerHTML = hotHTML;

const seriesData = [
    { title: "Lời Nói Đầy Tổn Thương", img: "https://i.postimg.cc/VL425dsY/IMG-0553.jpg" },
    { title: "Bé Mèo Nữ Tổng Tài", img: "https://i.postimg.cc/wTD1DYyn/IMG-0583.jpg" },
    { title: "Tiếp Cận Lấy Vợ Tôi", img: "https://i.postimg.cc/65C8Cx2D/IMG-0584.jpg" },
    { title: "Hi Sinh Để Cứu Em", img: "https://i.postimg.cc/YqQvQBG5/IMG-0585.jpg" }
];

const seriesWrapper = document.getElementById('series-container-wrapper');
let seriesHTML = '';
seriesData.forEach((series, index) => {
    let partsHTML = '';
    for(let part = 1; part <= 3; part++) {
        partsHTML += `
        <div class="movie-card" onclick="openPlayer('${series.title} - Phần ${part}')">
            <img src="${series.img}" alt="${series.title} P${part}">
            <div class="part-badge-vip">P${part}</div>
            <div class="card-overlay">
                <h3>${series.title}</h3>
                <span><i class="fas fa-play"></i> Tập mới nhất</span>
            </div>
        </div>`;
    }
    seriesHTML += `
    <div class="series-box">
        <div class="series-header">
            <h3><i class="fas fa-ticket-alt"></i> Bộ ${index + 1}: ${series.title}</h3>
            <span class="series-status">Trọn bộ 3/3 Phần</span>
        </div>
        <div class="series-grid">${partsHTML}</div>
    </div>`;
});
if(seriesWrapper) seriesWrapper.innerHTML = seriesHTML;

// ================= GIAO DIỆN & TIỆN ÍCH CHUNG =================
function showNotification(type, title, msg, btnText) {
    const overlay = document.getElementById('global-modal-overlay'), box = document.getElementById('global-modal-box'), icon = document.getElementById('modal-icon'), btn = document.getElementById('modal-action-btn');
    document.getElementById('modal-title').innerText = title; document.getElementById('modal-message').innerText = msg; btn.innerText = btnText;
    icon.style.animation = 'none'; icon.offsetHeight; 
    if(type === 'warning') { icon.className = 'fas fa-exclamation-triangle'; icon.style.color = '#ff4e00'; box.style.borderColor = '#ff4e00'; box.style.boxShadow = '0 10px 40px rgba(255, 78, 0, 0.3)'; btn.style.background = 'linear-gradient(45deg, #ff4e00, #ec9f05)'; icon.style.animation = 'shake 0.5s'; } 
    else if(type === 'error') { icon.className = 'fas fa-times-circle'; icon.style.color = '#e94560'; box.style.borderColor = '#e94560'; box.style.boxShadow = '0 10px 40px rgba(233, 69, 96, 0.3)'; btn.style.background = '#e94560'; icon.style.animation = 'shake 0.5s'; }
    else if(type === 'success') { icon.className = 'fas fa-check-circle'; icon.style.color = '#00c6ff'; box.style.borderColor = '#00c6ff'; box.style.boxShadow = '0 10px 40px rgba(0, 198, 255, 0.3)'; btn.style.background = 'linear-gradient(45deg, #00c6ff, #0072ff)'; icon.style.animation = 'pulseGlow 1s infinite alternate'; } 
    else if(type === 'info') { icon.className = 'fas fa-info-circle'; icon.style.color = '#8e2de2'; box.style.borderColor = '#8e2de2'; box.style.boxShadow = '0 10px 40px rgba(142, 45, 226, 0.3)'; btn.style.background = 'linear-gradient(45deg, #8e2de2, #4a00e0)'; icon.style.animation = 'floatIcon 2s ease-in-out infinite'; }
    overlay.classList.add('show');
}
function closeNotification() { document.getElementById('global-modal-overlay').classList.remove('show'); }
document.getElementById('global-modal-overlay').addEventListener('click', function(e) { if(e.target === this) closeNotification(); });

const sidebar = document.getElementById('sidebar');
const menuLinks = document.querySelectorAll('.menu-link');
const tabContents = document.querySelectorAll('.tab-content');
document.getElementById('menu-btn').addEventListener('click', () => sidebar.classList.add('active'));
document.getElementById('close-btn').addEventListener('click', () => sidebar.classList.remove('active'));

window.openTab = function(targetId) {
    tabContents.forEach(tab => tab.classList.remove('active'));
    menuLinks.forEach(link => link.classList.remove('active-link'));
    document.getElementById(targetId).classList.add('active');
    menuLinks.forEach(link => { if(link.getAttribute('data-target') === targetId) link.classList.add('active-link'); });
    sidebar.classList.remove('active'); window.scrollTo({ top: 0, behavior: 'smooth' });
    if(typeof triggerFloatingAds === 'function') triggerFloatingAds();
};
menuLinks.forEach(link => { link.addEventListener('click', function(e) { e.preventDefault(); openTab(this.getAttribute('data-target')); }); });

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) header.style.background = 'rgba(11, 11, 12, 0.95)'; else header.style.background = 'rgba(11, 11, 12, 0.8)';
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('is-scrolling-in'); } 
            else { entry.target.classList.remove('is-scrolling-in'); }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.6 });

    document.querySelectorAll('.movie-card').forEach(card => { scrollObserver.observe(card); });
});

// ================= HỆ THỐNG ĐÁNH GIÁ (REVIEWS) =================
const fakeFirstNames = ["Hoàng", "Minh", "Hải", "Tuấn", "Thanh", "Nhật", "Hương", "Linh", "Quang", "Trí"];
const fakeLastNames = ["Khang", "Tú", "Yến", "Anh", "Đạt", "Long", "Trang", "Nhi", "Bảo", "Nam"];
const posComments = ["Phim siêu cuốn, xem một mạch hết luôn.", "Kịch bản xuất sắc, diễn viên đóng quá đạt.", "Cảnh quay hoành tráng thực sự.", "Web load phim mượt quá!"];
const midComments = ["Phim đoạn giữa hơi lê thê nhưng kết ổn.", "Tạm được, kỹ xảo hơi giả.", "Xem giết thời gian cũng được."];
const negComments = ["Phim dở quá, tốn thời gian.", "Diễn viên đơ thật sự.", "Kết nhảm nhí."];
const avatarColors = ["#e50914", "#00c6ff", "#f5c518", "#8e2de2", "#ff0844", "#00e676"];

function generateReviews(averageScore) {
    const list = document.getElementById('dynamic-reviews-list');
    if(!list) return;
    document.getElementById('review-overall-score').innerText = averageScore;
    list.innerHTML = '';
    let numReviews = Math.floor(Math.random() * 3) + 4; 
    for(let i=0; i<numReviews; i++) {
        let name = fakeFirstNames[Math.floor(Math.random()*fakeFirstNames.length)] + " " + fakeLastNames[Math.floor(Math.random()*fakeLastNames.length)];
        let color = avatarColors[Math.floor(Math.random()*avatarColors.length)];
        let starCount = 5; let text = ""; let rand = Math.random();
        if(averageScore > 4.0) { starCount = rand > 0.2 ? (Math.random() > 0.5 ? 5 : 4) : (Math.random() > 0.5 ? 3 : 1); } 
        else { starCount = rand > 0.4 ? (Math.random() > 0.5 ? 3 : 2) : (Math.random() > 0.5 ? 4 : 1); }
        if(starCount >= 4) text = posComments[Math.floor(Math.random()*posComments.length)];
        else if(starCount === 3) text = midComments[Math.floor(Math.random()*midComments.length)];
        else text = negComments[Math.floor(Math.random()*negComments.length)];
        let starsHTML = '';
        for(let s=1; s<=5; s++) starsHTML += (s <= starCount) ? '<i class="fas fa-star"></i> ' : '<i class="far fa-star"></i> ';
        list.innerHTML += `<div class="review-card"><div class="reviewer-avatar" style="background: ${color}">${name.charAt(0)}</div><div class="review-content"><div class="reviewer-info"><span class="reviewer-name">${name}</span><span class="review-date">Vài phút trước</span></div><div class="review-stars">${starsHTML}</div><p class="review-text">${text}</p><div class="review-interactions"><span><i class="far fa-thumbs-up"></i> Hữu ích</span><span><i class="far fa-comment"></i> Phản hồi</span></div></div></div>`;
    }
}

let userSelectedStars = 0;
document.querySelectorAll('#star-rating-system i').forEach(star => {
    star.addEventListener('click', function() {
        userSelectedStars = parseInt(this.getAttribute('data-val'));
        document.querySelectorAll('#star-rating-system i').forEach(s => {
            if(parseInt(s.getAttribute('data-val')) <= userSelectedStars) { s.classList.remove('far'); s.classList.add('fas'); } 
            else { s.classList.remove('fas'); s.classList.add('far'); }
        });
    });
});

window.submitReview = function() {
    if (!localStorage.getItem('cnp_current_user')) {
        showNotification('warning', 'Yêu Cầu Đăng Nhập', 'Bạn cần có tài khoản để tham gia bình luận và đánh giá phim.', 'Đăng Nhập Ngay');
        openTab('tab-account');
        document.getElementById('player-overlay').classList.remove('show');
        document.body.style.overflow = 'auto';
        return;
    }
    
    let name = document.getElementById('rev-name').value.trim();
    let contact = document.getElementById('rev-contact').value.trim();
    let content = document.getElementById('rev-content').value.trim();
    if(!name || !contact || !content || userSelectedStars === 0) { 
        showNotification('warning', 'Thiếu Thông Tin', 'Vui lòng điền đầy đủ thông tin và số sao!', 'Đã hiểu'); return; 
    }
    showNotification('success', 'Gửi Đánh Giá Thành Công', 'Cảm ơn bạn đã góp ý về bộ phim!', 'Tuyệt vời');
    document.getElementById('rev-name').value = ''; document.getElementById('rev-contact').value = ''; document.getElementById('rev-content').value = ''; userSelectedStars = 0;
    document.querySelectorAll('#star-rating-system i').forEach(s => { s.classList.remove('fas'); s.classList.add('far'); });
};

// ================= AUDIO PLAYER & PHIM CỐT LÕI =================
const randomRedirectLinks = [
    "https://vt.tiktok.com/ZS9eQnVNkWqrH-NDwQg/",
    "https://vt.tiktok.com/ZS9eQnpk1jcTU-0sAGn/",
    "https://vt.tiktok.com/ZS9eQntSfgCqA-VUA7g/",
    "https://vt.tiktok.com/ZS9RdMkvcsYJR-5XXqs/",
    "https://vt.tiktok.com/ZS9RdMDFCcqDr-Wkvnr/",
    "https://vt.tiktok.com/ZS9RdM5HDghE3-elmmE/",
    "https://vt.tiktok.com/ZS9RdMaACXLWq-W52rL/",
    "https://vt.tiktok.com/ZS9RdMQDJELpG-ro8Sc/",
    "https://vt.tiktok.com/ZS9RdMqtxbCqJ-sPyPM/",
    "https://vt.tiktok.com/ZS9RdMnUbwUyf-ajbD7/",
    "https://vt.tiktok.com/ZS9RdMWyakByQ-0Uozs/",
    "https://vt.tiktok.com/ZS9RdMTBSXFH1-4eGKd/"
];

window.realMoviesDatabase = [
    { title: "Nữ Thần Liễu Như Yên", img: "https://i.postimg.cc/y8nPZmYS/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Tôi Nằm Trên Ván Cược", img: "https://i.postimg.cc/D0shyZ6b/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Tái Sinh Cùng Vợ Mình", img: "https://i.postimg.cc/y6nhBL9c/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Không Cùng Thế Giới Mà", img: "https://i.postimg.cc/3wJfK4Ns/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Hoàn Hảo Với Em Gái", img: "https://i.postimg.cc/PJs2GjKT/IMG-1498.jpg", tag: "NEW", desc: "Vừa ra mắt" }
];

window.renderLatestMovies = function() {
    const latestGrid = document.getElementById('latest-movie-grid');
    if (!latestGrid) return;
    let html = '';
    window.realMoviesDatabase.forEach(movie => {
        html += `<div class="movie-card" onclick="openPlayer('${movie.title}')">
            <img src="${movie.img}" alt="${movie.title}">
            <div class="new-badge-tag">${movie.tag}</div>
            <div class="card-overlay"><h3>${movie.title}</h3><span style="color: #38ef7d;"><i class="fas fa-play-circle"></i> ${movie.desc}</span></div>
        </div>`;
    });
    for(let i = 0; i < Math.max(10 - window.realMoviesDatabase.length, 5); i++) {
        html += `<div class="movie-card card-updating" onclick="showNotification('info', 'Đang Chuẩn Bị', 'Đang cập nhật', 'Đã hiểu')">
            <img src="https://i.postimg.cc/2S1MZ1vZ/E18A0AE5-6F3B-4815-8759-7ED0A77B8DBB.png">
            <div class="locked-icon-overlay" style="color: rgba(255,255,255,0.2);"><i class="fas fa-tools"></i></div>
            <div class="card-overlay"><h3 style="color:#888;">Khung Trống</h3><span style="color:#555;">Đang tải...</span></div>
        </div>`;
    }
    latestGrid.innerHTML = html;
};

window.renderMoviesByPage = function(page) {
    const pagedGrid = document.getElementById('paged-movie-grid');
    if (!pagedGrid) return;
    const startIndex = (page - 1) * 10; 
    const endIndex = Math.min(page * 10, 1000) - 1;
    let html = '';
    for (let i = startIndex; i <= endIndex; i++) {
        if (i < window.realMoviesDatabase.length) {
            let movie = window.realMoviesDatabase[i];
            html += `<div class="movie-card dynamic-page-card" onclick="openPlayer('${movie.title}')">
                <img src="${movie.img}"><div class="movie-index-badge" style="background: var(--primary-color);">#${i + 1}</div>
                <div class="card-overlay"><h3>${movie.title}</h3><span style="color: #38ef7d;"><i class="fas fa-play"></i> Nghe Tác Phẩm Này</span></div>
            </div>`;
        } else {
            html += `<div class="movie-card dynamic-page-card card-updating" onclick="showNotification('info', 'Thông Báo', 'Phim Số ${i + 1} đang chuẩn bị.', 'Đã hiểu')">
                <img src="https://i.postimg.cc/2S1MZ1vZ/E18A0AE5-6F3B-4815-8759-7ED0A77B8DBB.png">
                <div class="movie-index-badge" style="background: rgba(11,11,12,0.8); color: #888;">#${i + 1}</div>
                <div class="locked-icon-overlay" style="color: rgba(255,255,255,0.2);"><i class="fas fa-tools"></i></div>
                <div class="card-overlay"><h3 style="color: #888;">Tác Phẩm Số ${i + 1}</h3><span style="color: #555;">Đang Cập Nhật...</span></div>
            </div>`;
        }
    }
    pagedGrid.innerHTML = html;
};

function renderPagination(page) {
    const TOTAL_PAGES = 100; // 1000 movies / 10 per page
    const paginationWrapper = document.getElementById('pagination-wrapper');
    if(!paginationWrapper) return;
    let html = '';
    const prevDisabled = page === 1 ? 'disabled' : '';
    html += `<div class="page-btn ${prevDisabled}" onclick="goToPage(${page - 1})"><i class="fas fa-chevron-left"></i></div>`;

    let pages = [];
    if (page <= 3) { pages = [1, 2, 3, 4, '...', TOTAL_PAGES]; } 
    else if (page >= TOTAL_PAGES - 2) { pages = [1, '...', TOTAL_PAGES - 3, TOTAL_PAGES - 2, TOTAL_PAGES - 1, TOTAL_PAGES]; } 
    else { pages = [1, '...', page - 1, page, page + 1, '...', TOTAL_PAGES]; }

    pages.forEach(p => {
        if (p === '...') { html += `<div class="page-dots">...</div>`; } 
        else {
            const activeClass = p === page ? 'active' : '';
            html += `<div class="page-btn ${activeClass}" onclick="goToPage(${p})">${p}</div>`;
        }
    });

    const nextDisabled = page === TOTAL_PAGES ? 'disabled' : '';
    html += `<div class="page-btn ${nextDisabled}" onclick="goToPage(${page + 1})"><i class="fas fa-chevron-right"></i></div>`;

    paginationWrapper.innerHTML = html;
}

window.goToPage = function(page) {
    if (page < 1 || page > 100) return;
    window.renderMoviesByPage(page);
    renderPagination(page);
    const gridTop = document.getElementById('paged-movie-grid').offsetTop - 100;
    window.scrollTo({ top: gridTop, behavior: 'smooth' });
};

window.switchAudioTab = function(tabId) {
    document.querySelectorAll('.audio-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.audio-tab-content').forEach(c => c.classList.remove('active'));
    
    if (tabId === 'episodes') {
        document.getElementById('tab-btn-episodes').classList.add('active');
        document.getElementById('audio-tab-episodes').classList.add('active');
    } else {
        document.getElementById('tab-btn-comments').classList.add('active');
        document.getElementById('audio-tab-comments').classList.add('active');
    }
};

window.generateFixedEpisodes = function(movieName, imgSrc) {
    const epListContainer = document.getElementById('audio-ep-list');
    let currentUser = JSON.parse(localStorage.getItem('cnp_current_user'));
    let isVip = currentUser && currentUser.isPremium;

    let epHTML = `
        <div class="ep-item-card" onclick="playEpisode('SS1', '${movieName}')">
            <div class="ep-img-box"><span class="ep-badge-ss1">SS1</span><img src="${imgSrc}" alt="SS1"></div>
            <div class="ep-info-box"><div class="ep-title">SS1: ${movieName}</div>
            <div class="ep-meta"><span><i class="far fa-clock"></i> 0 Phút</span><span><i class="fas fa-headphones"></i> 0</span></div></div>
        </div>`;

    if (isVip) {
        epHTML += `
        <div class="ep-item-card" onclick="playEpisode('FULL', '${movieName}')">
            <div class="ep-img-box"><span class="ep-badge-premium"><i class="fas fa-crown"></i> FULL</span><img src="${imgSrc}" alt="FULL"></div>
            <div class="ep-info-box"><div class="ep-title">FULL: ${movieName} (Đã mở khóa)</div>
            <div class="ep-meta"><span><i class="far fa-clock"></i> 0 Phút</span><span><i class="fas fa-headphones"></i> 0</span><span class="premium-req" style="background: rgba(0, 230, 118, 0.1); color: #00e676;"><i class="fas fa-unlock"></i> Đã mở</span></div></div>
        </div>`;
    } else {
        epHTML += `
        <div class="ep-item-card locked" onclick="requirePremiumUnlock()">
            <div class="ep-img-box"><span class="ep-badge-premium"><i class="fas fa-crown"></i> FULL</span><i class="fas fa-lock locked-icon-overlay"></i><img src="${imgSrc}" alt="FULL"></div>
            <div class="ep-info-box"><div class="ep-title">FULL: ${movieName}</div>
            <div class="ep-meta"><span><i class="far fa-clock"></i> 0 Phút</span><span><i class="fas fa-headphones"></i> 0</span><span class="premium-req"><i class="fas fa-gem"></i> Premium</span></div></div>
        </div>`;
    }
    if(epListContainer) epListContainer.innerHTML = epHTML;
};

window.generateCustomEpisodes = function(movieName, imgSrc, timeSS1, timeFull, viewsCount) {
    const epList = document.getElementById('audio-ep-list');
    let currentUser = JSON.parse(localStorage.getItem('cnp_current_user'));
    let isVip = currentUser && currentUser.isPremium;

    let html = `
        <div class="ep-item-card" onclick="playEpisode('SS1', '${movieName}')">
            <div class="ep-img-box"><span class="ep-badge-ss1">SS1</span><img src="${imgSrc}"></div>
            <div class="ep-info-box"><div class="ep-title">SS1: ${movieName}</div>
            <div class="ep-meta"><span><i class="far fa-clock"></i> ${timeSS1}</span><span><i class="fas fa-headphones"></i> ${viewsCount}</span></div></div>
        </div>`;

    if (isVip) {
        html += `<div class="ep-item-card" onclick="playEpisode('FULL', '${movieName}')">
            <div class="ep-img-box"><span class="ep-badge-premium"><i class="fas fa-crown"></i> FULL</span><img src="${imgSrc}"></div>
            <div class="ep-info-box"><div class="ep-title">FULL: ${movieName}</div>
            <div class="ep-meta"><span><i class="far fa-clock"></i> ${timeFull}</span><span><i class="fas fa-headphones"></i> ${viewsCount}</span><span class="premium-req" style="background: rgba(0,230,118,0.1); color:#00e676;">Đã mở</span></div></div>
        </div>`;
    } else {
        html += `<div class="ep-item-card locked" onclick="requirePremiumUnlock()">
            <div class="ep-img-box"><span class="ep-badge-premium"><i class="fas fa-crown"></i> FULL</span><i class="fas fa-lock locked-icon-overlay"></i><img src="${imgSrc}"></div>
            <div class="ep-info-box"><div class="ep-title">FULL: ${movieName}</div>
            <div class="ep-meta"><span><i class="far fa-clock"></i> ${timeFull}</span><span><i class="fas fa-headphones"></i> ${viewsCount}</span><span class="premium-req">Premium</span></div></div>
        </div>`;
    }
    if(epList) epList.innerHTML = html;
};

window.closePlayer = function() { document.getElementById('player-overlay').classList.remove('show'); document.body.style.overflow = 'auto'; };
document.getElementById('player-overlay').addEventListener('click', function(e) { if(e.target === this) closePlayer(); });

window.requirePremiumUnlock = function() {
    showNotification('warning', 'Nội Dung Đặc Quyền', 'Tập FULL hiện đang bị khóa! Bạn cần nâng cấp tài khoản lên gói Premium để mở khóa toàn bộ tác phẩm này.', 'Nâng Cấp Ngay');
};

window.openPlayer = function(movieName) {
    if(typeof randomRedirectLinks !== 'undefined') {
        window.open(randomRedirectLinks[Math.floor(Math.random() * randomRedirectLinks.length)], '_blank');
    }
    if(typeof triggerFloatingAds === 'function') triggerFloatingAds();

    let imgSrc = 'https://i.postimg.cc/2S1MZ1vZ/E18A0AE5-6F3B-4815-8759-7ED0A77B8DBB.png';
    try { if (window.event && window.event.currentTarget) { let imgEl = window.event.currentTarget.querySelector('img'); if (imgEl) imgSrc = imgEl.src; } } catch(e) {}

    document.getElementById('player-title').innerHTML = `<i class="fas fa-headphones-alt"></i> ${movieName}`;
    document.getElementById('audio-cover-img').src = imgSrc;
    document.getElementById('audio-title').innerText = movieName;
    document.getElementById('dynamic-reviews-list').innerHTML = `<div style="text-align:center; padding:40px; color:#666;"><p>Chưa có lượt đánh giá nào.</p></div>`;

    if (movieName === 'Nữ Thần Liễu Như Yên') {
        imgSrc = 'https://i.postimg.cc/y8nPZmYS/gen.jpg';
        document.getElementById('audio-cover-img').src = imgSrc;
        document.getElementById('audio-listens-count').innerText = "30.7k";
        document.getElementById('audio-rating-score').innerText = "5.0";
        document.getElementById('review-overall-score').innerText = "5.0";
        window.generateCustomEpisodes(movieName, imgSrc, "1 tiếng 20 phút", "3 tiếng 28 phút", "30.7k");
    } 
    else if (movieName === 'Tôi Nằm Trên Ván Cược') {
        imgSrc = 'https://i.postimg.cc/D0shyZ6b/gen.jpg';
        document.getElementById('audio-cover-img').src = imgSrc;
        document.getElementById('audio-listens-count').innerText = "12.4k";
        document.getElementById('audio-rating-score').innerText = "5.0";
        document.getElementById('review-overall-score').innerText = "5.0";
        window.generateCustomEpisodes(movieName, imgSrc, "1 tiếng 19 phút", "3 tiếng 14 phút", "12.4k");
    } 
    else if (movieName === 'Tái Sinh Cùng Vợ Mình') {
        imgSrc = 'https://i.postimg.cc/y6nhBL9c/gen.jpg';
        document.getElementById('audio-cover-img').src = imgSrc;
        document.getElementById('audio-listens-count').innerText = "53.2k";
        document.getElementById('audio-rating-score').innerText = "5.0";
        document.getElementById('review-overall-score').innerText = "5.0";
        window.generateCustomEpisodes(movieName, imgSrc, "1 tiếng 23 phút", "4 tiếng 36 phút", "53.2k");
    } 
    else if (movieName === 'Không Cùng Thế Giới Mà') {
        imgSrc = 'https://i.postimg.cc/3wJfK4Ns/gen.jpg';
        document.getElementById('audio-cover-img').src = imgSrc;
        document.getElementById('audio-listens-count').innerText = "98.5k";
        document.getElementById('audio-rating-score').innerText = "5.0";
        document.getElementById('review-overall-score').innerText = "5.0";
        window.generateCustomEpisodes(movieName, imgSrc, "1 tiếng 19 phút", "4 tiếng 7 phút", "98.5k");
    } 
    else if (movieName === 'Hoàn Hảo Với Em Gái') {
        imgSrc = 'https://i.postimg.cc/PJs2GjKT/IMG-1498.jpg';
        document.getElementById('audio-cover-img').src = imgSrc;
        document.getElementById('audio-listens-count').innerText = "22.6k";
        document.getElementById('audio-rating-score').innerText = "5.0";
        document.getElementById('review-overall-score').innerText = "5.0";
        window.generateCustomEpisodes(movieName, imgSrc, "1 giờ 4 phút", "6 tiếng 55 phút", "22.6k");
    } 
    else if (movieName === 'Hẹn Hò Với Nữ Minh Tinh') {
        imgSrc = 'https://i.postimg.cc/sg18FMgZ/IMG-0514.jpg'; 
        document.getElementById('audio-cover-img').src = imgSrc;
        document.getElementById('audio-listens-count').innerText = "79.4k";
        document.getElementById('audio-rating-score').innerText = "5.0";
        document.getElementById('review-overall-score').innerText = "5.0";
        window.generateCustomEpisodes(movieName, imgSrc, "1 tiếng 14 phút", "5 tiếng 40 phút", "79.4k");
    }
    else if (movieName === 'Nấu Ăn Để Câu Cá') {
        imgSrc = 'https://i.postimg.cc/gk4Fb9yN/IMG_0513.jpg'; 
        document.getElementById('audio-cover-img').src = imgSrc;
        document.getElementById('audio-listens-count').innerText = "43.9k";
        document.getElementById('audio-rating-score').innerText = "5.0";
        document.getElementById('review-overall-score').innerText = "5.0";
        window.generateCustomEpisodes(movieName, imgSrc, "2 tiếng 31 phút", "7 tiếng 13 phút", "43.9k");
    }
    else if (movieName === 'Bảo Vệ Mẹ Mình Khỏi') {
        imgSrc = 'https://i.postimg.cc/P53jYGPN/IMG_0512.jpg'; 
        document.getElementById('audio-cover-img').src = imgSrc;
        document.getElementById('audio-listens-count').innerText = "81.3k";
        document.getElementById('audio-rating-score').innerText = "5.0";
        document.getElementById('review-overall-score').innerText = "5.0";
        window.generateCustomEpisodes(movieName, imgSrc, "1 tiếng 2 phút", "3 tiếng 43 phút", "81.3k");
    }
    else if (movieName === 'Hôn Em Một Cái Thôi Mà') {
        imgSrc = 'https://i.postimg.cc/FKzhBr2s/IMG_0511.jpg'; 
        document.getElementById('audio-cover-img').src = imgSrc;
        document.getElementById('audio-listens-count').innerText = "125.6k";
        document.getElementById('audio-rating-score').innerText = "5.0";
        document.getElementById('review-overall-score').innerText = "5.0";
        window.generateCustomEpisodes(movieName, imgSrc, "1 tiếng 6 phút", "4 tiếng 16 phút", "125.6k");
    }
    else if (movieName === 'Họ Cứ Nghĩ Tôi Theo Em') {
        imgSrc = 'https://i.postimg.cc/YCk9bwrP/IMG_0510.jpg'; 
        document.getElementById('audio-cover-img').src = imgSrc;
        document.getElementById('audio-listens-count').innerText = "48.3k";
        document.getElementById('audio-rating-score').innerText = "5.0";
        document.getElementById('review-overall-score').innerText = "5.0";
        window.generateCustomEpisodes(movieName, imgSrc, "1 tiếng 4 phút", "3 tiếng 28 phút", "48.3k");
    }
    else if (movieName === 'Chuyển Tới Lớp Với Thanh Mai') {
        imgSrc = 'https://i.postimg.cc/265rgzMb/IMG_0509.jpg';
        document.getElementById('audio-cover-img').src = imgSrc;
        document.getElementById('audio-listens-count').innerText = "87.4k";
        document.getElementById('audio-rating-score').innerText = "5.0";
        document.getElementById('review-overall-score').innerText = "5.0";
        window.generateCustomEpisodes(movieName, imgSrc, "1 tiếng 27 phút", "3 tiếng 56 phút", "87.4k");
    }
    else {
        document.getElementById('audio-cover-img').src = imgSrc;
        document.getElementById('audio-listens-count').innerText = "0";
        document.getElementById('audio-rating-score').innerText = "0.0";
        document.getElementById('review-overall-score').innerText = "0.0";
        window.generateFixedEpisodes(movieName, imgSrc);
    }

    document.getElementById('player-overlay').classList.add('show');
    document.body.style.overflow = 'hidden'; 
    switchAudioTab('episodes');
    document.getElementById('player-scroll-area').scrollTop = 0;

    // Lưu vào lịch sử (Ảnh + Tên)
    setTimeout(() => { addHistoryEntry('watch', movieName, 'Đã xem', 0, imgSrc); }, 50);
};

window.playMainAudio = function() {
    window.playEpisode('SS1', document.getElementById('audio-title').innerText);
};

window.playEpisode = function(epName, movieName) {
    let img = document.getElementById('audio-cover-img').src;
    document.getElementById('player-scrolling-info').innerText = `${epName}: ${movieName} - Đang phát...`;
    
    if (movieName === 'Nữ Thần Liễu Như Yên' && epName === 'SS1') {
        window.triggerRealAudio("https://files.catbox.moe/gpnwng.m4a", `${epName}: ${movieName}`, img);
    } else if (movieName === 'Tôi Nằm Trên Ván Cược' && epName === 'SS1') {
        window.triggerRealAudio("https://files.catbox.moe/r433x2.m4a", `${epName}: ${movieName}`, img);
    } else if (movieName === 'Tái Sinh Cùng Vợ Mình' && epName === 'SS1') {
        window.triggerRealAudio("https://files.catbox.moe/csl5c0.m4a", `${epName}: ${movieName}`, img);
    } else if (movieName === 'Không Cùng Thế Giới Mà' && epName === 'SS1') {
        window.triggerRealAudio("https://files.catbox.moe/66zbhz.m4a", `${epName}: ${movieName}`, img);
    } else if (movieName === 'Hoàn Hảo Với Em Gái' && epName === 'SS1') {
        window.triggerRealAudio("https://files.catbox.moe/r1mu02.m4a", `${epName}: ${movieName}`, img);
    } else if (movieName === 'Hẹn Hò Với Nữ Minh Tinh' && epName === 'SS1') {
        window.triggerRealAudio("https://files.catbox.moe/3hfxx5.m4a", `${epName}: ${movieName}`, img);
    } else if (movieName === 'Nấu Ăn Để Câu Cá' && epName === 'SS1') {
        window.triggerRealAudio("https://files.catbox.moe/t56bql.m4a", `${epName}: ${movieName}`, img);
    } else if (movieName === 'Bảo Vệ Mẹ Mình Khỏi' && epName === 'SS1') {
        window.triggerRealAudio("https://files.catbox.moe/dxfojg.mp3", `${epName}: ${movieName}`, img);
    } else if (movieName === 'Hôn Em Một Cái Thôi Mà' && epName === 'SS1') {
        window.triggerRealAudio("https://files.catbox.moe/sv2cyf.m4a", `${epName}: ${movieName}`, img);
    } else if (movieName === 'Họ Cứ Nghĩ Tôi Theo Em' && epName === 'SS1') {
        window.triggerRealAudio("https://files.catbox.moe/8jw1g0.mp3", `${epName}: ${movieName}`, img);
    } else if (movieName === 'Chuyển Tới Lớp Với Thanh Mai' && epName === 'SS1') {
        window.triggerRealAudio("https://files.catbox.moe/cikmvt.m4a", `${epName}: ${movieName}`, img);
    } else {
        window.triggerRealAudio("", `${epName}: ${movieName}`, img); // Fallback
    }
    
    addHistoryEntry('watch', `${epName}: ${movieName}`, 'Đang nghe', 0, img);

    document.querySelectorAll('.ep-item-card').forEach(card => {
        card.style.border = '1px solid rgba(255,255,255,0.05)';
        card.style.background = 'rgba(255,255,255,0.03)';
        if(card.innerText.includes(epName)) {
            card.style.border = '1px solid var(--primary-color)';
            card.style.background = 'rgba(229, 9, 20, 0.1)';
        }
    });
};

window.realAudioEl = document.getElementById('real-audio-player');
window.triggerRealAudio = function(src, title, imgSrc) {
    if(typeof audioInterval !== 'undefined') clearInterval(audioInterval); 
    window.isPlaying = false;
    if(!window.realAudioEl) {
        window.realAudioEl = document.createElement('audio');
        window.realAudioEl.id = 'real-audio-player';
        document.body.appendChild(window.realAudioEl);
    }

    if(src) {
        window.realAudioEl.src = src;
        window.realAudioEl.playbackRate = window.currentSpeedMultiplier || 1;
        window.realAudioEl.play().catch(e => console.log("Lỗi phát audio:", e));
    }

    document.getElementById('mini-audio-player').classList.add('show');
    document.getElementById('mini-player-title').innerText = title;
    document.getElementById('mini-player-img').src = imgSrc;
    document.getElementById('btn-play-pause').innerHTML = '<i class="fas fa-pause"></i>';
    document.getElementById('time-current').innerText = "00:00";
    document.getElementById('time-total').innerText = "Đang tải...";

    window.realAudioEl.ontimeupdate = () => window.updateRealAudioUI(window.realAudioEl);
    window.realAudioEl.onloadedmetadata = () => window.updateRealAudioUI(window.realAudioEl);
    window.realAudioEl.onended = () => document.getElementById('btn-play-pause').innerHTML = '<i class="fas fa-play" style="margin-left: 2px;"></i>';
};

window.togglePlayPause = function() {
    let btn = document.getElementById('btn-play-pause');
    if (window.realAudioEl && window.realAudioEl.src && window.realAudioEl.src !== window.location.href) {
        if (window.realAudioEl.paused) { window.realAudioEl.play(); btn.innerHTML = '<i class="fas fa-pause"></i>'; } 
        else { window.realAudioEl.pause(); btn.innerHTML = '<i class="fas fa-play" style="margin-left:2px;"></i>'; }
    }
};

window.seekFakeAudio = function(e) {
    let clickX = e.offsetX; let width = document.getElementById('progress-area').clientWidth;
    let percentage = clickX / width;
    if (window.realAudioEl && window.realAudioEl.src && window.realAudioEl.src !== window.location.href) {
        window.realAudioEl.currentTime = window.realAudioEl.duration * percentage;
    }
};

window.changeSpeed = function() {
    const speeds = [1, 1.25, 1.5, 2];
    let cur = window.currentSpeedMultiplier || 1;
    window.currentSpeedMultiplier = speeds[(speeds.indexOf(cur) + 1) % speeds.length];
    document.getElementById('btn-speed').innerText = window.currentSpeedMultiplier + 'x';
    if (window.realAudioEl) window.realAudioEl.playbackRate = window.currentSpeedMultiplier;
};

window.closeMiniPlayer = function() {
    document.getElementById('mini-audio-player').classList.remove('show');
    window.isPlaying = false;
    if (window.realAudioEl) { window.realAudioEl.pause(); window.realAudioEl.src = ""; }
};

window.updateRealAudioUI = function(audio) {
    if(!audio.duration) return;
    let format = (secs) => {
        let h = Math.floor(secs/3600), m = Math.floor((secs%3600)/60), s = Math.floor(secs%60);
        return h>0 ? `${h}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}` : `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    };
    document.getElementById('time-current').innerText = format(audio.currentTime);
    document.getElementById('time-total').innerText = format(audio.duration);
    document.getElementById('progress-current').style.width = (audio.currentTime / audio.duration * 100) + '%';
};


// ================= AUTH, WALLET & PREMIUM =================
let currentWalletBalance = parseInt(localStorage.getItem('cnp_wallet_balance')) || 0;
let tempRegData = {};
let currentDepositType = ''; 
let pendingDepositAmount = 0;
window.validOtpCodes = ["AZ9T4GBN", "K3PQ8LMN", "J7FH2ECD", "R4TG6YUI", "E8W2AZXC", "9H8JKL32", "Q3VT4BNM", "7G4FH8JK", "C9D8EFGH", "V2B8N4ZA", "X5C9VBN8", "T7G3F2DE", "M4N8LKJH", "F2G5H8JK", "B9N4M2ZA", "P8L4K3GH", "H9G8F7ED", "N4V8B2XC", "G5T6Y7UI", "D8C9V4BN"];
window.wrongOtpAttempts = 0;
let currentPremPrice = 70000;
let currentPremMonths = 1;
let currentPremTier = 'bronze';

function updateBalanceUI() {
    let mainWallet = document.getElementById('main-wallet-balance');
    let userWallet = document.getElementById('current-user-balance');
    if (mainWallet) mainWallet.innerText = currentWalletBalance.toLocaleString('vi-VN');
    if (userWallet) userWallet.innerText = currentWalletBalance.toLocaleString('vi-VN') + ' VNĐ';
}

window.updateAndSaveBalance = function(newBalance) {
    currentWalletBalance = newBalance;
    localStorage.setItem('cnp_wallet_balance', currentWalletBalance);
    updateBalanceUI();
    
    let currentUser = JSON.parse(localStorage.getItem('cnp_current_user'));
    if (currentUser) {
        currentUser.walletBalance = newBalance;
        localStorage.setItem('cnp_current_user', JSON.stringify(currentUser));
        
        let usersDB = JSON.parse(localStorage.getItem('cnp_users_db')) || [];
        let userIndex = usersDB.findIndex(u => u.contact === currentUser.contact);
        if (userIndex !== -1) {
            usersDB[userIndex].walletBalance = newBalance;
            localStorage.setItem('cnp_users_db', JSON.stringify(usersDB));
        }
    }
};

function checkAuthStatus() {
    let currentUser = JSON.parse(localStorage.getItem('cnp_current_user'));
    if (currentUser) {
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('profile-section').style.display = 'block';
        document.getElementById('prof-username').innerText = currentUser.username;
        document.getElementById('prof-contact').value = currentUser.contact;
        document.getElementById('prof-ref').value = currentUser.refCode || 'Không có mã giới thiệu';
        updateAndSaveBalance(currentUser.walletBalance || 0);
    } else {
        document.getElementById('auth-section').style.display = 'block';
        document.getElementById('profile-section').style.display = 'none';
        switchAuthTab('login');
    }
}

window.switchAuthTab = function(tab) {
    document.getElementById('tab-btn-login').classList.remove('active');
    document.getElementById('tab-btn-register').classList.remove('active');
    document.getElementById('form-login').style.display = 'none';
    document.getElementById('form-register').style.display = 'none';
    document.getElementById('form-set-username').style.display = 'none';
    if (tab === 'login') { document.getElementById('tab-btn-login').classList.add('active'); document.getElementById('form-login').style.display = 'block'; } 
    else { document.getElementById('tab-btn-register').classList.add('active'); document.getElementById('form-register').style.display = 'block'; }
};

window.handleLogin = function() {
    let un = document.getElementById('login-username').value.trim();
    let pw = document.getElementById('login-password').value.trim();
    if (!un || !pw) { showNotification('warning', 'Thiếu Thông Tin', 'Vui lòng nhập Tên tài khoản và Mật khẩu!', 'Đã hiểu'); return; }
    let usersDB = JSON.parse(localStorage.getItem('cnp_users_db')) || [];
    let userFound = usersDB.find(u => (u.username === un || u.contact === un) && u.password === pw);
    if (userFound) {
        localStorage.setItem('cnp_current_user', JSON.stringify(userFound));
        showNotification('success', 'Thành Công', `Chào mừng ${userFound.username} quay trở lại!`, 'Vào trang chủ');
        document.getElementById('login-username').value = ''; document.getElementById('login-password').value = '';
        checkAuthStatus();
        syncPremiumUI();
    } else {
        showNotification('error', 'Lỗi Đăng Nhập', 'Tên tài khoản hoặc Mật khẩu không chính xác!', 'Thử lại');
    }
};

window.handleRegisterStep1 = function() {
    let contact = document.getElementById('reg-contact').value.trim();
    let pw = document.getElementById('reg-password').value.trim();
    let pwConfirm = document.getElementById('reg-confirm-password').value.trim();
    let refCode = document.getElementById('reg-refcode').value.trim();
    if (!contact || !pw || !pwConfirm) { showNotification('warning', 'Thiếu Thông Tin', 'SĐT/Gmail và Mật khẩu là bắt buộc!', 'Đã hiểu'); return; }
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneRegex = /^(0|84)(3|5|7|8|9)[0-9]{8}$/; 
    if (!emailRegex.test(contact) && !phoneRegex.test(contact)) {
        document.getElementById('reg-contact').style.borderColor = "#e50914"; 
        setTimeout(() => document.getElementById('reg-contact').style.borderColor = "rgba(255,255,255,0.1)", 1500);
        showNotification('error', 'Sai Định Dạng', 'Vui lòng nhập chính xác Email hợp lệ hoặc Số điện thoại (10 số)!', 'Sửa lại'); return;
    }
    if (pw !== pwConfirm) { showNotification('error', 'Lỗi Mật Khẩu', 'Xác nhận mật khẩu không khớp!', 'Nhập lại'); return; }
    let usersDB = JSON.parse(localStorage.getItem('cnp_users_db')) || [];
    if (usersDB.some(u => u.contact === contact)) { showNotification('error', 'Tài Khoản Đã Tồn Tại', 'Số điện thoại/Email này đã được đăng ký!', 'Đăng nhập'); return; }
    
    tempRegData = { contact: contact, password: pw, refCode: refCode, walletBalance: 0 };
    document.getElementById('form-register').style.display = 'none';
    let step2 = document.getElementById('form-set-username');
    step2.style.display = 'block'; step2.classList.remove('success-pop'); void step2.offsetWidth; step2.classList.add('success-pop');
    document.getElementById('tab-btn-register').innerText = "BƯỚC 2: TẠO TÊN";
};

window.rollRandomUsername = function() {
    const prefixes = ["Hacker", "Vip", "Pro", "Master", "Dark", "Light", "Phim", "Anime", "God", "Super", "Ultra", "Neo", "Alpha", "Shadow", "Cyber"];
    const suffixes = ["Player", "Lord", "King", "Queen", "Knight", "Hunter", "Ghost", "Ninja", "Boy", "Girl", "Star", "Wolf", "Dragon", "Tiger", "Shark"];
    const randChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let newName = "";
    if(Math.random() > 0.3) { newName = prefixes[Math.floor(Math.random() * prefixes.length)] + suffixes[Math.floor(Math.random() * suffixes.length)] + (Math.floor(Math.random() * 999) + 1); } 
    else { newName = "CNP_"; for(let i=0; i<5; i++) newName += randChars.charAt(Math.floor(Math.random() * randChars.length)); }
    let inputField = document.getElementById('reg-username'); inputField.value = newName;
    inputField.style.transform = 'scale(1.1)'; inputField.style.borderColor = '#f5c518';
    setTimeout(() => { inputField.style.transform = 'scale(1)'; inputField.style.borderColor = '#00c6ff'; }, 250);
};

window.handleRegisterFinal = function() {
    let un = document.getElementById('reg-username').value.trim();
    if (!un) { showNotification('warning', 'Chưa Nhập Tên', 'Bạn phải tạo Tên Tài Khoản!', 'Đã hiểu'); return; }
    let usersDB = JSON.parse(localStorage.getItem('cnp_users_db')) || [];
    if (usersDB.some(u => u.username === un)) { showNotification('error', 'Tên Bị Trùng', 'Tên tài khoản này đã có người sử dụng!', 'Thử tên khác'); return; }
    
    tempRegData.username = un;
    usersDB.push(tempRegData);
    localStorage.setItem('cnp_users_db', JSON.stringify(usersDB));
    localStorage.setItem('cnp_current_user', JSON.stringify(tempRegData));
    
    showNotification('success', 'Đăng Ký Thành Công', `Tài khoản "${un}" đã được tạo.`, 'Vào trang chủ');
    document.getElementById('reg-contact').value = ''; document.getElementById('reg-password').value = ''; document.getElementById('reg-confirm-password').value = ''; document.getElementById('reg-refcode').value = ''; document.getElementById('reg-username').value = '';
    document.getElementById('tab-btn-register').innerText = "ĐĂNG KÝ";
    checkAuthStatus();
};

window.handleLogout = function() {
    let currentUser = JSON.parse(localStorage.getItem('cnp_current_user'));
    if (currentUser) {
        let usersDB = JSON.parse(localStorage.getItem('cnp_users_db')) || [];
        let userIndex = usersDB.findIndex(u => u.contact === currentUser.contact);
        if (userIndex !== -1) {
            usersDB[userIndex].walletBalance = window.currentWalletBalance || 0;
            usersDB[userIndex].isPremium = currentUser.isPremium;
            usersDB[userIndex].premiumTier = currentUser.premiumTier;
            localStorage.setItem('cnp_users_db', JSON.stringify(usersDB));
        }
    }
    localStorage.removeItem('cnp_current_user');
    syncPremiumUI();
    if(document.getElementById('main-wallet-balance')) document.getElementById('main-wallet-balance').innerText = '0';
    if(document.getElementById('current-user-balance')) document.getElementById('current-user-balance').innerText = '0 VNĐ';
    showNotification('success', 'Đăng Xuất', 'Bạn đã đăng xuất an toàn.', 'Đóng');
    checkAuthStatus();
};

// ================= DEPOSIT LOGIC =================
window.openDepositModal = function(type) {
    if (!localStorage.getItem('cnp_current_user')) { showNotification('warning', 'Yêu Cầu', 'Đăng nhập để nạp tiền.', 'Đăng Nhập'); openTab('tab-account'); return; }
    window.currentDepositType = type; 
    let depInput = document.getElementById('deposit-amount'); if(depInput) depInput.value = ''; 
    let newCode = 'CNP' + Math.floor(100000 + Math.random() * 900000); 
    document.getElementById('bank-content-text').innerText = newCode; document.getElementById('qr-content-text').innerText = newCode;
    document.querySelectorAll('.quick-btn').forEach(btn => btn.classList.remove('active'));
    let depTitle = document.getElementById('dep-title'); let areaManual = document.getElementById('area-manual'); let areaQR = document.getElementById('area-qr');
    if(type === 'manual') { depTitle.innerHTML = '<i class="fas fa-university"></i> Chuyển Khoản Thủ Công'; if(areaManual) areaManual.classList.remove('show'); if(areaQR) areaQR.classList.remove('show'); } 
    else if (type === 'qr') { depTitle.innerHTML = '<i class="fas fa-qrcode"></i> Quét Mã QR Tự Động'; if(areaManual) areaManual.classList.remove('show'); if(areaQR) areaQR.classList.remove('show'); }
    window.checkAmount(); 
    let depModal = document.getElementById('deposit-modal-overlay'); if(depModal) depModal.classList.add('show');
};

window.closeDepositModal = function() { document.getElementById('deposit-modal-overlay').classList.remove('show'); };
window.setAmount = function(amount) { let depInput = document.getElementById('deposit-amount'); if(depInput) depInput.value = amount; document.querySelectorAll('.quick-btn').forEach(btn => btn.classList.remove('active')); if(event && event.target) event.target.classList.add('active'); window.checkAmount(); };

window.checkAmount = function() {
    let val = parseInt(document.getElementById('deposit-amount').value) || 0;
    let btnConfirmDep = document.getElementById('btn-confirm-dep'); let warningBox = document.getElementById('deposit-warning-box'); let areaManual = document.getElementById('area-manual'); let areaQR = document.getElementById('area-qr');
    if(val >= 10000) { 
        if(btnConfirmDep) { btnConfirmDep.style.opacity = '1'; btnConfirmDep.style.pointerEvents = 'auto'; }
        if(warningBox) warningBox.classList.add('show');
        if(window.currentDepositType === 'manual') { if(areaManual) areaManual.classList.add('show'); if(areaQR) areaQR.classList.remove('show'); } else { if(areaQR) areaQR.classList.add('show'); if(areaManual) areaManual.classList.remove('show'); }
    } else { 
        if(btnConfirmDep) { btnConfirmDep.style.opacity = '0.5'; btnConfirmDep.style.pointerEvents = 'none'; }
        if(areaManual) areaManual.classList.remove('show'); if(areaQR) areaQR.classList.remove('show'); if(warningBox) warningBox.classList.remove('show');
    }
};

window.confirmDeposit = function() {
    window.pendingDepositAmount = parseInt(document.getElementById('deposit-amount').value) || 0; 
    window.closeDepositModal(); 
    let otpInput = document.getElementById('otp-code-input'); if(otpInput) { otpInput.value = ''; otpInput.classList.remove('input-error'); }
    let otpModal = document.getElementById('otp-modal-overlay'); if(otpModal) otpModal.classList.add('show');
};

window.closeOtpModal = function() { let otpModal = document.getElementById('otp-modal-overlay'); if(otpModal) otpModal.classList.remove('show'); };
document.getElementById('otp-modal-overlay').addEventListener('click', function(e) { if(e.target === this) window.closeOtpModal(); });

window.verifyAndCompleteDeposit = function() {
    let inputField = document.getElementById('otp-code-input'); if(!inputField) return;
    let otpCode = inputField.value.trim().toUpperCase(); 
    if (otpCode === "") { inputField.classList.add('input-error'); showNotification('warning', 'Trống', 'Bạn chưa nhập mã!', 'Đã hiểu'); return; }

    let usedOtpCodes = JSON.parse(localStorage.getItem('cnp_used_otps')) || [];
    if (window.validOtpCodes.includes(otpCode)) {
        if (usedOtpCodes.includes(otpCode)) { inputField.classList.add('input-error'); showNotification('error', 'Hết Hạn', 'Mã đã được dùng!', 'Đã hiểu'); return; }
        window.wrongOtpAttempts = 0; usedOtpCodes.push(otpCode); localStorage.setItem('cnp_used_otps', JSON.stringify(usedOtpCodes));
        window.closeOtpModal();
        let currentUser = JSON.parse(localStorage.getItem('cnp_current_user'));
        let currentBalance = currentUser ? (currentUser.walletBalance || 0) : 0;
        let newBalance = currentBalance + (window.pendingDepositAmount || 0);
        window.updateAndSaveBalance(newBalance);
        let depMethod = window.currentDepositType === 'qr' ? 'Quét Mã QR' : 'Chuyển Khoản';
        addHistoryEntry('deposit', 'Nạp Tiền Qua ' + depMethod, window.pendingDepositAmount || 0, newBalance);
        
        let successModal = document.getElementById('deposit-success-overlay'); let amountText = document.getElementById('success-amount-text');
        if(amountText) amountText.innerText = `+ ${(window.pendingDepositAmount || 0).toLocaleString('vi-VN')} VNĐ đã được cộng vào ví`;
        if(successModal) successModal.classList.add('show');
        inputField.value = ''; 
    } else {
        window.wrongOtpAttempts++; inputField.classList.add('input-error'); 
        if (window.wrongOtpAttempts >= 3) { showNotification('error', 'CẢNH BÁO', 'Nhập sai quá nhiều lần!', 'Tôi Đã Hiểu'); } 
        else { showNotification('error', 'Mã Không Hợp Lệ', `Mã sai. (Lần: ${window.wrongOtpAttempts}/3)`, 'Thử Lại'); }
    }
};
window.closeSuccessCelebration = function() { let successModal = document.getElementById('deposit-success-overlay'); if(successModal) successModal.classList.remove('show'); };
window.copyText = function(id) { let text = document.getElementById(id).innerText; navigator.clipboard.writeText(text).then(() => alert("Đã copy: " + text)); };

// ================= PREMIUM & PAYMENT =================
window.openPremiumModal = function() {
    if (!localStorage.getItem('cnp_current_user')) { showNotification('warning', 'Yêu Cầu', 'Đăng nhập để nâng cấp Premium!', 'Đăng Nhập'); openTab('tab-account'); return; }
    document.getElementById('premium-modal').classList.add('show');
};
window.closePremiumModal = function() { document.getElementById('premium-modal').classList.remove('show'); };

window.selectPrem = function(el, m, p, tier) {
    document.querySelectorAll('.prem-card').forEach(c => c.classList.remove('active')); el.classList.add('active');
    currentPremPrice = p; currentPremMonths = m; currentPremTier = tier;
    document.getElementById('prem-sum').innerHTML = `Thanh toán: <span style="color: #f5c518;">${p.toLocaleString('vi-VN')}đ</span>`;
};

window.confirmPurchasePremium = function() {
    let currentUser = JSON.parse(localStorage.getItem('cnp_current_user')); let balance = currentUser.walletBalance || 0;
    if (balance < currentPremPrice) { showNotification('error', 'Thất Bại', 'Số dư ví không đủ. Vui lòng nạp thêm!', 'Nạp Tiền'); closePremiumModal(); openTab('tab-wallet'); return; }
    let newBalance = balance - currentPremPrice; currentUser.walletBalance = newBalance; currentUser.isPremium = true; currentUser.premiumTier = currentPremTier;
    window.updateAndSaveBalance(newBalance); localStorage.setItem('cnp_current_user', JSON.stringify(currentUser));
    addHistoryEntry('spend', 'Mua Gói Premium ' + currentPremMonths + ' Tháng', currentPremPrice, newBalance);
    showNotification('success', 'Tuyệt Vời', `Bạn đã nâng cấp Premium thành công!`, 'Trải nghiệm'); closePremiumModal(); syncPremiumUI();
};

window.syncPremiumUI = function() {
    let user = JSON.parse(localStorage.getItem('cnp_current_user')); let crown = document.getElementById('header-crown-status'); let heroBtn = document.getElementById('main-premium-btn');
    if (user && user.isPremium) {
        if(crown) { crown.style.display = 'inline-block'; crown.className = 'fas fa-crown crown-' + user.premiumTier; }
        if(heroBtn) { heroBtn.classList.add('is-active'); heroBtn.innerHTML = '<i class="fas fa-check-circle"></i> Đã Kích Hoạt Premium'; }
    } else {
        if(crown) crown.style.display = 'none';
        if(heroBtn) { heroBtn.classList.remove('is-active'); heroBtn.innerHTML = '<i class="fas fa-crown"></i> Nâng Cấp Premium'; }
    }
};

let currentBasePrice = 0; let finalPrice = 0;
window.openPaymentModal = function(pkg, price) { 
    if (!localStorage.getItem('cnp_current_user')) { showNotification('warning', 'Yêu Cầu Đăng Nhập', 'Vui lòng đăng nhập để mua gói.', 'Đăng Nhập'); openTab('tab-account'); document.getElementById('player-overlay').classList.remove('show'); document.body.style.overflow = 'auto'; return; }
    currentBasePrice = price; document.getElementById('pay-package-name').innerText = pkg; document.querySelector('.dur-card').click(); document.getElementById('payment-modal-overlay').classList.add('show'); 
};
window.closePaymentModal = function() { document.getElementById('payment-modal-overlay').classList.remove('show'); };
window.selectDuration = function(el, m, disc) { document.querySelectorAll('.dur-card').forEach(c => c.classList.remove('active')); el.classList.add('active'); finalPrice = currentBasePrice * m * ((100-disc)/100); document.getElementById('pay-total-price').innerText = finalPrice.toLocaleString('vi-VN') + 'đ'; };

window.processPayment = function() {
    closePaymentModal();
    setTimeout(() => {
        if(currentWalletBalance >= finalPrice) {
            let pkgName = document.getElementById('pay-package-name').innerText;
            addHistoryEntry('spend', pkgName, finalPrice, currentWalletBalance - finalPrice);
            updateAndSaveBalance(currentWalletBalance - finalPrice);
            showNotification('success', 'Thành Công', 'Đã mua gói Server thành công.', 'Xem ngay');
        } else { showNotification('error', 'Thất Bại', 'Số dư không đủ!', 'Đã hiểu'); }
    }, 300);
};

// ================= HISTORY LOGIC =================
window.addHistoryEntry = function(type, title, amountOrExtra, balanceAfter = 0, imgSrc = '') {
    let history = JSON.parse(localStorage.getItem('cnp_user_history')) || [];
    if (type === 'watch') history = history.filter(item => item.title !== title);
    const newEntry = { id: Date.now(), type: type, title: title, time: (new Date()).toLocaleTimeString('vi-VN', {hour: '2-digit', minute:'2-digit'}) + ' - ' + (new Date()).toLocaleDateString('vi-VN'), amountOrExtra: amountOrExtra, balanceAfter: balanceAfter, imgSrc: imgSrc };
    history.unshift(newEntry); if (history.length > 50) history.pop(); localStorage.setItem('cnp_user_history', JSON.stringify(history));
    if(typeof renderHistoryUI === 'function') renderHistoryUI();
};

window.renderHistoryUI = function() {
    const container = document.getElementById('main-history-list'); if (!container) return;
    let history = JSON.parse(localStorage.getItem('cnp_user_history')) || [];
    if (history.length === 0) { container.innerHTML = '<p style="text-align:center; color:#888; padding: 30px; font-style: italic;">Bạn chưa có hoạt động nào gần đây.</p>'; return; }
    let html = '';
    history.forEach((item, index) => {
        let delay = (index * 0.05) > 1 ? 0 : (index * 0.05);
        if (item.type === 'watch') {
            let coverImg = item.imgSrc ? item.imgSrc : 'https://i.postimg.cc/2S1MZ1vZ/E18A0AE5-6F3B-4815-8759-7ED0A77B8DBB.png';
            html += `<div class="history-item type-watch" style="animation-delay: ${delay}s;" onclick="openPlayer('${item.title}')">
                <div class="hist-left"><div class="hist-img-preview"><img src="${coverImg}" alt="${item.title}"></div><div class="hist-details"><span class="hist-title">${item.title}</span><span class="hist-time"><i class="far fa-clock"></i> ${item.time}</span></div></div>
                <div class="hist-right"><div class="hist-val-watch" style="color: var(--primary-color); border-color: var(--primary-color); font-weight: bold; background: rgba(229,9,20,0.1);"><i class="fas fa-play"></i> Nghe Lại</div></div>
            </div>`;
        } else {
            let iconClass = item.type === 'deposit' ? 'icon-deposit' : 'icon-spend'; let iconFas = item.type === 'deposit' ? 'fa-money-check-alt' : 'fa-shopping-cart'; let valClass = item.type === 'deposit' ? 'hist-val-plus' : 'hist-val-minus'; let prefix = item.type === 'deposit' ? '+' : '-';
            html += `<div class="history-item type-transaction" style="animation-delay: ${delay}s;">
                <div class="hist-left"><div class="hist-icon ${iconClass}"><i class="fas ${iconFas}"></i></div><div class="hist-details"><span class="hist-title">${item.title}</span><span class="hist-time"><i class="far fa-clock"></i> ${item.time}</span></div></div>
                <div class="hist-right"><div class="${valClass}">${prefix} ${item.amountOrExtra.toLocaleString('vi-VN')}đ</div><div class="hist-balance-after">Số dư: ${item.balanceAfter.toLocaleString('vi-VN')}đ</div></div>
            </div>`;
        }
    });
    container.innerHTML = html;
};

window.filterHistory = function(type, btnElement) {
    document.querySelectorAll('.hist-tab-btn').forEach(btn => btn.classList.remove('active')); btnElement.classList.add('active');
    document.querySelectorAll('.history-item').forEach(item => {
        if (type === 'all') item.classList.remove('hide'); else if (type === 'watch') item.classList.contains('type-watch') ? item.classList.remove('hide') : item.classList.add('hide'); else if (type === 'transaction') item.classList.contains('type-transaction') ? item.classList.remove('hide') : item.classList.add('hide');
    });
};

// ================= APP INSTALL & ADS =================
window.closeInstallBanner = function() { const banner = document.getElementById('app-install-banner'); if (banner) { banner.style.animation = 'slideUpBanner 0.5s reverse forwards'; setTimeout(() => { banner.style.display = 'none'; }, 500); } };
window.openInstallModal = function() { document.getElementById('app-install-modal').classList.add('show'); };
window.closeInstallModal = function() { document.getElementById('app-install-modal').classList.remove('show'); };
window.switchInstallTab = function(os) { document.querySelectorAll('.os-tab').forEach(btn => btn.classList.remove('active')); document.querySelectorAll('.install-tab-content').forEach(content => content.classList.remove('active')); if (os === 'ios') { document.querySelectorAll('.os-tab')[0].classList.add('active'); document.getElementById('install-tab-ios').classList.add('active'); } else { document.querySelectorAll('.os-tab')[1].classList.add('active'); document.getElementById('install-tab-android').classList.add('active'); } };
document.getElementById('app-install-modal').addEventListener('click', function(e) { if (e.target === this) window.closeInstallModal(); });

window.showSingleAd = function(id) {
    const adElement = document.getElementById(id);
    if(adElement) { adElement.classList.remove('show-this-ad'); adElement.style.opacity = '1'; adElement.style.transform = 'translateY(0) scale(1)'; void adElement.offsetWidth; adElement.classList.add('show-this-ad'); }
};
window.closeAdSequential = function(currentId, nextId, event) {
    if(event) { event.preventDefault(); event.stopPropagation(); }
    const currentAd = document.getElementById(currentId);
    if(currentAd) {
        currentAd.style.transform = 'translateX(120%)'; currentAd.style.opacity = '0';
        setTimeout(() => { currentAd.classList.remove('show-this-ad'); currentAd.style.transform = ''; currentAd.style.opacity = ''; if(nextId) showSingleAd(nextId); }, 300);
    }
};
window.triggerFloatingAds = function() {
    document.querySelectorAll('.floating-ad-item').forEach(ad => ad.classList.remove('show-this-ad'));
    setTimeout(() => { showSingleAd('fad-3'); }, 100);
    setTimeout(() => { window.triggerEventBanner(); }, 300);
};
window.closeTopRightEvent = function(event) { event.preventDefault(); event.stopPropagation(); const banner = document.getElementById('top-right-event-banner'); if(banner) { banner.style.animation = 'slideOutRight 0.5s forwards'; setTimeout(() => { banner.classList.remove('show-event'); banner.style.animation = ''; }, 500); } };
window.goToWalletAndClose = function(event) { event.preventDefault(); openTab('tab-wallet'); window.closeTopRightEvent(event); };
window.triggerEventBanner = function() { const banner = document.getElementById('top-right-event-banner'); if(banner) { banner.classList.remove('show-event'); void banner.offsetWidth; banner.classList.add('show-event'); } };

window.updateFileName = function(input) { const label = document.getElementById('support-image-label'); if (input.files && input.files.length > 0) { let fileName = input.files[0].name; if (fileName.length > 25) fileName = fileName.substring(0, 22) + '...'; label.innerHTML = `<i class="fas fa-image"></i> Đã chọn: ${fileName}`; label.classList.add('has-file'); } else { label.innerHTML = `<i class="fas fa-cloud-upload-alt"></i> Tải lên ảnh minh họa lỗi (Nếu có)`; label.classList.remove('has-file'); } };
window.submitSupportTicket = function() { let name = document.getElementById('support-name').value; let email = document.getElementById('support-email').value; let content = document.getElementById('support-content').value; if(!name || !email || !content) { showNotification('warning', 'Thiếu Thông Tin', 'Vui lòng điền đầy đủ Họ tên, Email và Nội dung cần hỗ trợ!', 'Đã hiểu'); return; } showNotification('success', 'Gửi Thành Công', 'Tin nhắn kèm ảnh minh họa của bạn đã được gửi. Đội ngũ hỗ trợ sẽ phản hồi sớm nhất!', 'Đóng'); document.getElementById('support-name').value = ''; document.getElementById('support-email').value = ''; document.getElementById('support-content').value = ''; document.getElementById('support-image').value = ''; window.updateFileName(document.getElementById('support-image')); };

// Service Worker (Chạy ngầm để tải nhanh / Offline nhẹ)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').then(function(registration) { console.log('ServiceWorker đăng ký thành công!'); }, function(err) { console.log('ServiceWorker đăng ký thất bại: ', err); });
    });
}

// KHỞI CHẠY TẤT CẢ KHI LOAD WEB XONG
document.addEventListener('DOMContentLoaded', () => {
    checkAuthStatus();
    setTimeout(() => { if(typeof renderLatestMovies === 'function') renderLatestMovies(); }, 200);
    setTimeout(() => { window.renderMoviesByPage(1); renderPagination(1); }, 300);
    setTimeout(() => { renderHistoryUI(); syncPremiumUI(); }, 500);
    setTimeout(triggerFloatingAds, 800); 
    
    // Cập nhật số dư nếu có lưu trước đó
    setTimeout(() => {
        let currentUser = JSON.parse(localStorage.getItem('cnp_current_user'));
        if (currentUser) { window.updateAndSaveBalance(currentUser.walletBalance || 0); }
    }, 200);
});
