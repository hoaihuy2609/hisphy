/**
 * HISTORY OF PHYSICS — DIGITAL CASEFILE
 * Dữ liệu & Logic tương tác cho bài thuyết trình
 */

const data = {
  // 1. THÔNG TIN CHỦ ĐỀ CHÍNH
  topic: {
    title: 'Cách mạng Cơ học: Từ Galileo đến Isaac Newton',
    period: 'THẾ KỶ XVII (1609 — 1687)',
    formula: '$F = m \\cdot a$'
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
      formula: '$v = g \\cdot t$'
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
      formula: '$$s = \\frac{1}{2} g t^2$$'
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
      formula: '$$F_g = G \\frac{m_1 m_2}{r^2}$$'
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
      formula: '$$F = \\frac{d(mv)}{dt} = m \\cdot a$$'
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
      formula: '$$\\frac{T^2}{a^3} = \\text{const}$$'
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
// RENDER CÔNG THỨC TOÁN LATEX VỚI KATEX (CHUẨN MIKTEX)
// ==========================================
function renderMath(target = document.body) {
  if (window.renderMathInElement) {
    try {
      window.renderMathInElement(target, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false
      });
    } catch (err) {
      console.warn('KaTeX render error:', err);
    }
  }
}

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
  if (heroFormula) {
    heroFormula.innerHTML = data.topic.formula;
    renderMath(heroFormula);
  }

  // Tự động kích hoạt KaTeX khi thư viện tải xong
  window.addEventListener('load', () => renderMath(document.body));
  setTimeout(() => renderMath(document.body), 200);

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

    renderMath(timelineList);
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
    renderMath(modalContent);
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
  // CHẾ ĐỘ TRÌNH CHIẾU SLIDE TOÀN MÀN HÌNH (CÁCH 2)
  // ==========================================
  const deck = document.getElementById('presentationDeck');
  const deckStage = document.getElementById('deckStage');
  const deckSlideIndicator = document.getElementById('deckSlideIndicator');
  const deckProgressBar = document.getElementById('deckProgressBar');
  const deckTimerDisplay = document.getElementById('deckTimerDisplay');
  const deckTimerBox = document.getElementById('deckTimerBox');
  const deckPrevBtn = document.getElementById('deckPrevBtn');
  const deckNextBtn = document.getElementById('deckNextBtn');
  const deckCloseBtn = document.getElementById('deckCloseBtn');
  const deckFullscreenBtn = document.getElementById('deckFullscreenBtn');
  const deckNotesBtn = document.getElementById('deckNotesBtn');
  const deckSpeakerNotes = document.getElementById('deckSpeakerNotes');
  const deckNotesContent = document.getElementById('deckNotesContent');
  const notesCloseBtn = document.getElementById('notesCloseBtn');

  // Danh sách các Slides
  const slides = [
    // Slide 1: Bìa
    {
      type: 'cover',
      title: data.topic.title,
      period: data.topic.period,
      formula: data.topic.formula,
      notes: 'Gợi ý mở đầu: Giới thiệu đề tài ngắn gọn, nhấn mạnh góc nhìn "hồ sơ điều tra khoa học" — con người đặt câu hỏi, làm thí nghiệm và lật đổ các quan niệm sai lầm cũ.'
    },
    // Slide 2: 4 Nguyên tắc
    {
      type: 'principles',
      notes: 'Gợi ý: Nhấn mạnh 4 nguyên tắc phương pháp luận: Không dựa vào uy quyền của quá khứ, mọi lý thuyết bắt buộc phải kiểm chứng qua thực nghiệm và công thức định lượng.'
    },
    // Slide 3: Tổng quan số liệu
    {
      type: 'metrics',
      notes: 'Gợi ý: Trình bày quy mô của hồ sơ — 04 tài liệu gốc đáng tin cậy, 05 mốc bước ngoặt lịch sử và 03 nhà khoa học vĩ đại nhất thế kỷ XVII.'
    },
    // Slides 4 - 8: 5 Mốc lịch sử từ data.timeline
    ...data.timeline.map((item, idx) => ({
      type: 'milestone',
      index: idx + 1,
      total: data.timeline.length,
      ...item,
      notes: `Mốc năm ${item.year} (${item.era}): Trình bày bối cảnh vấn đề, thí nghiệm then chốt (${item.formula || 'thực nghiệm'}) và ý nghĩa lịch sử mà phát hiện này để lại.`
    })),
    // Slide 9: Nhân vật
    {
      type: 'figures',
      notes: 'Gợi ý: Nhấn mạnh tính kế thừa của khoa học — Galileo tạo ra phương pháp, Kepler cung cấp dữ liệu hình học, và Newton hoàn thiện thành định luật phổ quát.'
    },
    // Slide 10: Lời kết
    {
      type: 'closing',
      notes: 'Gợi ý kết thúc: Khẳng định khoa học là một dòng chảy không ngừng nghỉ. Mở lời cảm ơn và mời thầy cô cùng các bạn đặt câu hỏi thảo luận.'
    }
  ];

  let currentSlideIndex = 0;
  let timerInterval = null;
  let elapsedSeconds = 0;
  let isTimerRunning = false;

  // Format thời gian MM:SS
  function formatTime(totalSec) {
    const mins = Math.floor(totalSec / 60).toString().padStart(2, '0');
    const secs = (totalSec % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }

  function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    isTimerRunning = true;
    timerInterval = setInterval(() => {
      elapsedSeconds++;
      if (deckTimerDisplay) deckTimerDisplay.textContent = formatTime(elapsedSeconds);
    }, 1000);
  }

  function toggleTimer() {
    if (isTimerRunning) {
      clearInterval(timerInterval);
      isTimerRunning = false;
      if (deckTimerBox) deckTimerBox.style.opacity = '0.5';
    } else {
      startTimer();
      if (deckTimerBox) deckTimerBox.style.opacity = '1';
    }
  }

  // Render Slide theo index
  function renderSlide(idx) {
    if (!deckStage || idx < 0 || idx >= slides.length) return;
    currentSlideIndex = idx;
    const slide = slides[idx];

    // Cập nhật chỉ số và thanh progress
    if (deckSlideIndicator) {
      deckSlideIndicator.textContent = `SLIDE ${(idx + 1).toString().padStart(2, '0')} / ${slides.length.toString().padStart(2, '0')}`;
    }
    if (deckProgressBar) {
      deckProgressBar.style.width = `${((idx + 1) / slides.length) * 100}%`;
    }

    // Cập nhật ghi chú diễn giả
    if (deckNotesContent) {
      deckNotesContent.innerHTML = `<p>${slide.notes || 'Không có ghi chú cho slide này.'}</p>`;
    }

    // Cập nhật trạng thái nút Trước / Sau
    if (deckPrevBtn) deckPrevBtn.disabled = (idx === 0);
    if (deckNextBtn) deckNextBtn.textContent = (idx === slides.length - 1) ? 'KẾT THÚC ✕' : 'Tiếp theo →';

    let html = '';

    if (slide.type === 'cover') {
      html = `
        <div class="deck-slide deck-slide-cover">
          <div>
            <p class="eyebrow" style="color:var(--accent);">PHYSICS CASEFILE · THUYẾT TRÌNH</p>
            <h1>Khoa học cần<br /><em>minh chứng.</em></h1>
            <p class="hero-lead" style="font-size:18px; margin:16px 0 24px; color:#bdb6aa;">
              Một hồ sơ học thuật công khai để trình bày các bước ngoặt Vật lý theo dòng thời gian:
              <br><strong style="color:var(--text);">bối cảnh → câu hỏi → thực nghiệm → định luật → di sản.</strong>
            </p>
            <div class="trust-line" style="margin-top:20px;">
              <span class="dot"></span>
              <span>${slide.title} · ${slide.period}</span>
            </div>
          </div>
          <div class="hero-card" style="box-shadow:none;">
            <div class="portrait-placeholder" style="aspect-ratio:1/1;">
              <div class="portrait-grid"></div>
              <div class="orbit-ring orbit-ring-1"></div>
              <div class="orbit-ring orbit-ring-2"></div>
              <div class="formula-stamp">${slide.formula}</div>
              <span>CASE<br />001</span>
            </div>
          </div>
        </div>
      `;
    } else if (slide.type === 'principles') {
      html = `
        <div class="deck-slide">
          <div class="deck-slide-box">
            <div class="deck-slide-header">
              <p class="eyebrow">01 / PHƯƠNG PHÁP LUẬN</p>
              <h2>Lý thuyết phải vững.<br /><em>Thí nghiệm phải tái lập được.</em></h2>
            </div>
            <div class="deck-grid-4">
              <div class="deck-card">
                <span class="card-number">01</span>
                <h3>Tách dữ kiện khỏi giả thuyết</h3>
                <p>Mỗi mốc ghi rõ quan sát tự nhiên đã chứng minh, giới hạn của mô hình cũ và câu hỏi mới nảy sinh.</p>
              </div>
              <div class="deck-card">
                <span class="card-number">02</span>
                <h3>Một tiêu chuẩn cho mọi quan sát</h3>
                <p>Cùng một câu hỏi kiểm chứng và quy chuẩn toán học được áp dụng chặt chẽ cho mọi giả thuyết.</p>
              </div>
              <div class="deck-card">
                <span class="card-number">03</span>
                <h3>Bằng chứng phải đo đạc được</h3>
                <p>Ưu tiên thiết bị thực nghiệm, phép đo định lượng, bản thảo gốc và công cụ quan sát trực tiếp.</p>
              </div>
              <div class="deck-card" style="background:linear-gradient(135deg,rgba(239,184,106,0.1),#110f0c); border-color:#4a3e31;">
                <span class="card-number">04</span>
                <h3>Định luật mở đường tương lai</h3>
                <p>Một phát hiện vĩ đại không khép lại tri thức mà mở ra những nhánh nghiên cứu và công nghệ mới.</p>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (slide.type === 'metrics') {
      html = `
        <div class="deck-slide">
          <div class="deck-slide-box" style="padding:60px 50px;">
            <p class="eyebrow">02 / TỔNG QUAN TƯ LIỆU</p>
            <h2 style="font-size:46px; margin:14px 0 36px;">Đừng chỉ nói <em>“tin tôi đi”.</em></h2>
            <div class="evidence-metrics" style="gap:60px; margin-bottom:40px;">
              <div><strong style="font-size:56px;">${data.metrics.sources}</strong><span style="font-size:12px;">Tài liệu tham khảo gốc</span></div>
              <div><strong style="font-size:56px;">${data.metrics.milestones}</strong><span style="font-size:12px;">Mốc bước ngoặt lịch sử</span></div>
              <div><strong style="font-size:56px;">${data.metrics.figures}</strong><span style="font-size:12px;">Nhân vật then chốt</span></div>
            </div>
            <p style="color:var(--muted); font-size:15px; line-height:1.7; max-width:720px; margin:0;">
              Toàn bộ bài thuyết trình được đối soát và xây dựng dựa trên các công trình gốc (Principia, Sidereus Nuncius), các bản thảo lưu trữ Cambridge và giáo trình Lịch sử Vật lý chuẩn mực.
            </p>
          </div>
        </div>
      `;
    } else if (slide.type === 'milestone') {
      html = `
        <div class="deck-slide">
          <div class="deck-slide-box">
            <div class="deck-milestone-header">
              <div class="deck-milestone-year">${slide.year}</div>
              <div class="deck-milestone-title-group">
                <span class="deck-col-tag">${slide.era} · MỐC ${slide.index.toString().padStart(2, '0')} / ${slide.total.toString().padStart(2, '0')}</span>
                <h2>${slide.title}</h2>
              </div>
            </div>
            <p style="color:#bdb6aa; font-size:15px; margin:0 0 24px; line-height:1.65;">${slide.desc}</p>
            
            <div class="deck-milestone-grid">
              <div class="deck-milestone-col">
                <span class="deck-col-tag">01 / BỐI CẢNH & VẤN ĐỀ</span>
                <p>${slide.context}</p>
              </div>
              <div class="deck-milestone-col" style="border-color:#554839; background:#14110e;">
                <span class="deck-col-tag">02 / BẰNG CHỨNG & CÔNG THỨC</span>
                <p>${slide.experiment}</p>
                ${slide.formula ? `<div class="deck-formula-pill">${slide.formula}</div>` : ''}
              </div>
              <div class="deck-milestone-col">
                <span class="deck-col-tag">03 / HỆ QUẢ & DI SẢN</span>
                <p>${slide.legacy}</p>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (slide.type === 'figures') {
      html = `
        <div class="deck-slide">
          <div class="deck-slide-box">
            <div class="deck-slide-header">
              <p class="eyebrow">04 / NHÂN VẬT THỜI ĐẠI</p>
              <h2>Những khối óc <em>thay đổi thời đại.</em></h2>
            </div>
            <div class="deck-figures-grid">
              ${data.figures.map((fig, i) => `
                <div class="deck-card" style="display:flex; flex-direction:column;">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
                    <span class="source-type">NHÂN VẬT 0${i + 1}</span>
                    <div class="figure-badge">${fig.initial}</div>
                  </div>
                  <h3 style="font-size:22px; margin:0 0 6px;">${fig.name}</h3>
                  <div style="color:var(--accent-2); font-size:12px; font-weight:600; margin-bottom:12px;">${fig.role}</div>
                  <p style="font-size:13px; line-height:1.65;">${fig.text}</p>
                  <div class="source-meta" style="margin-top:auto; padding-top:16px;">GIAI ĐOẠN: ${fig.period}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    } else if (slide.type === 'closing') {
      html = `
        <div class="deck-slide">
          <div class="deck-slide-box" style="text-align:center; padding:70px 40px;">
            <p class="eyebrow">05 / LỜI KẾT</p>
            <h2 style="font-size: clamp(38px, 5vw, 64px); margin:16px 0 20px;">
              Khoa học không dừng lại.<br /><em>Nó là sự tiếp nối.</em>
            </h2>
            <p style="max-width:640px; margin:0 auto 30px; font-size:16px; color:#bdb6aa; line-height:1.7;">
              “Nếu tôi nhìn xa hơn những người khác, đó là vì tôi đứng trên vai những người khổng lồ.”
              <br><span style="font-size:13px; color:var(--accent); font-weight:700;">— Isaac Newton (Thư gửi Robert Hooke, 1675)</span>
            </p>
            <div style="display:inline-flex; gap:14px;">
              <button class="btn btn-primary" id="deckRestartBtn" style="padding:12px 24px;">Trở về đầu slide ↺</button>
              <button class="btn btn-ghost" id="deckExitClosingBtn" style="padding:12px 24px;">Thoát trình chiếu ✕</button>
            </div>
          </div>
        </div>
      `;
    }

    deckStage.innerHTML = html;
    renderMath(deckStage);

    // Gán nút Restart / Exit trong slide kết thúc
    document.getElementById('deckRestartBtn')?.addEventListener('click', () => renderSlide(0));
    document.getElementById('deckExitClosingBtn')?.addEventListener('click', closeDeck);
  }

  function nextSlide() {
    if (currentSlideIndex < slides.length - 1) {
      renderSlide(currentSlideIndex + 1);
    } else {
      closeDeck();
    }
  }

  function prevSlide() {
    if (currentSlideIndex > 0) {
      renderSlide(currentSlideIndex - 1);
    }
  }

  function openDeck(startIdx = 0) {
    if (!deck) return;
    deck.classList.remove('deck-hidden');
    document.body.style.overflow = 'hidden';
    
    // Tự động bật đồng hồ nếu chưa chạy
    if (!isTimerRunning) {
      startTimer();
    }

    // Thử yêu cầu Fullscreen
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    }

    renderSlide(startIdx);
  }

  function closeDeck() {
    if (!deck) return;
    deck.classList.add('deck-hidden');
    document.body.style.overflow = '';
    
    // Thoát fullscreen nếu đang bật
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }

    // Đóng drawer notes
    deckSpeakerNotes?.classList.remove('open');
    deckNotesBtn?.classList.remove('active');
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        if (deckFullscreenBtn) deckFullscreenBtn.innerHTML = '<span>⛶ Thu nhỏ [F]</span>';
      }).catch(() => {});
    } else {
      document.exitFullscreen().then(() => {
        if (deckFullscreenBtn) deckFullscreenBtn.innerHTML = '<span>⛶ Toàn màn hình [F]</span>';
      }).catch(() => {});
    }
  }

  function toggleNotes() {
    if (!deckSpeakerNotes) return;
    const isOpen = deckSpeakerNotes.classList.toggle('open');
    deckNotesBtn?.classList.toggle('active', isOpen);
  }

  // Lắng nghe phím bấm toàn cục khi trình chiếu
  document.addEventListener('keydown', e => {
    // Nếu deck đang ẩn thì không can thiệp phím
    if (!deck || deck.classList.contains('deck-hidden')) return;

    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter' || e.key === 'PageDown') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'Backspace' || e.key === 'PageUp') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closeDeck();
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      toggleFullscreen();
    } else if (e.key === 's' || e.key === 'S') {
      e.preventDefault();
      toggleNotes();
    }
  });

  // Gán sự kiện cho các nút điều khiển Deck
  deckNextBtn?.addEventListener('click', nextSlide);
  deckPrevBtn?.addEventListener('click', prevSlide);
  deckCloseBtn?.addEventListener('click', closeDeck);
  deckFullscreenBtn?.addEventListener('click', toggleFullscreen);
  deckNotesBtn?.addEventListener('click', toggleNotes);
  notesCloseBtn?.addEventListener('click', toggleNotes);
  deckTimerBox?.addEventListener('click', toggleTimer);

  // Mở deck từ các nút TRÌNH CHIẾU trên trang web
  document.getElementById('presentBtn')?.addEventListener('click', () => openDeck(0));
  document.getElementById('heroPresentBtn')?.addEventListener('click', () => openDeck(0));
  document.getElementById('closingPresentBtn')?.addEventListener('click', () => openDeck(0));
});

