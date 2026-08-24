const AISA_CONTENT = {
  brand: {
    name: "AISA",
    nameFa: "آیسا",
    tagline: "کلینیک تخصصی زیبایی آیسا",
    logoText: "AISA",
    phone: "۰۹۱۲۹۷۴۶۸۵۵",
    address: "تهران، فرجام (نیلفروشان)",
    workHours: "شنبه تا چهارشنبه ۱۰ تا ۲۰ / پنجشنبه ۱۰ تا ۱۷",
    social: {
      instagram: "https://www.instagram.com/clinic_aisa",
      telegram: "https://t.me/Clinic_aisa",
      whatsapp: "https://wa.me/989129746855"
    }
  },

  navigation: [
    { label: "خانه",        href: "#hero" },
    { label: "خدمات",       href: "#services" },
    { label: "چرا آیسا",     href: "#why-aisa" },
    { label: "نمونه‌کارها",  href: "#portfolio" },
    { label: "تیم پزشکی",   href: "#team" },
    { label: "نظرات",       href: "#testimonials" },
    { label: "مقالات",      href: "#blog" },
    { label: "تماس با ما",  href: "#consultation" }
  ],

  hero: {
    tag: "کلینیک تخصصی زیبایی آیسا",
    title: "زیبایی، با استانداردی فراتر از انتظار",
    titleEmphasis: "زیبایی",
    titleRest: "، با استانداردی فراتر از انتظار",
    subtitle: "کلینیک تخصصی زیبایی آیسا با بهره‌گیری از تکنولوژی‌های روز دنیا و خدمات شخصی‌سازی‌شده، آماده ارائه خدمات زیبایی و مراقبت‌های تخصصی به شماست.",
    scrollText: "زیبایی یک انتخاب است",
    primaryButton: { label: "رزرو مشاوره", href: "#consultation" },
    secondaryButton: { label: "مشاهده خدمات", href: "#services" }
  },

  heroMedia: {
    videoUrl: "",
    posterImage: ""
  },

  servicesSection: {
    kicker: "خدمات تخصصی",
    title: "درمان‌هایی در تراز جهانی",
    description: "هر خدمت در آیسا با ترکیبی از دانش پزشکی، تکنولوژی پیشرفته و توجه به جزئیات، برای شما طراحی می‌شود."
  },
  services: [
    { id:"laser-hair-removal", detailHref:"services/laser-hair-removal.html", icon:"sparkle", image:"images/service-laser-hair-removal.jpg", title:"لیزر موهای زائد", shortDesc:"خداحافظی با اپیلاسیون هفتگی، با دستگاه Soprano Titanium 2025", description:"دیگر لازم نیست هر هفته وقت‌تان را صرف اپیلاسیون یا وکس کنید. با دستگاه پیشرفته Soprano Titanium 2025، موهای زائد را با تکنولوژی روز و متناسب با نوع پوست و موی خودتان درمان می‌کنیم؛ تجربه‌ای سریع، ایمن و با حداقل ناراحتی. از بسته‌های تک‌ناحیه تا پکیج‌های کامل‌تر، متناسب با نیاز و بودجه‌تان طراحی می‌شود — لیست کامل قیمت‌ها را در همان جلسه مشاوره اول با هم مرور می‌کنیم.", order:1 },
    { id:"botox", detailHref:"services/botox.html", icon:"droplet", image:"images/service-botox.jpg", title:"بوتاکس", shortDesc:"رفع خطوط اخم و پیشانی، با نتیجه‌ای طبیعی که هنوز خودتان هستید", description:"اگر از دیدن خطوط اخم و پیشانی توی آینه خسته شده‌اید، بوتاکس دقیقاً برای همین لحظه‌هاست. تزریق بوتاکس در آیسا با دوز شخصی‌سازی‌شده و زیر نظر پزشک متخصص انجام می‌شود تا خطوط ناشی از فعالیت عضلات کم‌رنگ‌تر شوند، بدون آنکه حالت طبیعی صورت‌تان از بین برود.", order:2 },
    { id:"filler-rejuvenation", detailHref:"services/filler-rejuvenation.html", icon:"wave", image:"images/service-filler-rejuvenation.jpg", title:"جوانسازی و تزریق فیلر", shortDesc:"بازگرداندن حجم و طراوت چهره، با تزریق فیلر اصولی", description:"با گذر زمان، افت حجم طبیعی گونه یا فرورفتگی زیر چشم می‌تواند چهره را خسته‌تر از سن واقعی نشان دهد. با تزریق دقیق فیلر در نقاط مناسب، این افت حجم جبران می‌شود و صورت شاداب‌تر، متناسب‌تر و جوان‌تر به نظر می‌رسد — با حفظ کامل فرم طبیعی و ویژگی‌های اصلی چهره شما.", order:3 },
    { id:"face-contouring", detailHref:"services/face-contouring.html", icon:"gem", image:"images/service-face-contouring.jpg", title:"کانتورینگ صورت", shortDesc:"فرم‌دهی و زاویه‌سازی چهره، بدون تغییر اغراق‌آمیز", description:"خیلی وقت‌ها فقط یک فرم‌دهی ظریف کافی است تا کل تناسب صورت عوض شود. با تزریق دقیق و اصولی فیلر در نواحی گونه، فک، چانه و لب، به چهره شما تعادل و زاویه‌ای متناسب‌تر می‌بخشیم؛ نتیجه‌ای که همچنان خود شما هستید، فقط نسخه‌ی شاداب‌ترش.", order:4 },
    { id:"facial-treatments", detailHref:"services/facial-treatments.html", icon:"leaf", image:"images/service-facial-treatments.jpg", title:"درمان‌های تخصصی صورت", shortDesc:"فیشیال، مزوتراپی و مراقبت‌های تخصصی، برای پوستی که واقعاً نفس می‌کشد", description:"هر پوستی داستان خودش را دارد؛ به همین دلیل پکیج‌های تخصصی صورت آیسا در تهرانپارس را متناسب با نیاز واقعی پوست شما طراحی می‌کنیم، نه یک فرمول ثابت برای همه. ترکیبی از فیشیال، مزوتراپی و مراقبت‌های حرفه‌ای که به شفافیت، آبرسانی و سلامت پوست‌تان کمک می‌کند.", order:5 }
  ],

  whySection: {
    kicker: "چرا آیسا",
    title: "تجربه‌ای که فقط در آیسا می‌یابید",
    description: "آیسا ترکیبی از دانش پزشکی، فناوری روز و میزبانی حرفه‌ای است؛ جایی که هر جزئیات برای آرامش و تجربه بهتر شما طراحی شده است.",
    image: "images/clinic_interior.jpg",
    badgeNumber: "+۹",
    badgeText: "سال تجربه تخصصی",
    points: [
      { icon:"medical",  title:"تخصص پزشکی معتبر",         text:"تمامی درمان‌ها با نظارت پزشک متخصص و با توجه به شرایط و نیازهای هر مراجعه‌کننده انجام می‌شود." },
      { icon:"tech",     title:"تکنولوژی و تجهیزات پیشرفته", text:"استفاده از تجهیزات و تکنولوژی‌های پیشرفته برای ارائه خدمات دقیق‌تر و باکیفیت‌تر." },
      { icon:"personal", title:"درمان کاملاً شخصی‌سازی‌شده", text:"هر پروتکل درمانی متناسب با پوست، نیاز و هدف زیبایی شما طراحی می‌شود." },
      { icon:"luxury",   title:"تجربه‌ای حرفه‌ای و آرامش‌بخش", text:"فضایی حرفه‌ای و آرام که تلاش می‌کند تجربه‌ای متفاوت از مراجعه به یک کلینیک زیبایی برای شما ایجاد کند." }
    ]
  },

  portfolioSection: {
    kicker: "نمونه‌کارها",
    title: "نتایج واقعی، تفاوت واقعی",
    description: "نگاهی به نتایج درمان‌های انجام‌شده در کلینیک آیسا — با رضایت کامل مراجعین.",
    instagramCta: {
      text: "برای مشاهده نمونه‌کارهای بیشتر، نتایج واقعی درمان‌ها و تصاویر قبل و بعد مراجعین، به صفحه اینستاگرام آیسا سر بزنید. به‌خصوص هایلایت «قبل و بعد» را ببینید.",
      label: "مشاهده نمونه‌کارهای بیشتر در اینستاگرام",
      href: "https://www.instagram.com/clinic_aisa"
    }
  },
  portfolioItems: [
    { id:"sample-01", category:"filler-rejuvenation", categoryLabel:"تزریق فیلر لب", image:"images/portfolio-lip-filler.jpg", description:"فرم‌دهی و حجم‌دهی طبیعی لب با حفظ تناسب چهره و فرم اصلی لب‌ها." },
    { id:"sample-02", category:"face-contouring", categoryLabel:"جوانسازی و اصلاح فرم چانه", image:"images/portfolio-chin.jpg", description:"جوانسازی و اصلاح فرم چهره با هدف ایجاد ظاهری طبیعی، متناسب و هماهنگ با ویژگی‌های صورت." },
    { id:"sample-03", category:"filler-rejuvenation", categoryLabel:"جوانسازی و فرم‌دهی صورت با فیلر", image:"images/portfolio-facial-filler.jpg", description:"تزریق فیلر در نواحی گونه، خط خنده و خط غم با هدف بازگرداندن حجم، بهبود فرم صورت و ایجاد ظاهری طبیعی و متناسب." },
    { id:"sample-04", category:"filler-rejuvenation", categoryLabel:"تزریق ۵ سی‌سی فیلر", image:"images/portfolio-5cc-filler.jpg", description:"نمونه‌کار تزریق فیلر در نواحی گونه، خط خنده و خط غم." },
    { id:"sample-05", category:"face-contouring", categoryLabel:"زاویه‌سازی و جوانسازی فک", image:"images/portfolio-jaw-angle.jpg", description:"بهبود افتادگی و شل‌شدگی در ناحیه خط فک و چانه." }
  ],
  portfolioCategories: [
    { id:"all", label:"همه موارد" },
    { id:"filler-rejuvenation", label:"جوانسازی و تزریق فیلر" },
    { id:"face-contouring", label:"کانتورینگ صورت" }
  ],

  teamSection: {
    kicker: "تیم آیسا",
    title: "متخصصانی که به آن‌ها اعتماد می‌کنید",
    description: "پشت هر نتیجه‌ی درخشان در آیسا، پزشک متخصص و تیم مدیریتی باتجربه ایستاده‌اند."
  },
  team: [
    { id:"doctor-simin-sajadi", group:"پزشکان آیسا", name:"دکتر سیمین سجادی", role:"متخصص پوست، مو و زیبایی", image:"images/doctor-simin-sajadi.jpg", bio:"بیش از ۹ سال تجربه در زمینه درمان‌های تزریقی و مراقبت‌های تخصصی پوست." },
    { id:"management-asema-ghasemi", group:"مدیریت کلینیک", name:"خانم اسما قاسمی", role:"مدیریت مجموعه آیسا", image:"images/02_management_asema_ghasemi.png", bio:"مدیریت و نظارت بر روند ارائه خدمات و تجربه مراجعین در کلینیک آیسا، با تمرکز بر کیفیت خدمات و ایجاد محیطی حرفه‌ای و آرام." }
  ],

  testimonialsSection: {
    kicker: "نظرات مراجعین",
    title: "تجربه‌ای که زیباجویان آیسا روایت می‌کنند"
  },
  testimonials: [
    { id:"t-01", name:"پریسا. ا",      service:"بوتاکس",         rating:5, text:"از لحظه‌ی ورود تا پایان درمان، همه‌چیز فوق‌العاده حرفه‌ای و آرامش‌بخش بود. نتیجه دقیقاً همون چیزی بود که می‌خواستم." },
    { id:"t-02", name:"نیلوفر حسینی",  service:"لیزر موهای زائد", rating:5, text:"بعد از چند جلسه لیزر، واقعاً نتیجه رو حس کردم. فضای کلینیک هم خیلی شیک و تمیز بود." },
    { id:"t-03", name:"هستی ارغوانی",  service:"جوانسازی پوست",   rating:5, text:"دکتر سجادی با دقت زیادی نیاز پوست من رو بررسی کردن و پروتکل مخصوص خودم رو پیشنهاد دادن. راضیم و پیشنهاد می‌کنم شما هم یک بار از خدمات آیسا استفاده کنید." }
  ],

  blogSection: {
    kicker: "مجله آیسا",
    title: "مقالات تخصصی زیبایی و پوست",
    description: "راهنماهای علمی و کاربردی برای انتخاب آگاهانه‌ی درمان مناسب شما."
  },
  blogPosts: [
    { id:"laser-hair-removal", href:"blog/laser-hair-removal.html", image:"images/article-laser-general.jpg", category:"لیزر", title:"لیزر موهای زائد چند جلسه طول می‌کشد و نتیجه از چه زمانی مشخص می‌شود؟", excerpt:"نحوه عملکرد لیزر، تعداد جلسات و نکات پیش و پس از هر جلسه با دستگاه Soprano Titanium.", readTime:"۴ دقیقه" },
    { id:"botox", href:"blog/botox.html", image:"images/article-botox.jpg", category:"تزریقات", title:"بوتاکس از چه سنی مناسب است؟ آیا برای شروع بوتاکس باید صبر کنیم؟", excerpt:"بوتاکس چگونه عمل می‌کند، از چه سنی مناسب است و نتیجه آن چقدر ماندگار است.", readTime:"۳ دقیقه" },
    { id:"facial-filler", href:"blog/facial-filler.html", image:"images/article-facial-filler.jpg", category:"تزریقات", title:"تزریق فیلر چه تفاوتی با بوتاکس دارد و کدام برای شما مناسب‌تر است؟", excerpt:"تفاوت فیلر و بوتاکس، و اینکه تزریق فیلر برای چه افرادی مناسب‌تر است.", readTime:"۴ دقیقه" },
    { id:"lip-injection-russian-lips", href:"blog/lip-injection-russian-lips.html", image:"images/article-lip-russian.jpg", category:"تزریقات", title:"لب روسی چیست و چه تفاوتی با تزریق کلاسیک لب دارد؟", excerpt:"آشنایی با تکنیک لب روسی و تفاوت آن با تزریق کلاسیک لب.", readTime:"۳ دقیقه" },
    { id:"eyebrow-temple-lift", href:"blog/eyebrow-temple-lift.html", image:"images/article-eyebrow-temple-lift.jpg", category:"تزریقات", title:"لیفت ابرو و شقیقه با تزریق؛ این روش چه کاری می‌تواند انجام دهد؟", excerpt:"آشنایی با لیفت غیرجراحی ابرو و شقیقه و انتظار واقع‌بینانه از نتیجه آن.", readTime:"۳ دقیقه" },
    { id:"cheek-filler", href:"blog/cheek-filler.html", image:"images/article-cheek-filler.jpg", category:"تزریقات", title:"تزریق فیلر گونه چه تأثیری روی فرم صورت دارد؟", excerpt:"تزریق فیلر گونه چگونه به بازگرداندن حجم و تناسب چهره کمک می‌کند.", readTime:"۳ دقیقه" },
    { id:"laser-hair-removal-tehranpars", href:"blog/laser-hair-removal-tehranpars.html", image:"images/article-laser-tehranpars.jpg", category:"لیزر", title:"لیزر موهای زائد در تهرانپارس؛ چطور یک کلینیک مناسب انتخاب کنیم؟", excerpt:"معیارهای انتخاب کلینیک لیزر موهای زائد در تهرانپارس و شرق تهران.", readTime:"۳ دقیقه" },
    { id:"skin-boosters", href:"blog/skin-boosters.html", image:"images/article-skin-boosters.jpg", category:"جوانسازی پوست", title:"جوانسازی پوست با جوانسازها؛ روش‌ها، کاربردها و انتخاب بهترین گزینه برای پوست", excerpt:"تفاوت جوانساز با فیلر و بوتاکس و معرفی NCTF 135 HA، ژالوپرو و مزو زانتین.", readTime:"۵ دقیقه" },
    { id:"dimono", href:"blog/dimono.html", image:"images/dimono_box.jpg", category:"تزریقات", title:"دیمونو؛ فیلر پپتیدی برای بهبود خطوط و کیفیت پوست", excerpt:"دیمونو (CG Dimono PTx) چیست و چه تفاوتی با بوتاکس دارد؟", readTime:"۴ دقیقه" },
    { id:"laser-hair-removal-men", href:"blog/laser-hair-removal-men.html", image:"images/article-laser-men.jpg", category:"لیزر", title:"لیزر موهای زائد آقایان در تهرانپارس؛ همه‌چیز درباره لیزر مردانه", excerpt:"تفاوت لیزر مردانه با بانوان، پرتقاضاترین نواحی و نکاتی که آقایان باید بدانند.", readTime:"۴ دقیقه" }
  ],

  consultationSection: {
    kicker: "رزرو مشاوره",
    title: "قدم اول تا زیبایی دلخواه شما",
    description: "فرم زیر را تکمیل کنید تا کارشناسان آیسا در سریع‌ترین زمان ممکن با شما تماس بگیرند.",
    points: [
      "مشاوره تخصصی و رایگان",
      "پروتکل درمانی کاملاً شخصی‌سازی‌شده",
      "بدون هیچ تعهد اولیه"
    ]
  },

  footer: {
    tagline: "کلینیک تخصصی زیبایی آیسا؛ استانداردی فراتر از انتظار.",
    copyright: "تمامی حقوق این وب‌سایت متعلق به کلینیک آیسا می‌باشد. © ۱۴۰۵",
    columns: [
      { title:"دسترسی سریع", links:[
        { label:"خدمات", href:"#services" },
        { label:"نمونه‌کارها", href:"#portfolio" },
        { label:"تیم پزشکی", href:"#team" },
        { label:"مقالات", href:"#blog" }
      ]},
      { title:"تماس با ما", links:[
        { label:"تهران، فرجام (نیلفروشان)", href:"#" },
        { label:"۰۹۱۲۹۷۴۶۸۵۵", href:"tel:09129746855" },
        { label:"شنبه تا چهارشنبه ۱۰ تا ۲۰ / پنجشنبه ۱۰ تا ۱۷", href:"#" }
      ]}
    ],
    social: [
      { label:"اینستاگرام", href:"https://www.instagram.com/clinic_aisa" },
      { label:"تلگرام", href:"https://t.me/Clinic_aisa" },
      { label:"واتس‌اپ", href:"https://wa.me/989129746855" }
    ]
  }
};
