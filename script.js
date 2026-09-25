/**
 * HISTORY OF PHYSICS — DIGITAL CASEFILE
 * Dữ liệu & Logic tương tác cho bài thuyết trình
 */

const data = {
  // 1. THÔNG TIN CHỦ ĐỀ CHÍNH (MỤC 5.1)
  topic: {
    title: '5.1. Cơ học thế kỉ XVIII',
    period: 'THẾ KỈ XVIII (1687 — 1788)',
    formula: '$$L = T - V$$'
  },

  // 2. SỐ LIỆU TÓM TẮT BAN ĐẦU
  metrics: {
    sources: '04',
    milestones: '07',
    figures: '06'
  },

  // 3. CÁC MỐC DÒNG THỜI GIAN THEO ĐÚNG TÀI LIỆU
  timeline: [
    {
      year: 'Cuối XVII',
      era: '5.1.1.1 · ĐẤU TRANH TƯ TƯỞNG',
      tagKey: 'context',
      title: 'Khởi đầu cuộc đấu tranh tư tưởng Newton - Descartes',
      desc: 'Tư tưởng của Newton lan sang lục địa châu Âu, làm bùng nổ cuộc đối đầu gay gắt giữa hai trường phái Newton và Descartes do nhiều lý thuyết dẫn đến kết luận trái ngược nhau.',
      context: 'Cuộc cách mạng khoa học đã loại trừ ảnh hưởng của tư tưởng Aristote và vai trò thống trị của tôn giáo. Xã hội châu Âu chuyển biến từ phong kiến sang tư bản, các nhà khai sáng và duy vật Pháp đặt nền móng tư tưởng cho cách mạng tư sản.',
      experiment: 'Voltaire đúc kết: Phái Descartes (Paris) cho rằng thế giới chứa đầy vật chất và Trái Đất dài ra ở hai cực (như quả trứng). Phái Newton (London) khẳng định thế giới là chân không và Trái Đất bị nén lại ở hai cực (như quả cam dẹt).',
      legacy: 'Mở màn cho cuộc đối đầu học thuật lớn nhất thế kỉ XVIII giữa quan niệm môi trường liên tục (ete) và quan niệm môi trường gián đoạn & chân không.',
      formula: '$$F = G \\frac{m_1 m_2}{r^2}$$'
    },
    {
      year: '1684 — 1759',
      era: '5.1.1.2 · THỰC NGHIỆM LỊCH SỬ',
      tagKey: 'evidence',
      title: 'Thực nghiệm chứng minh lịch sử – Sự kiện Sao chổi Halley',
      desc: 'Edmond Halley tính toán quỹ đạo sao chổi chu kỳ 76 năm; bộ ba Clairaut, Lalande và Lepaute tính toán nhiễu loạn hấp dẫn, chứng minh rực rỡ định luật Newton.',
      context: 'Đầu năm 1684, Halley thảo luận cùng Robert Hooke và Christopher Wren về bài toán quỹ đạo dưới lực tỉ lệ nghịch bình phương khoảng cách nhưng chưa có lời giải thỏa đáng (Kepler khi đó chỉ mô tả hình học quỹ đạo, chứ chưa lý giải được nguyên nhân động lực học). Tháng 8/1684, Halley tìm đến Newton tại Cambridge, dẫn đến tiểu luận De Motu rồi mở rộng thành Principia (1687).',
      experiment: 'Halley nghiên cứu 24 sao chổi (1337–1698), nhận thấy sao chổi 1531, 1607, 1682 là một và dự báo quay lại cuối 1758 / đầu 1759. Nhóm toán học Pháp (ông Clairaut, ông Lalande và bà Lepaute) tính toán lại có thêm nhiễu loạn từ Sao Mộc và Sao Thổ suốt nửa năm. Ngày 13/03/1759, sao chổi đi qua điểm cận nhật đúng như tính toán với sai số chỉ khoảng 1/1000 so với tổng chu kỳ.',
      legacy: 'Khẳng định sự chính xác và tối ưu của định luật vạn vật hấp dẫn, vinh danh thiên thể mang tên Sao chổi Halley, chứng minh việc kết hợp giải tích và hình học mang lại hiệu quả rất cao.',
      formula: '$$T \\approx 76\\text{ năm}$$'
    },
    {
      year: 'Giữa XVIII',
      era: '5.1.1.3 · THẤT BẠI CỦA ETE',
      tagKey: 'evidence',
      title: 'Sự thất bại của Thuyết xoáy ete',
      desc: 'Thuyết xoáy ete của Descartes bộc lộ sự mâu thuẫn, thiếu đồng bộ và mất tính tổng quát; cơ học Newton với tính nhất quán và định lượng toán học chính xác đã toàn thắng.',
      context: 'Phái Descartes (môi trường liên tục) bác bỏ chân không, cho rằng không gian bị lấp đầy 100% bởi chất lỏng ete (chất lỏng vô hình phủ kín vũ trụ, xoáy tròn quanh các vật để truyền tương tác). Phái Newton khẳng định không gian và vật chất tách biệt, vũ trụ chủ yếu là chân không, các vật tự hút nhau bằng lực hấp dẫn.',
      experiment: 'Phái Descartes phải liên tục đưa ra nhiều mô hình ete khác nhau cho từng hiện tượng cụ thể dẫn đến thiếu đồng bộ, mâu thuẫn lẫn nhau và mất tính tổng quát. Phái Newton tỏ ra vượt trội nhờ tính nhất quán và khả năng định lượng bằng toán học cực kỳ chính xác.',
      legacy: 'Triết gia Voltaire châm biếm rằng các tác phẩm của Descartes chẳng khác nào một cuốn “tiểu thuyết siêu hình”. Đến giữa thế kỉ XVIII, đại bộ phận các nhà vật lý công nhận thuyết Newton, đánh dấu sự thắng thế hoàn toàn.',
      formula: '$$\\text{Chân không} \\gg \\text{Vật chất}$$'
    },
    {
      year: 'Thế kỉ XVIII',
      era: '5.1.1.4 · LAN TỎA TOÀN DIỆN',
      tagKey: 'theory',
      title: 'Cơ học Newton thâm nhập vào các lĩnh vực vật lý khác',
      desc: 'Giới khoa học nhìn nhận mọi hiện tượng vật lý đều là kết quả chuyển động của vật chất dưới tác dụng của lực, hình thành các khái niệm mới mang tính cơ học.',
      context: 'Sau chiến thắng trước phái Descartes, tư tưởng và phương pháp luận của Newton bắt đầu lan rộng và thâm nhập vào toàn bộ nền vật lý học.',
      experiment: 'Xuất hiện các khái niệm mang tính cơ học như “lực điện”, “lực từ”, “chất nhiệt”, “vật điện”, “vật từ”... Áp dụng mô hình cơ học để giải thích từ chuyển động thiên thể đến các hiện tượng tự nhiên vi mô và vĩ mô.',
      legacy: 'Các phương pháp luận và mô hình toán học của cơ học Newton chính thức trở thành công cụ nền tảng cho nhiều lĩnh vực vật lý học khác.',
      formula: '$$\\vec{F} = m \\vec{a}$$'
    },
    {
      year: '1687 — XVIII',
      era: '5.1.2.1 · HẠN CHẾ HÌNH HỌC',
      tagKey: 'question',
      title: 'Hạn chế trong phương pháp chứng minh hình học của Newton',
      desc: 'Newton sáng lập vi - tích phân nhưng trong Nguyên lý (1687) lại dùng hình học cổ điển, khiến các diễn giải trở nên phức tạp, gượng ép và thiếu tính hệ thống.',
      context: 'Newton lo ngại phương pháp vi - tích phân mới sẽ khiến độc giả đương thời khó tiếp thu, nhưng lựa chọn hình học cổ điển khiến việc giải các bài toán phức tạp trở nên nặng nề và khó mở rộng.',
      experiment: 'Các nhà toán học thế kỉ XVIII nhận thấy các phép chứng minh hình học mang tính riêng lẻ, giải quyết được bài toán này nhưng lại rất khó áp dụng khi bài toán chỉ thay đổi đôi chút.',
      legacy: 'Đặt ra nhiệm vụ lịch sử kéo dài suốt một thế kỉ: chuyển đổi toàn bộ công trình của Newton sang ngôn ngữ giải tích, mở đầu bởi Leonhard Euler (1736) và hoàn thiện bởi Joseph-Louis Lagrange (1788).',
      formula: '$$\\text{Hình học cổ điển} \\longrightarrow \\text{Giải tích vi - tích phân}$$'
    },
    {
      year: '1736 — 1760s',
      era: '5.1.2.2 · BƯỚC NGOẶT EULER',
      tagKey: 'theory',
      title: 'Đóng góp của Leonhard Euler: Chuyển từ hình học sang giải tích',
      desc: 'Leonhard Euler tiên phong áp dụng vi - tích phân vào cơ học với tác phẩm Mechanica (1736) tại Saint Petersburg, mở ra con đường giải tích thanh thoát.',
      context: 'Euler (1707–1783), nhà toán học, vật lý học Thụy Sĩ đại tài. Ông nhận thấy hạn chế của phép chứng minh hình học riêng lẻ và đi tìm lời giải mang tính tổng quát bằng giải tích.',
      experiment: 'Năm 1736, Euler xuất bản cuốn Mechanica (Cơ học, hay khoa học về chuyển động được trình bày bằng giải tích) tại Saint Petersburg. Ông tổng hợp nghiên cứu để trình bày lại toàn bộ hệ thống cơ học nhất quán, logic và dễ tiếp cận.',
      legacy: 'Diễn ra song hành với Cách mạng Công nghiệp lần thứ nhất (Anh, từ 1760s) đòi hỏi nghiên cứu chuyển động phức tạp (thẳng, tròn, quay, tuần hoàn, dao động, chất lưu...) phục vụ động cơ hơi nước James Watt và máy móc công nghiệp nặng.',
      formula: '$$m \\frac{d^2 x}{dt^2} = F_x$$'
    },
    {
      year: '1788',
      era: '5.1.2.3 · ĐỈNH CAO LAGRANGE',
      tagKey: 'legacy',
      title: 'Sự hoàn thiện của Joseph Louis Lagrange: Xây dựng Cơ học giải tích tổng quát',
      desc: 'Lagrange xuất bản kiệt tác Mécanique analytique (1788), đưa vào “tọa độ suy rộng” và “bậc tự do”, loại bỏ hoàn toàn yếu tố hình học, đưa cơ học lên đỉnh cao hoàn chỉnh.',
      context: 'Joseph Louis Lagrange (1736–1813), nhà toán học, thiên văn học Ý - Pháp kiệt xuất. Đứng trước thách thức kỹ thuật của Cách mạng Công nghiệp, ông tự đề ra nhiệm vụ xây dựng hệ thống giải tích tổng quát hoàn chỉnh cho mọi hệ cơ học.',
      experiment: 'Cuốn Cơ học giải tích chia 2 phần: Tĩnh học (dựa trên nguyên lý vận tốc ảo / dịch chuyển khả dĩ) và Động lực học. Đưa vào biến số mới là “tọa độ suy rộng” gắn với “bậc tự do” của hệ, tối ưu và giảm thiểu tối đa các phép tính phức tạp.',
      legacy: 'Loại bỏ hoàn toàn các yếu tố hình học, không cần dựng hình hay lập luận không gian, biến cơ học thành một nhánh thuần túy của giải tích học. Đỉnh cao hoàn chỉnh của cơ học cổ điển.',
      formula: '$$\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{q}_i}\\right) - \\frac{\\partial L}{\\partial q_i} = 0$$'
    }
  ],

  // 4. DANH SÁCH NHÂN VẬT (TRÍCH TRỰC TIẾP TỪ FILE)
  figures: [
    {
      name: 'Isaac Newton',
      period: '1643 — 1727',
      initial: 'IN',
      role: 'Tác giả cuốn Principia (1687)',
      text: 'Đặt nền móng cơ học cổ điển bằng 3 định luật chuyển động và luật vạn vật hấp dẫn bằng công cụ hình học cổ điển, trả lời bài toán quỹ đạo elip cho Halley.'
    },
    {
      name: 'René Descartes',
      period: '1596 — 1650',
      initial: 'RD',
      role: 'Khởi xướng Thuyết xoáy ete (Phái Paris)',
      text: 'Đại diện trường phái Pháp cho rằng vũ trụ chứa đầy chất lỏng ete và Trái Đất dài ra ở hai cực, tạo nên cuộc tranh biện học thuật lớn nhất thế kỉ XVIII.'
    },
    {
      name: 'Edmond Halley',
      period: '1656 — 1742',
      initial: 'EH',
      role: 'Nhà khoa học Anh tài năng',
      text: 'Khởi xướng bài toán 1684 thúc đẩy Newton viết Principia; nghiên cứu 24 sao chổi và tiên tri chính xác sự trở lại của Sao chổi Halley vào 1758/1759.'
    },
    {
      name: 'Voltaire',
      period: '1694 — 1778',
      initial: 'VT',
      role: 'Triết gia thời Khai Sáng Pháp',
      text: 'Đúc kết sự đối lập gay gắt giữa phái Descartes (Paris) và phái Newton (London), châm biếm lý thuyết xoáy ete của Descartes như cuốn “tiểu thuyết siêu hình”.'
    },
    {
      name: 'Leonhard Euler',
      period: '1707 — 1783',
      initial: 'LE',
      role: 'Nhà toán học, vật lý học Thụy Sĩ đại tài',
      text: 'Tác giả cuốn Mechanica (1736), tiên phong chuyển đổi cơ học từ hình học cổ điển sang ngôn ngữ vi - tích phân giải tích gọn gàng và thanh thoát.'
    },
    {
      name: 'Joseph Louis Lagrange',
      period: '1736 — 1813',
      initial: 'JL',
      role: 'Nhà toán học kiệt xuất Ý - Pháp',
      text: 'Tác giả kiệt tác Cơ học giải tích (1788), đưa vào “tọa độ suy rộng” và “bậc tự do”, loại bỏ hoàn toàn hình vẽ, đưa cơ học lên đỉnh cao hoàn chỉnh.'
    }
  ],

  // 5. CÁC TÁC PHẨM KHOA HỌC XUẤT HIỆN TRONG FILE
  sources: [
    {
      type: 'TÁC PHẨM KINH ĐIỂN',
      filterType: 'official',
      title: 'Principia (Nguyên lý, 1687)',
      meta: 'Isaac Newton · Luân Đôn',
      desc: 'Công trình đặt nền móng cho cơ học cổ điển, dùng phương pháp hình học kết hợp định luật vạn vật hấp dẫn tính thành công quỹ đạo sao chổi 1680.',
      link: '#'
    },
    {
      type: 'CHUYÊN KHẢO GIẢI TÍCH',
      filterType: 'official',
      title: 'Mechanica (Cơ học giải tích, 1736)',
      meta: 'Leonhard Euler · Saint Petersburg',
      desc: 'Khoa học về chuyển động được trình bày hoàn toàn bằng phương pháp giải tích vi - tích phân, mở đầu cuộc chuyển đổi từ hình học sang giải tích.',
      link: '#'
    },
    {
      type: 'ĐỈNH CAO GIẢI TÍCH',
      filterType: 'official',
      title: 'Mécanique analytique (Cơ học giải tích, 1788)',
      meta: 'Joseph Louis Lagrange · Paris',
      desc: 'Chia thành Tĩnh học và Động lực học, xây dựng hệ thống giải tích tổng quát dựa trên tọa độ suy rộng và bậc tự do, loại bỏ hoàn toàn hình vẽ.',
      link: '#'
    },
    {
      type: 'TIỂU LUẬN LỊCH SỬ',
      filterType: 'evidence',
      title: 'De Motu (Tiểu luận về chuyển động, 1684)',
      meta: 'Isaac Newton gửi Edmond Halley',
      desc: 'Tiểu luận ngắn Newton viết trả lời Halley chứng minh quỹ đạo dưới lực hấp dẫn nghịch đảo bình phương khoảng cách là hình elip.',
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

  // Danh sách các Slides (12 slide theo đúng Chuyên đề 5.1)
  const slides = [
    // Slide 1: Bìa
    {
      type: 'cover',
      title: data.topic.title,
      period: data.topic.period,
      formula: data.topic.formula,
      notes: 'Gợi ý mở đầu: Giới thiệu chuyên đề 5.1 — Cơ học thế kỉ XVIII (1687 — 1788). Nêu bật 2 tiến trình lịch sử: Củng cố cơ học Newton bằng thực nghiệm và Kỷ nguyên chuyển đổi phương pháp luận sang giải tích vi - tích phân.'
    },
    // Slide 2: Bối cảnh xã hội & Nhiệm vụ khoa học
    {
      type: 'context',
      notes: 'Bối cảnh: Xã hội chuyển biến từ phong kiến sang tư bản, cách mạng tư sản Pháp và Đẳng cấp thứ ba. Khoa học thoát khỏi tư tưởng Aristote và thần quyền tôn giáo. Hai nhiệm vụ lớn: Củng cố cơ học Newton (Mục 5.1.1) và Giải tích hóa cơ học (Mục 5.1.2).'
    },
    // Slide 3: Đối đầu tư tưởng Newton - Descartes (Bảng đối chiếu Voltaire)
    {
      type: 'comparison',
      notes: 'Tranh biện tư tưởng: Trình bày sự tương phản sâu sắc giữa London (Newton) và Paris (Descartes) qua ngòi bút Voltaire. Phái Descartes lúng túng vá víu mô hình ete mâu thuẫn, trong khi Newton thắng thế nhờ tính nhất quán và định lượng toán học chính xác.'
    },
    // Slides 4 - 10: 7 Mốc lịch sử từ data.timeline (Mục 5.1.1.1 đến 5.1.2.3)
    ...data.timeline.map((item, idx) => ({
      type: 'milestone',
      index: idx + 1,
      total: data.timeline.length,
      ...item,
      notes: `Mốc 0${idx + 1} (${item.year} · ${item.era}): ${item.title}. Trình bày 3 cột: Bối cảnh & Vấn đề, Bằng chứng thực nghiệm / Công thức (${item.formula || 'thực nghiệm'}), và Hệ quả & Di sản lịch sử.`
    })),
    // Slide 11: 6 Nhân vật thời đại
    {
      type: 'figures',
      notes: '6 Nhân vật chủ chốt trong tài liệu: Newton (nền móng Principia), Descartes (thuyết xoáy ete), Halley (tiên tri sao chổi), Voltaire (triết gia Khai sáng), Euler (Mechanica 1736) và Lagrange (Mécanique analytique 1788).'
    },
    // Slide 12: Tiến trình tiến hóa phương pháp luận (Lời kết)
    {
      type: 'closing',
      notes: 'Tổng kết tiến trình: “Từ bộ khung hình học của Newton (Nguyên lý, 1687), Euler đã khoác lên nó ngôn ngữ vi - tích phân (Mechanica, 1736), để rồi Lagrange nâng cấp tất cả thành một hệ thống giải tích tổng quát hoàn chỉnh (Cơ học giải tích, 1788).” Mời thầy cô và các bạn trao đổi thảo luận.'
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
            <p class="eyebrow" style="color:var(--accent);">CHUYÊN ĐỀ 5.1 · LỊCH SỬ VẬT LÝ</p>
            <h1>Cơ học<br /><em>thế kỉ XVIII.</em></h1>
            <p class="hero-lead" style="font-size:18px; margin:16px 0 24px; color:#bdb6aa;">
              Cuộc củng cố cơ học Newton bằng thực nghiệm và kỷ nguyên chuyển đổi sang phương pháp giải tích:
              <br><strong style="color:var(--text);">Đấu tranh tư tưởng → Sự kiện Sao chổi Halley → Giải tích hóa của Euler & Lagrange.</strong>
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
              <span>CASE<br />5.1</span>
            </div>
          </div>
        </div>
      `;
    } else if (slide.type === 'context') {
      html = `
        <div class="deck-slide">
          <div class="deck-slide-box">
            <div class="deck-slide-header">
              <p class="eyebrow">5.1 · BỐI CẢNH LỊCH SỬ & NHIỆM VỤ KHOA HỌC</p>
              <h2>Chuyển biến thời đại &<br /><em>Hai nhiệm vụ lịch sử.</em></h2>
            </div>
            <div class="deck-grid-4">
              <div class="deck-card">
                <span class="card-number">01</span>
                <h3>Chuyển biến kinh tế - xã hội</h3>
                <p>Xã hội Tây Âu chuyển từ phong kiến sang tư bản chủ nghĩa. Cách mạng tư sản bùng nổ, vai trò của Đẳng cấp thứ ba và các nhà Khai sáng Pháp.</p>
              </div>
              <div class="deck-card">
                <span class="card-number">02</span>
                <h3>Độc lập khỏi thần quyền</h3>
                <p>Cách mạng khoa học trước đó đã loại trừ tư tưởng Aristote và vai trò thống trị của tôn giáo, mở đường cho nhận thức tự nhiên duy vật khách quan.</p>
              </div>
              <div class="deck-card">
                <span class="card-number">03</span>
                <h3>Nhiệm vụ 1: Củng cố cơ học Newton</h3>
                <p>Bảo vệ cơ học Newton trước trường phái Descartes, kiểm chứng qua quan sát thiên văn học (sao chổi Halley) và khẳng định tính ưu việt tuyệt đối.</p>
              </div>
              <div class="deck-card" style="background:linear-gradient(135deg,rgba(239,184,106,0.1),#110f0c); border-color:#4a3e31;">
                <span class="card-number">04</span>
                <h3>Nhiệm vụ 2: Chuyển sang giải tích</h3>
                <p>Cách mạng Công nghiệp từ 1760s đòi hỏi tính toán chuyển động máy móc phức tạp, đặt ra yêu cầu chuyển bộ khung hình học sang giải tích vi - tích phân.</p>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (slide.type === 'comparison') {
      html = `
        <div class="deck-slide">
          <div class="deck-slide-box">
            <div class="deck-slide-header">
              <p class="eyebrow">5.1.1.1 · ĐẤU TRANH TƯ TƯỞNG</p>
              <h2>Newton đối đầu Descartes:<br /><em>London vs Paris.</em></h2>
            </div>
            <div class="deck-grid-4">
              <div class="deck-card">
                <span class="card-number">01</span>
                <h3>Bản chất không gian</h3>
                <p><strong>Phái Descartes (Paris):</strong> Bác bỏ chân không; vũ trụ lấp đầy 100% bởi chất lỏng ete.<br><strong>Phái Newton (London):</strong> Khẳng định không gian và vật chất tách biệt; vũ trụ chủ yếu là chân không.</p>
              </div>
              <div class="deck-card">
                <span class="card-number">02</span>
                <h3>Hình dạng Trái Đất</h3>
                <p><strong>Phái Descartes:</strong> Cho rằng Trái Đất hơi dài ra ở hai cực (như quả trứng).<br><strong>Phái Newton:</strong> Khẳng định Trái Đất bị nén lại ở hai cực (như quả cam dẹt).</p>
              </div>
              <div class="deck-card">
                <span class="card-number">03</span>
                <h3>Cơ chế tương tác & Lực</h3>
                <p><strong>Descartes:</strong> Tương tác do va chạm trực tiếp qua các dòng xoáy ete bao quanh vật thể.<br><strong>Newton:</strong> Các vật tự hút nhau bằng lực hấp dẫn theo một định luật vạn vật hấp dẫn duy nhất.</p>
              </div>
              <div class="deck-card" style="background:linear-gradient(135deg,rgba(239,184,106,0.1),#110f0c); border-color:#4a3e31;">
                <span class="card-number">04</span>
                <h3>Đánh giá lịch sử của Voltaire</h3>
                <p>Voltaire châm biếm tác phẩm của Descartes là “tiểu thuyết siêu hình”. Đến giữa thế kỉ XVIII, phái Newton hoàn toàn thắng thế.</p>
              </div>
            </div>
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
              <p class="eyebrow">NHÂN VẬT THỜI ĐẠI</p>
              <h2>Những bộ óc <em>định hình thế kỉ XVIII.</em></h2>
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
            <p class="eyebrow">TỔNG KẾT TIẾN TRÌNH TIẾN HÓA</p>
            <h2 style="font-size: clamp(34px, 4.5vw, 54px); margin:16px 0 24px;">
              Từ bộ khung hình học<br /><em>đến giải tích tổng quát.</em>
            </h2>
            <p style="max-width:780px; margin:0 auto 34px; font-size:17px; color:#bdb6aa; line-height:1.75;">
              “Từ bộ khung hình học của Newton (Nguyên lý, 1687), Euler đã khoác lên nó ngôn ngữ vi - tích phân (Mechanica, 1736), để rồi Lagrange nâng cấp tất cả thành một hệ thống giải tích tổng quát hoàn chỉnh (Cơ học giải tích, 1788).”
              <br><span style="display:block; margin-top:14px; font-size:13px; color:var(--accent); font-weight:700; letter-spacing:0.1em; text-transform:uppercase;">— Chuyên đề 5.1: Cơ học thế kỉ XVIII</span>
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

