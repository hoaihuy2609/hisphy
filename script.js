/**
 * HISTORY OF PHYSICS — DIGITAL CASEFILE
 * Dữ liệu & Logic tương tác cho bài thuyết trình
 */

const data = {
  // 1. THÔNG TIN CHỦ ĐỀ CHÍNH
  topic: {
    title: 'Cách mạng Cơ học: Từ Galileo đến Isaac Newton',
    period: 'THẾ KỶ XVII (1609 — 1687)',
    formula: 'F = m · a'
  },

  // 2. SỐ LIỆU TÓM TẮT BAN ĐẦU
  metrics: {
    sources: '04',
    milestones: '05',
    figures: '03'
  },

  // 3. CÁC MỐC DÒNG THỜI GIAN
  timeline: [
    {
      year: '1610',
      era: 'BỐI CẢNH',
      tagKey: 'context',
      title: 'Vũ trụ nhật tâm & Kính thiên văn',
      desc: 'Galileo hướng ống kính lên bầu trời, quan sát các vệ tinh sao Mộc và các pha của sao Kim, phá vỡ mô hình địa tâm của Aristotle và Ptolemy.',
      context: 'Hơn một nghìn năm, mô hình Địa tâm thống trị châu Âu. Mọi thiên thể được coi là hoàn hảo và xoay quanh Trái Đất.',
      experiment: 'Chế tạo kính viễn vọng 20x. Phát hiện 4 mặt trăng Sao Mộc và vết đen Mặt Trời, chứng minh không phải mọi thứ đều quay quanh Trái Đất.',
      legacy: 'Cung cấp bằng chứng thực nghiệm đầu tiên ủng hộ thuyết Nhật tâm Copernicus, khởi đầu thiên văn quan sát.',
      formula: 'v = g · t'
    },
    {
      year: '1638',
      era: 'CÂU HỎI',
      tagKey: 'question',
      title: 'Quy luật rơi tự do & Khái niệm Quán tính',
      desc: 'Thí nghiệm mặt phẳng nghiêng lật đổ quan niệm của Aristotle rằng vật nặng hơn sẽ rơi nhanh hơn.',
      context: 'Aristotle khẳng định vật cần lực tác dụng liên tục để duy trì chuyển động, và vận tốc rơi tỷ lệ thuận với khối lượng.',
      experiment: 'Dùng mặt phẳng nghiêng mài nhẵn và đồng hồ nước đo thời gian. Quãng đường chứng minh tỷ lệ với bình phương thời gian.',
      legacy: 'Xác lập phương pháp nghiên cứu thực nghiệm: Giả thuyết → Đo đạc định lượng → Khái quát hóa toán học.',
      formula: 's = ½ · g · t²'
    },
    {
      year: '1666',
      era: 'THỰC NGHIỆM',
      tagKey: 'evidence',
      title: 'Năm kỳ diệu của Newton (Annus Mirabilis)',
      desc: 'Trong đợt dịch hạch London, Isaac Newton về quê lánh nạn và độc lập phác thảo phép tính vi phân, quang học và trọng lực.',
      context: 'Cambridge đóng cửa vì đại dịch, Newton ở ẩn 18 tháng tại Woolsthorpe và tự mình giải các bài toán bế tắc của thời đại.',
      experiment: 'Thí nghiệm tách ánh sáng trắng qua lăng kính, quan sát quả táo rơi và liên hệ gia tốc rơi tự do với quỹ đạo Mặt Trăng.',
      legacy: 'Tạo cây cầu nối giữa chuyển động vật lý trên mặt đất và quy luật chuyển động của các thiên thể trong không gian.',
      formula: 'F_g = G · (m₁ · m₂) / r²'
    },
    {
      year: '1687',
      era: 'ĐỊNH LUẬT',
      tagKey: 'theory',
      title: 'Xuất bản kiệt tác "Principia Mathematica"',
      desc: 'Newton công bố 3 định luật chuyển động và Định luật vạn vật hấp dẫn, hoàn thiện hệ thống Cơ học cổ điển.',
      context: 'Edmond Halley khuyến khích và tài trợ kinh phí để Newton hệ thống hóa các định luật chuyển động thiên thể.',
      experiment: 'Dùng giải tích hình học suy dẫn chính xác cả 3 định luật chuyển động hành tinh của Johannes Kepler.',
      legacy: 'Khung lý thuyết thống trị vật lý trong hơn 200 năm, làm nền tảng toán học cho cuộc Cách mạng Công nghiệp.',
      formula: 'F = d(mv)/dt = m · a'
    },
    {
      year: '1704+',
      era: 'DI SẢN',
      tagKey: 'legacy',
      title: 'Kỷ nguyên Khai Sáng & Kỹ thuật chính xác',
      desc: 'Cơ học Newton trở thành hệ quy chiếu cho toàn bộ khoa học tự nhiên, dẫn đến việc phát hiện sao Hải Vương qua toán học.',
      context: 'Cơ học chuyển từ tranh luận triết học sang công cụ dự đoán chính xác vị trí hành tinh, thủy triều và thiết kế máy móc cơ khí.',
      experiment: 'Urbain Le Verrier tính toán quỹ đạo sao Thiên Vương bị nhiễu loạn và dự đoán chính xác tọa độ của sao Hải Vương (1846).',
      legacy: 'Khẳng định sức mạnh dự đoán của toán học trong Vật lý học, kéo dài đến khi Thuyết Tương đối Einstein ra đời.',
      formula: 'T² / a³ = const'
    }
  ],

  // 4. DANH SÁCH NHÂN VẬT CHỦ CHỐT
  figures: [
    {
      name: 'Galileo Galilei',
      period: '1564 — 1642',
      initial: 'GG',
      role: 'Cha đẻ phương pháp thực nghiệm',
      text: 'Đặt nền móng cho cơ học chuyển động, người đầu tiên hướng kính thiên văn lên bầu trời và kiên định bảo vệ thuyết Nhật tâm.'
    },
    {
      name: 'Johannes Kepler',
      period: '1571 — 1630',
      initial: 'JK',
      role: 'Nhà toán học thiên văn',
      text: 'Đưa ra 3 định luật miêu tả quỹ đạo elip của các hành tinh, cung cấp dữ liệu hình học chính xác để Newton hoàn thiện định luật hấp dẫn.'
    },
    {
      name: 'Isaac Newton',
      period: '1643 — 1727',
      initial: 'IN',
      role: 'Nhà triết học tự nhiên & toán học',
      text: 'Thống nhất cơ học mặt đất và vũ trụ trong một hệ thống định luật nhất quán, viết nên cuốn "Principia" vĩ đại.'
    }
  ],

  // 5. TƯ LIỆU THAM KHẢO & NGUỒN GỐC
  sources: [
    {
      type: 'GIÁO TRÌNH',
      filterType: 'document',
      title: 'Lịch sử Vật lý học & Phương pháp luận',
      meta: 'NXB Giáo Dục Việt Nam',
      desc: 'Tài liệu chuẩn mực trình bày bối cảnh lịch sử, quá trình hình thành các định luật và cuộc đối thoại giữa các trường phái khoa học.',
      link: '#'
    },
    {
      type: 'CÔNG TRÌNH GỐC',
      filterType: 'official',
      title: 'Philosophiae Naturalis Principia Mathematica',
      meta: 'Isaac Newton · Royal Society London (1687)',
      desc: 'Bản in công bố các tiên đề chuyển động, định luật vạn vật hấp dẫn và hệ thống toán học giải tích hình học.',
      link: '#'
    },
    {
      type: 'BẢN THẢO GỐC',
      filterType: 'evidence',
      title: 'Sidereus Nuncius (Sứ giả các vì sao)',
      meta: 'Galileo Galilei · Venice (1610)',
      desc: 'Công trình ghi lại các quan sát thiên văn đầu tiên bằng kính viễn vọng kèm hình vẽ pha Mặt Trăng và vệ tinh Sao Mộc.',
      link: '#'
    },
    {
      type: 'KHO LƯU TRỮ SỐ',
      filterType: 'media',
      title: 'The Newton Project Archives',
      meta: 'University of Cambridge Digital Library',
      desc: 'Kho tư liệu số hóa toàn bộ nhật ký thí nghiệm, bản thảo viết tay và thư tín trao đổi của Isaac Newton.',
      link: '#'
    }
  ]
};

// ==========================================
// RENDER DỮ LIỆU BAN ĐẦU LÊN GIAO DIỆN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Gán thông tin Hero
  const heroTopic = document.getElementById('heroTopic');
  const heroPeriod = document.getElementById('heroPeriod');
  const heroFormula = document.getElementById('heroFormula');
  if (heroTopic) heroTopic.textContent = data.topic.title;
  if (heroPeriod) heroPeriod.textContent = data.topic.period;
  if (heroFormula) heroFormula.textContent = data.topic.formula;

  // Gán thông tin Metrics
  const metricSources = document.getElementById('metricSources');
  const metricMilestones = document.getElementById('metricMilestones');
  const metricFigures = document.getElementById('metricFigures');
  if (metricSources) metricSources.textContent = data.metrics.sources;
  if (metricMilestones) metricMilestones.textContent = data.metrics.milestones;
  if (metricFigures) metricFigures.textContent = data.metrics.figures;

  // ==========================================
  // MOBILE MENU
  // ==========================================
  const header = document.querySelector('.site-header');
  const menuBtn = document.getElementById('menuBtn');
  menuBtn?.addEventListener('click', () => {
    header?.classList.toggle('menu-open');
  });

  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      header?.classList.remove('menu-open');
    });
  });

  // ==========================================
  // TIMELINE RENDERING & EXPAND (READ-MORE)
  // ==========================================
  const timelineList = document.getElementById('timelineList');
  const filters = document.getElementById('filters');

  // Khởi tạo bộ lọc Tags
  const tagLabels = {
    'all': 'TẤT CẢ',
    'context': 'BỐI CẢNH',
    'question': 'CÂU HỎI',
    'evidence': 'THỰC NGHIỆM',
    'theory': 'ĐỊNH LUẬT',
    'legacy': 'DI SẢN'
  };

  const tagKeys = ['all', 'context', 'question', 'evidence', 'theory', 'legacy'];
  if (filters) {
    filters.innerHTML = '';
    tagKeys.forEach((key, index) => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn' + (index === 0 ? ' active' : '');
      btn.dataset.filter = key;
      btn.textContent = tagLabels[key] || key.toUpperCase();
      btn.addEventListener('click', () => {
        document.querySelectorAll('#filters .filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderTimeline(key);
      });
      filters.appendChild(btn);
    });
  }

  function renderTimeline(filterTag = 'all') {
    if (!timelineList) return;
    timelineList.innerHTML = '';

    const items = data.timeline.filter(item => {
      if (filterTag === 'all') return true;
      return item.tagKey === filterTag || (item.tags && item.tags.includes(filterTag));
    });

    items.forEach((item, index) => {
      const el = document.createElement('article');
      el.className = 'timeline-item' + (index === 0 ? ' active' : ''); // Mở mốc đầu tiên mặc định
      el.innerHTML = `
        <div class="timeline-date">
          <b>${item.year}</b>
          <span>${item.era}</span>
        </div>
        <div class="timeline-marker">
          <span>0${index + 1}</span>
        </div>
        <div class="timeline-content">
          <p class="tag">${item.era} · MỐC 0${index + 1}</p>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          
          <div class="timeline-actions">
            <button class="read-more" aria-label="Xem chi tiết hồ sơ">
              Xem hồ sơ chi tiết <span>↓</span>
            </button>
            <button class="open-modal-link" data-index="${index}">
              Xem toàn màn hình ↗
            </button>
          </div>

          <div class="case-file">
            <div>
              <b>01 / BỐI CẢNH & VẤN ĐỀ</b>
              <p>${item.context}</p>
            </div>
            <div>
              <b>02 / BẰNG CHỨNG & CÔNG THỨC</b>
              <p>${item.experiment}</p>
              ${item.formula ? `<div style="margin-top:6px; font-family:Georgia,serif; font-style:italic; color:var(--accent-2); font-size:14px;">${item.formula}</div>` : ''}
            </div>
            <div>
              <b>03 / HỆ QUẢ & DI SẢN</b>
              <p>${item.legacy}</p>
            </div>
          </div>
        </div>
      `;

      // Nút gập mở Accordion (Read-more)
      const readMoreBtn = el.querySelector('.read-more');
      readMoreBtn?.addEventListener('click', () => {
        el.classList.toggle('active');
      });

      // Nút mở Modal
      const modalBtn = el.querySelector('.open-modal-link');
      modalBtn?.addEventListener('click', () => {
        openModal(item);
      });

      timelineList.appendChild(el);
    });
  }

  renderTimeline('all');

  // ==========================================
  // RENDER DANH SÁCH NHÂN VẬT (FIGURES)
  // ==========================================
  const figuresGrid = document.getElementById('figuresGrid');
  if (figuresGrid) {
    figuresGrid.innerHTML = data.figures.map((fig, idx) => `
      <article class="figure-card">
        <div class="figure-top">
          <span class="source-type">NHÂN VẬT 0${idx + 1}</span>
          <div class="figure-badge">${fig.initial}</div>
        </div>
        <h3>${fig.name}</h3>
        <p style="color:var(--accent-2); font-size:12px; margin-bottom:8px; font-weight:600;">${fig.role}</p>
        <p>${fig.text}</p>
        <div class="source-meta">GIAI ĐOẠN: ${fig.period}</div>
      </article>
    `).join('');
  }

  // ==========================================
  // RENDER DANH SÁCH NGUỒN TƯ LIỆU (SOURCES)
  // ==========================================
  const sourceList = document.getElementById('sourceList');
  const sourceFilterBtn = document.getElementById('sourceFilter');

  function renderSources(type = 'all') {
    if (!sourceList) return;
    const filtered = data.sources.filter(s => type === 'all' || s.filterType === type);
    sourceList.innerHTML = filtered.map(s => `
      <article class="source-card" data-type="${s.filterType}">
        <div class="source-top">
          <span class="source-type">${s.type}</span>
          <a href="${s.link}" aria-label="Mở nguồn" style="color:var(--accent); font-size:14px;">↗</a>
        </div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <div class="source-meta">${s.meta}</div>
      </article>
    `).join('');
  }

  renderSources('all');

  // Lọc xoay vòng nguồn
  let currentSourceType = 'all';
  const sourceTypes = ['all', 'official', 'evidence', 'media', 'document'];
  const sourceTypeLabels = {
    'all': 'Tất cả nguồn ▾',
    'official': 'Công trình gốc ▾',
    'evidence': 'Bản thảo ▾',
    'media': 'Lưu trữ số ▾',
    'document': 'Giáo trình ▾'
  };

  sourceFilterBtn?.addEventListener('click', () => {
    const nextIdx = (sourceTypes.indexOf(currentSourceType) + 1) % sourceTypes.length;
    currentSourceType = sourceTypes[nextIdx];
    sourceFilterBtn.textContent = sourceTypeLabels[currentSourceType] || 'Tất cả nguồn ▾';
    sourceFilterBtn.classList.toggle('active', currentSourceType !== 'all');
    renderSources(currentSourceType);
  });

  // ==========================================
  // MODAL CHI TIẾT
  // ==========================================
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modalContent');
  const modalTag = document.getElementById('modalTag');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrop = document.getElementById('modalBackdrop');

  function openModal(item) {
    if (!modal || !modalContent) return;
    if (modalTag) modalTag.textContent = `HỒ SƠ MỐC NĂM ${item.year} · ${item.era}`;
    modalContent.innerHTML = `
      <h2>${item.title}</h2>
      ${item.formula ? `<div class="modal-formula-box">${item.formula}</div>` : ''}
      <div style="margin-bottom:18px;">
        <strong style="color:var(--accent); font-size:11px; letter-spacing:0.12em; text-transform:uppercase;">Bối cảnh & Vấn đề:</strong>
        <p style="margin-top:6px;">${item.context}</p>
      </div>
      <div style="margin-bottom:18px;">
        <strong style="color:var(--accent); font-size:11px; letter-spacing:0.12em; text-transform:uppercase;">Thực nghiệm & Khám phá:</strong>
        <p style="margin-top:6px;">${item.experiment}</p>
      </div>
      <div>
        <strong style="color:var(--accent); font-size:11px; letter-spacing:0.12em; text-transform:uppercase;">Di sản khoa học:</strong>
        <p style="margin-top:6px;">${item.legacy}</p>
      </div>
    `;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal?.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalClose?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // ==========================================
  // CHẾ ĐỘ TRÌNH CHIẾU (PRESENTATION MODE)
  // ==========================================
  function togglePresentation() {
    const isPresent = document.body.classList.toggle('presentation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const presentBtn = document.getElementById('presentBtn');
    if (presentBtn) {
      presentBtn.textContent = isPresent ? 'THOÁT TRÌNH CHIẾU ✕' : 'TRÌNH CHIẾU ↗';
      presentBtn.classList.toggle('btn-primary', isPresent);
      presentBtn.classList.toggle('btn-ghost', !isPresent);
    }
  }

  document.getElementById('presentBtn')?.addEventListener('click', togglePresentation);
  document.getElementById('heroPresentBtn')?.addEventListener('click', togglePresentation);
  document.getElementById('closingPresentBtn')?.addEventListener('click', togglePresentation);
});
