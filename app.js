// Project Data for Portfolio Showcase
const projectsData = [
  {
    id: "apple-mdm-fleet",
    title: "Hệ thống Apple MDM Quản lý 15.000 Thiết Bị Doanh Nghiệp",
    category: "enterprise-mdm",
    date: "2023 - 2026",
    teamSize: "Enterprise Scale",
    role: "Senior Software Engineer",
    image: "assets/images/projects/apple-mdm-fleet.jpg",
    shortDesc: "Hệ thống quản trị và kiểm soát tập trung (Apple MDM) cho hơn 15.000 thiết bị MacBook, iPhone, iPad chuẩn Enterprise Security.",
    features: [
      "Zero-Touch Onboarding: Tích hợp Apple Business Manager (ABM) và Automated Device Enrollment (ADE/DEP) tự động kích hoạt và cấu hình không cần IT thao tác tay.",
      "Volume Purchase Program (VPP): Phân phối, cài đặt ngầm (silent push), quản lý bản quyền phần mềm và tái cấp phát giấy phép tự động qua Apps & Books.",
      "Security Policy Enforcement: Cấu hình bắt buộc mã hóa FileVault (macOS), chính sách Passcode phức tạp, tường lửa (Firewall), chứng chỉ số PKI 802.1X.",
      "APNs Push Engine: Gửi lệnh điều khiển tức thì qua Apple Push Notification service để Remote Lock, Remote Wipe, Lost Mode và ép buộc cập nhật OS Patches.",
      "Declarative Device Management (DDM): Tối ưu hóa lưu lượng telemetry thời gian thực, thiết bị tự động gửi báo cáo vi phạm chính sách về Cloud Console."
    ],
    techStack: ["Apple MDM Protocol", "Apple Business Manager (ABM)", "ADE / DEP", "VPP", "APNs Push Engine", "DDM", "PKI Certificates", "RESTful Cloud API"]
  },
  {
    id: "learnnplay",
    title: "Landing Page Mầm Non Montessori Learn N Play",
    category: "landing-page",
    date: "2023",
    teamSize: "3 thành viên",
    role: "Web / Frontend Developer",
    image: "assets/images/projects/learnnplay.jpg",
    shortDesc: "Landing Page giới thiệu hệ thống Trường Mầm Non Montessori Quốc Tế Learn N Play, tối ưu trải nghiệm và tỷ lệ chuyển đổi phụ huynh đăng ký tư vấn tuyển sinh.",
    features: [
      "Thiết kế giao diện giáo dục trẻ thơ hiện đại, tương thích hoàn hảo mọi kích thước màn hình (Mobile, Tablet, Desktop).",
      "Giới thiệu triết lý giáo dục Montessori chuẩn quốc tế, giáo cụ trực quan và 5 lĩnh vực phát triển toàn diện của trẻ.",
      "Tích hợp biểu mẫu đăng ký tham quan trường và nhận học bổng tuyển sinh trực tuyến nhanh chóng.",
      "Tối ưu hóa tốc độ tải trang (PageSpeed), cấu trúc chuẩn SEO On-page và tích hợp đo lường tiếp thị số."
    ],
    techStack: ["WordPress", "Elementor Pro", "Blocksy Theme", "PHP", "Responsive CSS3", "SEO & Performance"],
    link: "https://learnnplay.vn/",
    linkLabel: "Mở Landing Page Learn N Play"
  },
  {
    id: "pos-loyaltyhub",
    title: "POS APP / Loyalty HUB (Merchant & Store Operations)",
    category: "flutter",
    date: "12/2021 - 06/2022",
    teamSize: "3 thành viên",
    role: "Mobile Developer",
    image: "assets/images/projects/pos-loyaltyhub.jpg",
    shortDesc: "Nền tảng quản trị và vận hành bán hàng, tích điểm, giao vận Ahamove cho chuỗi doanh nghiệp CNV Loyalty.",
    features: [
      "Quét mã QR/Barcode siêu tốc tích điểm, đổi thưởng và kiểm tra thành viên.",
      "Quản lý đơn hàng, đặt chỗ (booking) với thông báo đẩy thời gian thực qua FCM.",
      "Tích hợp gọi shipper giao hàng tức thì qua API Ahamove.",
      "Báo cáo và biểu đồ phân tích tăng trưởng doanh thu trực quan.",
      "Ứng dụng thực tế đang chạy trên Google Play: vn.cnv.cnvloyalty.nethub"
    ],
    techStack: ["Flutter", "Provider", "Ahamove API", "QR Scanner", "Firebase FCM", "Syncfusion Charts"],
    link: "https://play.google.com/store/apps/details?id=vn.cnv.cnvloyalty.nethub&hl=en",
    linkLabel: "Mở Loyalty HUB trên Google Play"
  },
  {
    id: "loyalty-hashop",
    title: "Loyalty App - Hà Shop (Retail & Spa E-Commerce)",
    category: "flutter",
    date: "05/2021 - 03/2022",
    teamSize: "3 thành viên",
    role: "Mobile Developer",
    image: "assets/images/projects/loyalty-hashop.jpg",
    shortDesc: "Ứng dụng khách hàng thân thiết và thương mại điện tử chuyên sâu cho thời trang, bán lẻ và spa làm đẹp.",
    features: [
      "Đăng nhập bảo mật Google, Apple ID và Firebase OTP SMS.",
      "Thẻ thành viên VIP điện tử với cơ chế tích điểm và thăng hạng.",
      "Tích hợp giỏ hàng và thanh toán trực tuyến MoMo và VNPay.",
      "Đặt lịch hẹn dịch vụ spa linh hoạt theo ngày/giờ.",
      "Ứng dụng thực tế đang phát hành trên Google Play: vn.cnv.cnvloyalty.hashop"
    ],
    techStack: ["Flutter", "GetX", "Provider", "MoMo Deeplink", "VNPay", "RESTful API"],
    link: "https://play.google.com/store/apps/details?id=vn.cnv.cnvloyalty.hashop&hl=en",
    linkLabel: "Mở Hà Shop trên Google Play"
  },
  {
    id: "business-app",
    title: "Business Application (Telehealth & Medical Survey)",
    category: "flutter",
    date: "04/2023 - 07/2023",
    teamSize: "8 thành viên",
    role: "Flutter Developer",
    image: "assets/images/projects/business-app.jpg",
    shortDesc: "Ứng dụng chẩn đoán y tế qua bộ câu hỏi phân nhánh thông minh và video bài tập phục hồi chức năng có sẵn.",
    features: [
      "Đăng nhập xác thực đa kênh: Google Sign-in, Apple ID, Firebase Auth.",
      "Tích hợp cổng thanh toán trực tuyến: MoMo Deeplink và VNPay Gateway.",
      "Đặt lịch hẹn khám trực tuyến (Booking) và đặt đơn thuốc/dịch vụ (Order).",
      "Dynamic UI manager: tùy biến giao diện ứng dụng phù hợp cho từng chuyên khoa.",
      "Tối ưu hóa và đóng gói phát hành lên Apple App Store và Google Play Store."
    ],
    techStack: ["Flutter", "Dart", "Hooks Riverpod", "Firebase", "MoMo SDK", "VNPay", "RESTful API"]
  },
  {
    id: "wellness-app",
    title: "WellNess (AI Camera Fitness & Pose Analysis)",
    category: "flutter",
    date: "12/2022 - 04/2023",
    teamSize: "2 thành viên",
    role: "Flutter Developer",
    image: "assets/images/projects/wellness-app.jpg",
    shortDesc: "Ứng dụng theo dõi sức khỏe và chẩn đoán thể chất qua camera trí tuệ nhân tạo nhận diện người tập.",
    features: [
      "Tự động nhận diện tư thế và người dùng đứng trước camera để kích hoạt phiên tập.",
      "Ghi hình video buổi tập và phát âm thanh hướng dẫn nhịp điệu động tác (Audio waveform guide).",
      "Hệ thống câu hỏi chẩn đoán sức khỏe thông minh cá nhân hóa lộ trình tập luyện.",
      "Tối ưu hóa camera stream 60 FPS duy trì hiệu năng mượt mà."
    ],
    techStack: ["Flutter", "Dart", "BLoC", "Camera Streams", "Audio Engine", "RESTful API"]
  },
  {
    id: "loyalty-reactnative",
    title: "Loyalty App (Cross-Platform Retail & Booking)",
    category: "react-native",
    date: "01/2021 - 05/2021",
    teamSize: "3 thành viên",
    role: "React Native Developer",
    image: "assets/images/projects/loyalty-reactnative.jpg",
    shortDesc: "Phiên bản ứng dụng khách hàng thân thiết đa nền tảng cho ngành F&B, thời trang và spa thẩm mỹ viện.",
    features: [
      "Xây dựng giao diện chuẩn Pixel-Perfect từ thiết kế Figma/XD.",
      "Danh mục voucher giảm giá, mã ưu đãi điện tử (E-vouchers) có hạn dùng.",
      "Tích hợp cổng thanh toán MoMo và VNPay SDK cho React Native.",
      "Quản lý đơn hàng và trạng thái đặt dịch vụ theo thời gian thực."
    ],
    techStack: ["React Native", "TypeScript", "Redux", "MoMo Bridge", "RESTful API", "FCM"]
  },
  {
    id: "chat-app",
    title: "Real-time Chat App (Messaging & Channels)",
    category: "react-native",
    date: "10/2020 - 12/2020",
    teamSize: "1 thành viên",
    role: "Solo Developer",
    image: "assets/images/projects/chat-app.jpg",
    shortDesc: "Ứng dụng nhắn tin tức thời bảo mật, hỗ trợ chat cá nhân và tạo phòng chat hội nhóm thời gian thực.",
    features: [
      "Xác thực người dùng toàn diện thông qua Firebase Authentication.",
      "Nhắn tin thời gian thực độ trễ thấp với Cloud Firestore / Realtime DB.",
      "Quản lý hồ sơ người dùng, ảnh đại diện và trạng thái online/offline.",
      "Hỗ trợ tạo phòng chat hội nhóm và chia sẻ tệp tin hình ảnh."
    ],
    techStack: ["React Native", "JavaScript", "Firebase Auth", "Cloud Firestore", "AsyncStorage"]
  },
  {
    id: "english-learning",
    title: "English Learning App (Interactive Pronunciation & Quiz)",
    category: "flutter",
    date: "08/2020 - 10/2020",
    teamSize: "3 thành viên",
    role: "Flutter Developer",
    image: "assets/images/projects/english-learning.jpg",
    shortDesc: "Ứng dụng học phát âm tiếng Anh qua video khẩu hình miệng trực quan và bài trắc nghiệm hình ảnh.",
    features: [
      "Trình phát video hướng dẫn vị trí đặt lưỡi và cử động môi theo bảng phiên âm IPA.",
      "Xử lý video trực tiếp tại máy người dùng (Client-side video processing).",
      "Bài kiểm tra nghe âm thanh chọn tranh ảnh phản xạ nhanh.",
      "Hệ thống tích điểm thưởng động viên người học mỗi ngày."
    ],
    techStack: ["Flutter", "Dart", "Video Processing", "Audio Player", "Widget Tree"]
  },
  {
    id: "van-tai-quochuy",
    title: "Quốc Huy Logistics (Transportation & Fleet ERP)",
    category: "web-php",
    date: "03/2020 - 07/2020",
    teamSize: "6 thành viên",
    role: "Web Developer",
    image: "assets/images/projects/van-tai-quochuy.jpg",
    shortDesc: "Hệ thống web ERP quản trị vận tải: điều phối xe container, quản lý tài xế, hành trình và kho bãi.",
    features: [
      "Phân quyền đa cấp: Quản trị viên, Quản lý đội xe, Tài xế, Phụ xe.",
      "Quản lý phương tiện vận tải: đầu kéo, rơ-moóc, hạn đăng kiểm và bảo dưỡng định kỳ.",
      "Tối ưu hóa tuyến đường di chuyển và theo dõi trạng thái lô hàng.",
      "Quản lý kho hàng, xuất hóa đơn cước vận tải và báo cáo doanh thu.",
      "Tích hợp kết nối API với hệ thống quản lý kho vận WMS."
    ],
    techStack: ["PHP", "WordPress Core", "MySQL", "RESTful API", "WMS Integration", "CSS3"]
  },
  {
    id: "an-tuong-dep",
    title: "Ấn Tượng Đẹp (Costume & Product Rental Platform)",
    category: "web-php",
    date: "01/2020 - 03/2020",
    teamSize: "3 thành viên",
    role: "Web Developer",
    image: "assets/images/projects/an-tuong-dep.jpg",
    shortDesc: "Website thương mại điện tử chuyên nghiệp hỗ trợ bán và cho thuê trang phục biểu diễn, sự kiện.",
    features: [
      "Chức năng chọn ngày thuê linh hoạt kèm kiểm tra lịch tồn kho tự động.",
      "Hệ thống tự động tính toán tiền đặt cọc và phụ phí khi quá hạn trả hàng.",
      "Quản lý vòng đời sản phẩm: Giữ chỗ, Đã xuất kho, Đang thuê, Đã hoàn trả.",
      "Tích hợp đơn vị vận chuyển giao hàng tận nơi hai chiều."
    ],
    techStack: ["PHP", "WooCommerce Hooks", "Rental Plugin", "Payment Gateway", "Shipping API"]
  }
];

// Initialize DOM
document.addEventListener("DOMContentLoaded", () => {
  renderProjects("all");
  setupFilters();
  setupModal();
});

// Render Projects
function renderProjects(filterCategory) {
  const container = document.getElementById("projects-container");
  if (!container) return;

  const filtered = filterCategory === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === filterCategory);

  container.innerHTML = filtered.map(project => `
    <div class="project-card" data-id="${project.id}">
      <div class="project-image-box">
        ${project.link 
          ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer">
               <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy" />
             </a>`
          : `<img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy" />`
        }
        <span class="project-badge">${formatCategory(project.category)}</span>
      </div>
      <div class="project-body">
        <div class="project-meta">
          <span>${project.date}</span>
          <span>${project.teamSize}</span>
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.shortDesc}</p>
        <div class="project-tags">
          ${project.techStack.slice(0, 4).map(tech => `<span class="tag tag-highlight">${tech}</span>`).join("")}
          ${project.techStack.length > 4 ? `<span class="tag">+${project.techStack.length - 4}</span>` : ""}
        </div>
        <div class="project-actions">
          <button class="btn btn-outline btn-card view-detail-btn" onclick="openProjectModal('${project.id}')">
            Xem chi tiết
          </button>
          ${project.link ? `
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-card" title="Mở liên kết">
              Link sản phẩm
            </a>
          ` : ""}
        </div>
      </div>
    </div>
  `).join("");
}

function formatCategory(cat) {
  switch (cat) {
    case "enterprise-mdm": return "Apple MDM Enterprise";
    case "landing-page": return "Landing Page";
    case "flutter": return "Flutter App";
    case "react-native": return "React Native";
    case "web-php": return "Web & ERP";
    default: return "Software Project";
  }
}

// Setup Filters
function setupFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });
}

// Modal Logic
function setupModal() {
  const overlay = document.getElementById("modal-overlay");
  const closeBtn = document.getElementById("modal-close");

  if (closeBtn && overlay) {
    closeBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    });
  }
}

function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const overlay = document.getElementById("modal-overlay");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalMeta = document.getElementById("modal-meta");
  const modalDesc = document.getElementById("modal-desc");
  const modalFeatures = document.getElementById("modal-features-list");
  const modalTags = document.getElementById("modal-tags");
  const modalLinkBox = document.getElementById("modal-link-box");

  if (modalImg) modalImg.src = project.image;
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalMeta) modalMeta.textContent = `${project.date} | ${project.teamSize} | Vai trò: ${project.role}`;
  if (modalDesc) modalDesc.textContent = project.shortDesc;
  
  if (modalFeatures) {
    modalFeatures.innerHTML = project.features.map(f => `<li>${f}</li>`).join("");
  }

  if (modalTags) {
    modalTags.innerHTML = project.techStack.map(t => `<span class="tag tag-highlight">${t}</span>`).join("");
  }

  if (modalLinkBox) {
    if (project.link) {
      const label = project.linkLabel || "Mở liên kết sản phẩm";
      modalLinkBox.innerHTML = `
        <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="margin-top: 1.25rem;">
          ${label}
        </a>
      `;
    } else {
      modalLinkBox.innerHTML = "";
    }
  }

  if (overlay) {
    overlay.classList.add("active");
  }
}

// Copy to Clipboard
function copyToClipboard(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    alert(`Đã sao chép ${label}: ${text}`);
  }).catch(() => {
    prompt(`Sao chép ${label}:`, text);
  });
}
