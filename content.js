// Site content. Admins edit this file: add/remove items in the arrays below.
// Every text field has { az, en }. Images: path in assets/ or null (shows placeholder).

export const nextEventId = 'fp15';
export const nextEventStart = '2026-11-24T18:00:00+04:00';

export const stats = [
  { n: '500+', l: { az: 'Üzv', en: 'Members' } },
  { n: '120+', l: { az: 'Tədbir', en: 'Events held' } },
  { n: '15', l: { az: 'İl', en: 'Years active' } }
];

export const events = [
  { id: 'fp15', status: 'upcoming', date: '2026-11-24', time: '18:00', img: 'assets/poster-15th.png', photos: 0,
    title: { az: 'BHOS Family Party', en: 'BHOS Family Party' }, sub: { az: '15-ci il dönümü', en: '15th Anniversary' },
    place: { az: 'Khan by Hollywood', en: 'Khan by Hollywood' }, tag: { az: 'Flaqman tədbir', en: 'Flagship' } },
  { id: 'br26', status: 'upcoming', date: '2026-12-05', time: '16:00', img: null, photos: 0,
    title: { az: 'Brain Ring', en: 'Brain Ring' }, sub: { az: 'Fakültələrarası intellektual oyun', en: 'Inter-faculty quiz tournament' },
    place: { az: 'BANM, Akt zalı', en: 'BHOS Assembly Hall' }, tag: { az: 'Yarış', en: 'Competition' } },
  { id: 'ch26', status: 'upcoming', date: '2026-12-14', time: '11:00', img: null, photos: 0,
    title: { az: 'Qış xeyriyyə aksiyası', en: 'Winter charity drive' }, sub: { az: 'Könüllülük layihəsi', en: 'Volunteering project' },
    place: { az: 'BANM kampusu', en: 'BHOS campus' }, tag: { az: 'Könüllülük', en: 'Volunteering' } },
  { id: 'fp14', status: 'past', date: '2025-11-27', time: '18:00', img: 'assets/poster-14th.png', photos: 48,
    title: { az: 'BHOS Family Party', en: 'BHOS Family Party' }, sub: { az: '14-cü il dönümü', en: '14th Anniversary' },
    place: { az: 'Mezze Baku', en: 'Mezze Baku' }, tag: { az: 'Flaqman tədbir', en: 'Flagship' } },
  { id: 'br25', status: 'past', date: '2025-04-18', time: '16:00', img: null, photos: 22,
    title: { az: 'Brain Ring', en: 'Brain Ring' }, sub: { az: 'Yaz mövsümü finalı', en: 'Spring season final' },
    place: { az: 'BANM, Akt zalı', en: 'BHOS Assembly Hall' }, tag: { az: 'Yarış', en: 'Competition' } }
];

export const news = [
  { date: '2026-11-10', img: 'assets/poster-15th.png', tag: { az: 'Elan', en: 'Announcement' },
    title: { az: 'BHOS Family Party: 15-ci il dönümü 24 noyabrda', en: 'BHOS Family Party: 15th Anniversary on 24 November' },
    excerpt: { az: 'Bu il gecə Khan by Hollywood məkanında canlı musiqi ilə keçiriləcək.', en: 'This year the night takes place at Khan by Hollywood with live music.' } },
  { date: '2026-10-01', img: null, tag: { az: 'Üzvlük', en: 'Membership' },
    title: { az: 'Yeni üzv qəbulu başladı', en: 'New member applications are open' },
    excerpt: { az: 'Bütün kurs tələbələri müraciət edə bilər. Formu doldurmaq 2 dəqiqə çəkir.', en: 'Students from every year can apply. The form takes 2 minutes.' } },
  { date: '2025-12-02', img: 'assets/poster-14th.png', tag: { az: 'Fotoreportaj', en: 'Photo report' },
    title: { az: '14-cü il dönümü: gecədən fotolar', en: '14th Anniversary: photos from the night' },
    excerpt: { az: 'Mezze Baku-da keçən gecənin ən yaxşı anları qalereyada.', en: 'The best moments from the night at Mezze Baku are in the gallery.' } }
];

export const team = {
  leaders: [
    { name: 'Ad Soyad', img: null, role: { az: 'Sədr', en: 'President' } },
    { name: 'Ad Soyad', img: null, role: { az: 'Sədr müavini', en: 'Vice President' } },
    { name: 'Ad Soyad', img: null, role: { az: 'Katib', en: 'Secretary' } },
    { name: 'Ad Soyad', img: null, role: { az: 'Xəzinədar', en: 'Treasurer' } }
  ],
  departments: [
    { head: 'Ad Soyad', name: { az: 'Tədbirlər', en: 'Events' }, desc: { az: 'Family Party və digər tədbirlərin planlaşdırılması və icrası.', en: 'Planning and running Family Party and other events.' } },
    { head: 'Ad Soyad', name: { az: 'PR və Media', en: 'PR & Media' }, desc: { az: 'Instagram, foto və video çəkiliş, xəbərlər.', en: 'Instagram, photo and video, news.' } },
    { head: 'Ad Soyad', name: { az: 'Dizayn', en: 'Design' }, desc: { az: 'Afişalar, vizual üslub və tədbir dizaynı.', en: 'Posters, visual identity and event design.' } },
    { head: 'Ad Soyad', name: { az: 'Könüllülük', en: 'Volunteering' }, desc: { az: 'Xeyriyyə aksiyaları və sosial layihələr.', en: 'Charity drives and social projects.' } },
    { head: 'Ad Soyad', name: { az: 'İntellektual', en: 'Intellectual' }, desc: { az: 'Brain Ring, debatlar və bilik yarışları.', en: 'Brain Ring, debates and knowledge contests.' } },
    { head: 'Ad Soyad', name: { az: 'Sponsorluq', en: 'Partnerships' }, desc: { az: 'Sponsorlar və tərəfdaşlarla əməkdaşlıq.', en: 'Working with sponsors and partners.' } }
  ]
};

export const gallery = [
  { img: 'assets/poster-15th.png', event: 'fp15', tall: true },
  { img: null, event: 'fp14', tall: false },
  { img: 'assets/poster-14th.png', event: 'fp14', tall: true },
  { img: null, event: 'br25', tall: false },
  { img: null, event: 'fp14', tall: true },
  { img: null, event: 'br25', tall: false },
  { img: null, event: 'fp14', tall: false },
  { img: null, event: 'fp14', tall: true }
];

const MON = {
  az: ['Yanvar','Fevral','Mart','Aprel','May','İyun','İyul','Avqust','Sentyabr','Oktyabr','Noyabr','Dekabr'],
  en: ['January','February','March','April','May','June','July','August','September','October','November','December']
};
const SHORT = { az: ['YAN','FEV','MAR','APR','MAY','İYN','İYL','AVQ','SEN','OKT','NOY','DEK'], en: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'] };

export function fmt(iso, lang) {
  const [y, m, d] = iso.split('-').map(Number);
  return { day: String(d).padStart(2, '0'), mon: SHORT[lang][m - 1], full: `${d} ${MON[lang][m - 1]} ${y}`, year: String(y) };
}
export function ev(e, lang) {
  const f = fmt(e.date, lang);
  return { id: e.id, status: e.status, img: e.img, hasImg: !!e.img, noImg: !e.img, photos: e.photos, hasPhotos: e.photos > 0,
    day: f.day, mon: f.mon, full: f.full, year: f.year, time: e.time,
    title: e.title[lang], sub: e.sub[lang], place: e.place[lang], tag: e.tag[lang] };
}
