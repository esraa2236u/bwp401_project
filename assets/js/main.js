/* ملف الجافاسكربت الرئيسي لدليل فعاليات الجامعة الافتراضية */
console.log("Welcome to Virtual University Events Guide!");

/* ===== بيانات الفعاليات ===== */
// هون خزنا كل الفعاليات بمكان واحد، وصفحة التفاصيل بتقرأ منها حسب الـ id بالرابط
const events = [
    {
        "id": 1,
        "title": "أمسية ثقافية",
        "category": "ثقافة",
        "date": "2026-11-10",
        "time": "17:00",
        "duration": 2,
        "city": "دمشق",
        "img": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
        "short": "أمسية ثقافية تجمع المهتمين بالأدب والفنون وتبادل الأفكار.",
        "long": [
            "ندعوكم للمشاركة في أمسية ثقافية مميزة تجمع المهتمين بالأدب والفنون والثقافة. تهدف الفعالية إلى تبادل الأفكار والخبرات، وتشجيع الحوار والإبداع بين المشاركين.",
            "تتضمن الفعالية فقرات متنوعة وفرصة للتعارف والتواصل مع أشخاص لديهم اهتمامات مشتركة، والحضور مفتوح لكل من يرغب."
        ],
        "fee": "مجانية",
        "audience": "الطلاب والمهتمون بالثقافة",
        "gallery": [
            "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
            "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
            "https://images.unsplash.com/photo-1523580494863-6f3031224c94"
        ]
    },
    {
        "id": 2,
        "title": "اليوم الرياضي",
        "category": "رياضة",
        "date": "2026-11-15",
        "time": "09:00",
        "duration": 5,
        "city": "حمص",
        "img": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
        "short": "يوم رياضي مليء بالأنشطة والمسابقات الرياضية المتنوعة.",
        "long": [
            "يوم رياضي كامل فيه مباريات ومسابقات جماعية وفردية لكل الطلاب. تعالوا جربوا أكثر من رياضة وتعرفوا على زملائكم بجو من التنافس الودي.",
            "تتضمن الفعالية فقرات متنوعة وفرصة للتعارف والتواصل مع أشخاص لديهم اهتمامات مشتركة، والحضور مفتوح لكل من يرغب."
        ],
        "fee": "مجانية",
        "audience": "جميع الطلاب",
        "gallery": [
            "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
            "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
        ]
    },
    {
        "id": 3,
        "title": "حفل موسيقي",
        "category": "موسيقى",
        "date": "2026-11-20",
        "time": "19:00",
        "duration": 2,
        "city": "أونلاين",
        "img": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
        "short": "لقاء موسيقي افتراضي للاستمتاع بالعروض والمواهب الفنية.",
        "long": [
            "حفل موسيقي افتراضي يقدم فيه طلاب الجامعة عروضاً متنوعة من الغناء والعزف. يمكنكم الحضور من البيت عبر الرابط الذي سيصلكم قبل الموعد.",
            "تتضمن الفعالية فقرات متنوعة وفرصة للتعارف والتواصل مع أشخاص لديهم اهتمامات مشتركة، والحضور مفتوح لكل من يرغب."
        ],
        "fee": "مجانية",
        "audience": "الطلاب وأهاليهم",
        "gallery": [
            "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
            "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
        ]
    },
    {
        "id": 4,
        "title": "ورشة تعليمية",
        "category": "تعليم",
        "date": "2026-11-25",
        "time": "11:00",
        "duration": 3,
        "city": "حلب",
        "img": "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
        "short": "ورشة تعليمية تهدف إلى تطوير المهارات والمعرفة لدى الطلاب.",
        "long": [
            "ورشة عملية لتطوير مهارات الدراسة والبحث العلمي وكتابة التقارير. سيتم العمل على تمارين تطبيقية خلال الورشة، والمقاعد محدودة.",
            "تتضمن الفعالية فقرات متنوعة وفرصة للتعارف والتواصل مع أشخاص لديهم اهتمامات مشتركة، والحضور مفتوح لكل من يرغب."
        ],
        "fee": "مجانية",
        "audience": "طلاب السنوات الأولى",
        "gallery": [
            "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
            "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
            "https://images.unsplash.com/photo-1506157786151-b8491531f063"
        ]
    },
    {
        "id": 5,
        "title": "يوم التكنولوجيا",
        "category": "تقنية",
        "date": "2026-11-12",
        "time": "10:00",
        "duration": 4,
        "city": "دمشق",
        "img": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        "short": "فعالية للتعرف على أحدث التقنيات والابتكارات الرقمية.",
        "long": [
            "يوم مخصص للتعرف على أحدث التقنيات والابتكارات الرقمية، مع عروض لمشاريع الطلاب وجلسات نقاش مع مختصين في مجال البرمجة.",
            "تتضمن الفعالية فقرات متنوعة وفرصة للتعارف والتواصل مع أشخاص لديهم اهتمامات مشتركة، والحضور مفتوح لكل من يرغب."
        ],
        "fee": "مجانية",
        "audience": "طلاب تقانة المعلومات",
        "gallery": [
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
            "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
            "https://images.unsplash.com/photo-1461896836934-ffe607ba8211"
        ]
    },
    {
        "id": 6,
        "title": "يوم العائلة الجامعي",
        "category": "عائلي",
        "date": "2026-12-02",
        "time": "15:00",
        "duration": 4,
        "city": "حمص",
        "img": "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
        "short": "يوم ترفيهي يجمع الطلاب وعائلاتهم بأنشطة وألعاب ممتعة.",
        "long": [
            "يوم ترفيهي نجتمع فيه مع عائلات الطلاب في أجواء من المرح، مع ألعاب للأطفال وأنشطة جماعية ومسابقات وجوائز رمزية.",
            "تتضمن الفعالية فقرات متنوعة وفرصة للتعارف والتواصل مع أشخاص لديهم اهتمامات مشتركة، والحضور مفتوح لكل من يرغب."
        ],
        "fee": "مجانية",
        "audience": "الطلاب وعائلاتهم",
        "gallery": [
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
            "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
            "https://images.unsplash.com/photo-1501386761578-eac5c94b800a"
        ]
    },
    {
        "id": 7,
        "title": "ملتقى الإبداع الجامعي",
        "category": "ثقافة",
        "date": "2026-11-08",
        "time": "12:00",
        "duration": 3,
        "city": "أونلاين",
        "img": "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
        "short": "لقاء يجمع الطلاب لتبادل الأفكار والخبرات والإبداعات.",
        "long": [
            "ملتقى يجمع الطلاب المبدعين ليعرضوا أفكارهم ومشاريعهم، مع فرصة للحصول على ملاحظات من الزملاء ومن أعضاء الهيئة التدريسية.",
            "تتضمن الفعالية فقرات متنوعة وفرصة للتعارف والتواصل مع أشخاص لديهم اهتمامات مشتركة، والحضور مفتوح لكل من يرغب."
        ],
        "fee": "مجانية",
        "audience": "جميع الطلاب",
        "gallery": [
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
            "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
            "https://images.unsplash.com/photo-1523580494863-6f3031224c94"
        ]
    },
    {
        "id": 8,
        "title": "ورشة المهارات الرقمية",
        "category": "تعليم",
        "date": "2026-11-18",
        "time": "13:00",
        "duration": 2,
        "city": "أونلاين",
        "img": "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
        "short": "ورشة تعليمية لتطوير المهارات الرقمية لدى الطلاب.",
        "long": [
            "ورشة أونلاين نتعلم فيها أساسيات الأدوات الرقمية المفيدة بالدراسة والعمل، مثل التنظيم والتعاون عبر الإنترنت والبحث عن المعلومات.",
            "تتضمن الفعالية فقرات متنوعة وفرصة للتعارف والتواصل مع أشخاص لديهم اهتمامات مشتركة، والحضور مفتوح لكل من يرغب."
        ],
        "fee": "مجانية",
        "audience": "جميع الطلاب",
        "gallery": [
            "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
            "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
        ]
    },
    {
        "id": 9,
        "title": "الأمسية الفنية الجامعية",
        "category": "موسيقى",
        "date": "2026-11-28",
        "time": "19:00",
        "duration": 2,
        "city": "دمشق",
        "img": "https://images.unsplash.com/photo-1506157786151-b8491531f063",
        "short": "أمسية فنية تجمع المواهب والإبداعات الطلابية.",
        "long": [
            "أمسية فنية تجمع المواهب الطلابية في الغناء والعزف والإلقاء. نشجع كل من لديه موهبة على المشاركة أو الحضور ودعم زملائه.",
            "تتضمن الفعالية فقرات متنوعة وفرصة للتعارف والتواصل مع أشخاص لديهم اهتمامات مشتركة، والحضور مفتوح لكل من يرغب."
        ],
        "fee": "مجانية",
        "audience": "الطلاب والمهتمون بالفن",
        "gallery": [
            "https://images.unsplash.com/photo-1506157786151-b8491531f063",
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
            "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
        ]
    }
];

const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];

// ألوان شارات التصنيفات
const badgeClasses = {
    "ثقافة": "bg-primary",
    "رياضة": "bg-success",
    "موسيقى": "bg-warning text-dark",
    "تعليم": "bg-info text-dark",
    "عائلي": "bg-danger",
    "تقنية": "bg-secondary"
};

// تحويل التاريخ 2026-11-10 إلى نص عربي
function arabicDate(d) {
    const parts = d.split("-").map(Number);
    return parts[2] + " " + months[parts[1] - 1] + " " + parts[0];
}

// تحويل الوقت 17:00 إلى 5:00 مساءً
function arabicTime(t) {
    let parts = t.split(":").map(Number);
    let h = parts[0];
    const suffix = h >= 12 ? "مساءً" : "صباحاً";
    h = h % 12 || 12;
    return h + ":" + String(parts[1]).padStart(2, "0") + " " + suffix;
}


/* ===== الوضع الليلي (Dark Mode) ===== */
const darkToggle = document.getElementById("darkToggle");

function applyTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);
    if (darkToggle) {
        darkToggle.textContent = isDark ? "☀️" : "🌙";
    }
}

// نرجع الاختيار المحفوظ، وإذا ما في localStorage منكمل عادي
try {
    applyTheme(localStorage.getItem("darkMode") === "1");
} catch (e) {
    applyTheme(false);
}

if (darkToggle) {
    darkToggle.addEventListener("click", function () {
        const isDark = !document.body.classList.contains("dark-mode");
        applyTheme(isDark);
        try {
            localStorage.setItem("darkMode", isDark ? "1" : "0");
        } catch (e) { }
    });
}


/* ===== زر العودة للأعلى ===== */
const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", function () {
        backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


/* ===== السلايدر (الفعاليات البارزة) ===== */
// تشغيل كاروسيل بوتستراب وتغيير الصورة كل 4 ثواني
const featuredCarousel = document.getElementById("featuredCarousel");

if (featuredCarousel && window.bootstrap) {
    new bootstrap.Carousel(featuredCarousel, { interval: 4000, ride: "carousel" });
}


/* ===== شارات "الحدث اليوم" و"هذا الأسبوع" ===== */
// بنقارن تاريخ كل فعالية مع تاريخ اليوم
function addDateBadges() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    document.querySelectorAll("[data-date]").forEach(function (card) {
        const badge = card.querySelector(".today-badge");
        if (!badge) return;

        const p = card.getAttribute("data-date").split("-").map(Number);
        const eventDay = new Date(p[0], p[1] - 1, p[2]);
        const diff = Math.round((eventDay - today) / 86400000);

        if (diff === 0) {
            badge.textContent = "🔥 الحدث اليوم";
            badge.classList.remove("d-none");
        } else if (diff > 0 && diff <= 7) {
            badge.textContent = "هذا الأسبوع";
            badge.classList.add("week");
            badge.classList.remove("d-none");
        }
    });
}

addDateBadges();


/* ===== البحث والفلترة في صفحة الفعاليات ===== */
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const locationFilter = document.getElementById("locationFilter");
const dateFilter = document.getElementById("dateFilter");
const resetFilters = document.getElementById("resetFilters");
const noResults = document.getElementById("noResults");

function filterEvents() {
    const cards = document.querySelectorAll("#eventsContainer .event-card");
    const searchValue = searchInput.value.trim().toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedLocation = locationFilter.value;
    const fromDate = dateFilter.value; // بالشكل 2026-11-10

    let visibleCount = 0;

    cards.forEach(function (card) {
        const title = card.querySelector(".card-title").textContent.toLowerCase();
        const category = card.getAttribute("data-category");
        const location = card.getAttribute("data-location");
        const date = card.getAttribute("data-date");

        const matchesSearch = title.includes(searchValue);
        const matchesCategory = selectedCategory === "all" || category === selectedCategory;
        const matchesLocation = selectedLocation === "all" || location === selectedLocation;
        // مقارنة النصوص بتشتغل لأن التاريخ مكتوب سنة-شهر-يوم
        const matchesDate = fromDate === "" || date >= fromDate;

        const show = matchesSearch && matchesCategory && matchesLocation && matchesDate;
        card.classList.toggle("d-none", !show);
        if (show) visibleCount++;
    });

    if (noResults) {
        noResults.style.display = visibleCount === 0 ? "block" : "none";
    }

    // نحفظ التصنيف المختار بالـ localStorage
    try {
        localStorage.setItem("eventCategory", selectedCategory);
    } catch (e) { }
}

if (searchInput && categoryFilter && locationFilter && dateFilter) {

    searchInput.addEventListener("input", filterEvents);
    categoryFilter.addEventListener("change", filterEvents);
    locationFilter.addEventListener("change", filterEvents);
    dateFilter.addEventListener("change", filterEvents);

    if (resetFilters) {
        resetFilters.addEventListener("click", function () {
            searchInput.value = "";
            categoryFilter.value = "all";
            locationFilter.value = "all";
            dateFilter.value = "";
            filterEvents();
        });
    }

    // أولاً التصنيف القادم من الرابط (events.html?category=ثقافة)، وإذا ما في منرجع المحفوظ
    let startCategory = new URLSearchParams(window.location.search).get("category");
    if (!startCategory) {
        try {
            startCategory = localStorage.getItem("eventCategory");
        } catch (e) { }
    }
    if (startCategory) {
        categoryFilter.value = startCategory;
        if (categoryFilter.value !== startCategory) categoryFilter.value = "all";
    }

    filterEvents();
}


/* ===== صفحة تفاصيل الفعالية ===== */
const eventDetails = document.getElementById("eventDetails");

// كرت صغير للفعاليات ذات الصلة
function relatedCard(ev) {
    return '<div class="col-md-6 col-lg-4">' +
        '<div class="card h-100 shadow-sm">' +
        '<img src="' + ev.img + '?w=800" class="card-img-top" alt="' + ev.title + '" loading="lazy">' +
        '<div class="card-body">' +
        '<span class="badge ' + badgeClasses[ev.category] + ' mb-2">' + ev.category + '</span>' +
        '<h5 class="card-title">' + ev.title + '</h5>' +
        '<p class="small mb-2">📅 ' + arabicDate(ev.date) + ' - 📍 ' + ev.city + '</p>' +
        '<a href="event.html?id=' + ev.id + '" class="btn btn-primary">التفاصيل</a>' +
        '</div></div></div>';
}

if (eventDetails) {

    // نقرأ رقم الفعالية من الرابط، وإذا ما لقيناه نعرض الفعالية الأولى
    const eventId = Number(new URLSearchParams(window.location.search).get("id")) || 1;
    const ev = events.find(function (e) { return e.id === eventId; }) || events[0];

    document.title = ev.title + " | دليل فعاليات الجامعة الافتراضية";

    const img = document.getElementById("eventImage");
    img.src = ev.img + "?w=1200";
    img.alt = ev.title;

    const badge = document.getElementById("eventBadge");
    badge.textContent = ev.category;
    badge.className = "badge mb-3 " + badgeClasses[ev.category];

    document.getElementById("eventTitle").textContent = ev.title;
    document.getElementById("eventDate").textContent = arabicDate(ev.date);
    document.getElementById("eventTime").textContent = arabicTime(ev.time);
    document.getElementById("eventLocation").textContent = ev.city;
    document.getElementById("eventType").textContent = ev.category;
    document.getElementById("eventAudience").textContent = ev.audience;
    document.getElementById("eventFee").textContent = ev.fee;
    document.getElementById("eventLocationText").textContent =
        ev.city === "أونلاين" ? "تقام الفعالية عبر الإنترنت، وسيصلك الرابط قبل الموعد." : "تقام الفعالية في مدينة " + ev.city + ".";

    // إذا الفعالية أونلاين ما في داعي للخريطة
    if (ev.city === "أونلاين") {
        document.getElementById("eventMap").classList.add("d-none");
    }

    document.getElementById("eventDesc").innerHTML = ev.long.map(function (p) {
        return "<p>" + p + "</p>";
    }).join("");

    // معرض الصور الصغير
    document.getElementById("eventGallery").innerHTML = ev.gallery.map(function (g) {
        return '<div class="col-4"><img src="' + g + '?w=600" class="gallery-img" alt="صورة من الفعالية" loading="lazy"></div>';
    }).join("");

    // الفعاليات ذات الصلة: نفس التصنيف أولاً ثم الباقي
    const related = events.filter(function (e) { return e.id !== ev.id; })
        .sort(function (a, b) {
            return (b.category === ev.category) - (a.category === ev.category);
        })
        .slice(0, 3);
    document.getElementById("relatedEvents").innerHTML = related.map(relatedCard).join("");

    // رسالة صغيرة تحت الأزرار
    const eventMessage = document.getElementById("eventMessage");

    // --- زر أضف للتقويم ---
    document.getElementById("calendarButton").addEventListener("click", function () {
        const start = new Date(ev.date + "T" + ev.time + ":00");
        const end = new Date(start.getTime() + ev.duration * 3600000);

        // تنسيق التاريخ للشكل المطلوب بملف ics
        function fmt(d) {
            const pad = function (n) { return String(n).padStart(2, "0"); };
            return d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()) + "T" + pad(d.getHours()) + pad(d.getMinutes()) + "00";
        }

        const content = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "BEGIN:VEVENT",
            "UID:event-" + ev.id + "@events-guide",
            "SUMMARY:" + ev.title,
            "DTSTART:" + fmt(start),
            "DTEND:" + fmt(end),
            "LOCATION:" + ev.city,
            "DESCRIPTION:" + ev.short,
            "END:VEVENT",
            "END:VCALENDAR"
        ].join("\r\n");

        const file = new Blob([content], { type: "text/calendar;charset=utf-8" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = "event-" + ev.id + ".ics";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(function () { URL.revokeObjectURL(link.href); }, 1000);

        eventMessage.textContent = "تم تجهيز ملف الفعالية للتقويم.";
    });

    // --- زر شارك ---
    document.getElementById("shareButton").addEventListener("click", async function () {
        const shareData = {
            title: ev.title,
            text: "انضموا إلينا في فعالية: " + ev.title,
            url: window.location.href
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(shareData.url);
                eventMessage.textContent = "تم نسخ رابط الفعالية للمشاركة.";
            }
        } catch (error) {
            eventMessage.textContent = "لم تتم المشاركة.";
        }
    });

    // --- نموذج حجز مكان وهمي داخل المودال ---
    const bookingForm = document.getElementById("bookingForm");
    const bookingSuccess = document.getElementById("bookingSuccess");
    const bookingError = document.getElementById("bookingError");
    document.getElementById("bookingEventName").textContent = ev.title;

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();
        bookingSuccess.classList.add("d-none");
        bookingError.classList.add("d-none");

        const name = document.getElementById("bookName").value.trim();
        const email = document.getElementById("bookEmail").value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === "" || !emailPattern.test(email)) {
            bookingError.classList.remove("d-none");
            return;
        }

        bookingSuccess.classList.remove("d-none");
        bookingForm.reset();
    });
}


/* ===== التحقق من نموذج اتصل بنا ===== */
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    const successAlert = document.getElementById("successAlert");
    const errorAlert = document.getElementById("errorAlert");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        successAlert.classList.add("d-none");
        errorAlert.classList.add("d-none");

        // كل حقل منتحقق منه لحاله حتى نلوّن الحقل الغلط بالأحمر
        const nameOk = nameInput.value.trim() !== "";
        const emailOk = emailPattern.test(emailInput.value.trim());
        const messageOk = messageInput.value.trim() !== "";

        nameInput.classList.toggle("is-invalid", !nameOk);
        emailInput.classList.toggle("is-invalid", !emailOk);
        messageInput.classList.toggle("is-invalid", !messageOk);

        if (!nameOk || !emailOk || !messageOk) {
            errorAlert.classList.remove("d-none");
            return;
        }

        successAlert.classList.remove("d-none");
        contactForm.reset();
    });
}
