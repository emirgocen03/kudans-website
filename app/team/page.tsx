import Image from 'next/image';

interface Dancer {
  name: string;
  image?: string;
  instagram?: string;
  quote?: string;
}

interface DanceTeam {
  name: string;
  dancers: Dancer[];
}

// Function to get initials from name
function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

// Default Profile Component
function DefaultProfile({ name }: { name: string }) {
  const colors = [
    'from-blue-500',
    'from-purple-500',
    'from-pink-500',
    'from-indigo-500',
    'from-teal-500',
    'from-orange-500',
  ];
  const colorIndex = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  // Gradient flows from color to dark, matching card
  return (
    <div className={`w-full h-full flex items-center justify-center rounded-b-none rounded-t-3xl bg-gradient-to-b ${colors[colorIndex]} to-gray-900/90`}>
      <svg 
        className="w-24 h-24 text-white opacity-80" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M12 2C9.24 2 7 4.24 7 7C7 9.76 9.24 12 12 12C14.76 12 17 9.76 17 7C17 4.24 14.76 2 12 2ZM12 10C10.35 10 9 8.65 9 7C9 5.35 10.35 4 12 4C13.65 4 15 5.35 15 7C15 8.65 13.65 10 12 10ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14ZM18 18H6V17.75C6.2 17.42 8.1 16.5 12 16.5C15.9 16.5 17.8 17.42 18 17.75V18Z" 
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

const danceTeams: DanceTeam[] = [
  {
    name: "Tango",
    dancers: [
      { name: "Abdulmelih Avlukyarı", instagram: "melihavlukyari", quote: "Hayatın farklı tonlarını aradığım maceramda, tango karşıma bambaşka bir renk paleti serdi.", image: "/images/team/IMG_20250315_211813_201 - ABDULMELIH AVLUKYARI.webp" },
      { name: "Arda Ayan" },
      { name: "Asil Söylev", instagram: "asil_soylev", quote: "Son akış bitene kadar devam et", image: "/images/team/IMG_9990 - ASIL SOYLEV.jpeg" },
      { name: "Azra Kolancılar", instagram: "azra_kolancilar", image: "/images/team/WhatsApp Görsel 2025-04-28 saat 11.32.30_abc2f175 - AZRA KOLANCILAR.jpg" },
      { name: "Bahar Şen", instagram: "baharrsen", quote: "Hayatım boyunca kendimin farklı renklerini keşfetmeye inandım; dans, bu renkler arasında ruhuma en çok dokunanlardan biri💫", image: "/images/team/IMG_0711 - BAHAR SEN.jpeg" },
      { name: "Elif Kızılöz", image: "/images/team/IMG_0891 - ELIF KIZILOZ.jpeg" },
      { name: "Enes Tunç", instagram: "enstunc7", quote: "Dansla ilgileniyor olmak inanılmaz deneyimler yaşamama ve unutulmayacak anılar biriktirmeme vesile oldu, olmaya da devam ediyor. Kudans ailesinin bir parçası olduğum için çok mutluyum.", image: "/images/team/IMG_8078 - ENES TUNC.JPG" },
      { name: "Erkan Güneş", instagram: "1erkangunes", quote: "Hukukla geleceğimi, tango ile özgürlüğümü inşa ediyorum; ikisini de tutkuyla ve cesaretle yaşıyorum.", image: "/images/team/IMG_1273 - ERKAN GUNES.jpeg" },
      { name: "İlayda Baştaş", image: "/images/team/IMG_2801 - ILAYDA BASTAS.jpeg" },
      { name: "Nilsu Tuğcu", instagram: "nilstugcu", image: "/images/team/IMG_1530 - NILSU TUGCU.jpeg" },
      { name: "Özlem Ürküt", instagram: "ozlemrkut", quote: "Dance first, think later. It's natural order and movement of her own life", image: "/images/team/IMG_8069 - Ozlem Urkut.jpeg" },
      { name: "Pınar Çırpan" },
      { name: "Selin İdil Öncül" },
      { name: "Sude Aslan", quote: "Never miss a chance to dance🌟", image: "/images/team/256598AA-615A-4974-9F05-F37B855C73DC - ZEYNEP SUDE ASLAN.jpeg" },
      { name: "Tufan Karabaş", instagram: "tufan.krbs", quote: "The show must go on.", image: "/images/team/5 _ 1. (1) - TUFAN KARABAS.jpg" },
      { name: "Yusuf Mert Öztürk", instagram: "ymertozz", image: "/images/team/IMG_3216 - YUSUF MERT OZTURK.jpeg" },
    ]
  },
  {
    name: "Swing",
    dancers: [
      { name: "Ahmet Efe Yakut", instagram: "ahmetefe_yakut", quote: "Carpe diem", image: "/images/team/IMG_20250428_162041 - AHMET EFE YAKUT.jpg" },
      { name: "Ahmet Emre Kuranoğlu", instagram: "ahmetemre_23", quote: "Gösterdiğim hareketi tekte yapana jagerler benden", image: "/images/team/IMG_0202 - AHMET EMRE KURANOGLU.jpg" },
      { name: "Ahmet Özkan Canbulat" },
      { name: "Ayşe Nur Kılıç", image: "/images/team/IMG_3012 - AYSE NUR KILIC.jpeg" },
      { name: "Bengü Selvi" },
      { name: "Beril Göktaş" },
      { name: "Ceylin Yalnız" },
      { name: "Çağlar Ege Aydın" },
      { name: "Emir Göcen", instagram: "emirgocen_", quote: "Music is the pulse of my soul — it wakes the feelings I thought I'd lost", image: "/images/team/vesıkalık - EMIR GOCEN.jpg" },
      { name: "İkra Nur Şeker", instagram: "ikra_seker", image: "/images/team/IMG-20241223-WA0063 - IKRANUR SEKER.jpg" },
      { name: "İlbilge Acır", quote: "Anları yakalamayı çok seviyorum. Özellikle dans ederken eğlendiğimiz anları :))", image: "/images/team/IMG_9114 - ILBILGE ACIR.jpg" },
      { name: "İpek Ateş", instagram: "iipekatess", quote: "bibbidi bobbidi boo", image: "/images/team/IMG_7912 - IPEK ATES.jpeg" },
      { name: "Mehmet Ege Akbay" },
      { name: "Ömer Göcen", instagram: "omer_gocenn", image: "/images/team/IMG-20250205-WA0003_resized - OMER GOCEN.jpg" },
      { name: "Simay Topçu", instagram: "siimay.topcu", image: "/images/team/IMG-20250311-WA0000 - SIMAY TOPCU.jpg" },
      { name: "Tuna Çimen" },
      { name: "Umut Çağan Uslu" },
      { name: "Zehra Güzelsağaltıcı" },
    ]
  },
  {
    name: "Hiphop",
    dancers: [
      { name: "Ahsen Aysel", instagram: "ahsenice", quote: "born to be dancer, forced to be engineer", image: "/images/team/IMG20241026161459 - AHSEN AYSEL.jpg" },
      { name: "Alperen Bulut" },
      { name: "Defne Durukan" },
      { name: "Derin Barlas", instagram: "derinnbarlass", quote: "Bir şey bulamadım 😜", image: "/images/team/IMG_4121 - DERIN BARLAS.jpeg" },
      { name: "Enis Yürük" },
      { name: "Ezgi Bekiroğlu", instagram: "ezgibekirogluu", image: "/images/team/IMG_0292 - EZGI BEKIROGLU.jpeg" },
      { name: "Ezgi Çelebi", instagram: "ayseezgicelebi", quote: "dans etmem gerekiyor oğlum", image: "/images/team/IMG_2897 - AYSE EZGI CELEBI.jpeg" },
      { name: "İrem Ece Derman" },
      { name: "Mahnoor Atta", instagram: "mahnooratta", image: "/images/team/IMG_9944 - MAHNOOR ATTA.jpeg" },
      { name: "Melisa Aksoy", image: "/images/team/73B0CDAD-FBC6-4FB4-A72C-43217D1A5308 - MELISA AKSOY.jpeg" },
      { name: "Nazlıcan Yüksek", instagram: "nazliys", quote: "\"en kötü hissettiğin anda dans etmeye devam et, orası bi şeylerin değiştiği yerdir\"", image: "/images/team/IMG-20241031-WA0052 - NAZLICAN YUKSEK.jpg" },
      { name: "Nur Gelen", instagram: "nur_gelen", quote: "Benim için dans, sadece bedensel bir hareket değil, içsel dengeyi bularak etrafımdaki enerjilerle bütün olmak🩷", image: "/images/team/nur kudans - KADRIYENUR GELEN.jpg" },
      { name: "Özüm Paşa", instagram: "Ozum_ps", image: "/images/team/IMG_3391 - OZUM PASA.jpeg" },
      { name: "Pervin Manap" },
      { name: "Polen Çevik" },
      { name: "Selena Özkaner" },
      { name: "Selinsu Naz Varlı", instagram: "nazzvarli", quote: "Dance or die 🌟", image: "/images/team/IMG_3018 - SELINSU NAZ VARLI.jpeg" },
      { name: "Selin Lea Klein" },
      { name: "Selin Yücetin" },
      { name: "Simay Akıncı" },
      { name: "Sofiia Salopino" },
      { name: "Tuana Hoş", instagram: "_tuanahos", image: "/images/team/IMG_7546 - TUANA HOS.jpeg" },
      { name: "Valentin Py", instagram: "valentin.py", quote: "Exchange 2024 - 2025", image: "/images/team/Screenshot_20250503_183003_WhatsApp - VALENTIN PY.jpg" },
      { name: "Zeynep Akın" },
      { name: "Zeynep Özveri", instagram: "zeynepozveri_", image: "/images/team/IMG_2344 - ZEYNEP OZVERI.jpeg" },
    ]
  },
  {
    name: "Social Latin",
    dancers: [
      { name: "Ahmet Efe Yakut", instagram: "ahmetefe_yakut", quote: "Carpe diem", image: "/images/team/IMG_20250428_162041 - AHMET EFE YAKUT.jpg" },
      { name: "Ahmet Emre Şentürk", quote: "algı gerçeğin önüne geçer", image: "/images/team/IMG_0131 - AHMET EMRE SENTURK.jpeg" },
      { name: "Asil Söylev", instagram: "asil_soylev", quote: "Son akış bitene kadar devam et", image: "/images/team/IMG_9990 - ASIL SOYLEV.jpeg" },
      { name: "Ata Öz" },
      { name: "Ayşe Sarı", instagram: "aysessariii", quote: "Zamanı tutamıyorum belki ama dans ederken yavaşlatabiliyorum", image: "/images/team/IMG_4643 - AYSE SARI.jpeg" },
      { name: "Barkın Gıcır", instagram: "barkingicir", image: "/images/team/IMG_5644 4 - BARKIN GICIR.jpeg" },
      { name: "Bora Çağılcı" },
      { name: "Burak Kahvecioğlu", image: "/images/team/E2A146FB-3983-4657-B4B1-CAF142C7AD27 - burak kahvecioğlu.jpeg" },
      { name: "Ece Derman" },
      { name: "Elvan Kimyon", instagram: "elvankimyon", image: "/images/team/IMG_0055 - Elvan Kimyon.jpeg" },
      { name: "Ennur Akan", instagram: "ennurakan", quote: "Binllleeerce dansöööz var", image: "/images/team/IMG_4034 - ENNUR AKAN.jpeg" },
      { name: "Ezgi Bekiroğlu", instagram: "ezgibekirogluu", image: "/images/team/IMG_0292 - EZGI BEKIROGLU.jpeg" },
      { name: "Kutay Keleş" },
      { name: "Neslisu Demirel" },
      { name: "Pervin Manap" },
      { name: "Polen Çevik" },
      { name: "Ramazan Efe Demirel" },
      { name: "Selin Lea Klein" },
      { name: "Selin Yücetin" },
      { name: "Şevval Bekmez" },
      { name: "Toygun Samatlı" },
      { name: "Zeynep İlhan" },
    ]
  },
  {
    name: "International Ballroom",
    dancers: [
      { name: "Başak Karamalak", instagram: "basakkaramalak_", image: "/images/team/IMG_5275 - BASAK KARAMALAK.jpeg" },
      { name: "Berkay Koruyucu" },
      { name: "Derin Su Ergüz" },
      { name: "Düşüm Naz Haşhaş", instagram: "dsmnaz", quote: "Latinin aurası, Ballroomun asilliği benim dansa karşı tutkumu oluşturuyor", image: "/images/team/IMG_6391 - DUSUM NAZ HASHAS.jpeg" },
      { name: "Ece Mollaoğlu", instagram: "ece.mollaoglu", quote: "Sometimes I bend the music to my will; sometimes I surrender to a melody only we hear.", image: "/images/team/IMG_4408 - Ece Mollaoğlu.jpeg" },
      { name: "Eren Trabzon" },
      { name: "Nisan Dökmeci", instagram: "nisandokmeci", quote: "Sanata gönül vermiş bir insan.", image: "/images/team/I_14384 - NISAN DOKMECI.jpeg" },
      { name: "Ömer Güralp", instagram: "omerguralp_", image: "/images/team/ac27c9ab-1dbb-4dff-aac2-6906f74a6a35 - Omar.jpeg" },
      { name: "Özlem Ürküt", instagram: "ozlemrkut", quote: "Dance first, think later. It's natural order and movement of her own life", image: "/images/team/IMG_8069 - Ozlem Urkut.jpeg" },
      { name: "Tufan Karabaş", instagram: "tufan.krbs", quote: "The show must go on.", image: "/images/team/5 _ 1. (1) - TUFAN KARABAS.jpg" },
    ]
  },
  {
    name: "Modern",
    dancers: [
      { name: "Ali Ozan Beşen", instagram: "ozanbesen", quote: "Her şey emeğin olacak!", image: "/images/team/WhatsApp Image 2025-04-29 at 21.13.07 - ALI OZAN BESEN.jpeg" },
      { name: "Altuğ Çağhan Arslan" },
      { name: "Belgin Karakoç", instagram: "belgin.karakoc", quote: "dreamer dancer translater of Jar", image: "/images/team/IMG_6544 - BELGIN KARAKOC.png" },
      { name: "Candan Aydiş", instagram: "candanaydis", quote: "tesadüfen geldim karar verince gideceğim", image: "/images/team/IMG_2676 - NUR CANDAN AYDIS.jpeg" },
      { name: "Cansu Pınar Çırpan", image: "/images/team/4d1161b0-8cf7-44a0-9a5d-e6379caeb7a5 - CANSU PINAR CIRPAN.jpeg" },
      { name: "Cemre Yavuz" },
      { name: "Ceyda Çelik" },
      { name: "Eda Yalçın" },
      { name: "Gülce Sevim", instagram: "gulce.sevim", image: "/images/team/IMG_2337 - GULCE SEVIM.jpeg" },
      { name: "Irmak Bozkurt" },
      { name: "Kayrahan Yüce", instagram: "kayrahanyuce", quote: "Gündüzleri fotoğrafçı akşamları dansçı olan mühendislik öğrencisi", image: "/images/team/0494CA17-ACA0-4AB8-B411-C9062C4C3E5A - KAYRAHAN YUCE.jpeg" },
      { name: "Nisan Dökmeci", instagram: "nisandokmeci", quote: "Sanata gönül vermiş bir insan.", image: "/images/team/I_14384 - NISAN DOKMECI.jpeg" },
      { name: "Rinda Yurttaş", instagram: "rindayurttas", quote: "Her zaman pozitif.", image: "/images/team/IMG_3465 - RINDA YURTTAS.jpg" },
      { name: "Selin Dinç", quote: "Hayatımı mühendislikle ve sürekli yeni şeyler keşfetmekle şekillendiriyorum; durmak yok.", image: "/images/team/IMG_1512 3 - SELIN DINC.jpg" },
      { name: "Zeynep Duru Güngör", quote: "flexible mind flexible body", image: "/images/team/IMG_2139 - ZEYNEP DURU GORGUN.jpeg" },
    ]
  },
];

export const metadata = {
  title: "KUDANS - Koç University Dance Club",
  description: "Official website of KUDANS - Koç University Dance Club",
  openGraph: {
    title: "KUDANS - Koç University Dance Club",
    description: "Official website of KUDANS - Koç University Dance Club",
    url: "https://kudans.co",
    siteName: "KUDANS",
    locale: "tr_TR",
    type: "website",
  },
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-12">
      <div className="container-custom">
        <h1 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          KUDANS Team
        </h1>

        <div className="space-y-20">
          {danceTeams.map((team) => (
            <section key={team.name} className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <h2 className="text-3xl font-bold mb-10 text-center relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {team.name}
                </span>
                <div className="h-1 w-40 bg-white bg-opacity-40 rounded-full mx-auto mt-3"></div>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {team.dancers.map((dancer) => {
                  const dancerId = dancer.name.toLowerCase().replace(/\s+/g, '-');
                  const isEmir = dancer.name === "Emir Göcen";
                  return (
                    <div
                      key={dancer.name}
                      id={dancerId}
                      className={`scroll-mt-24 relative flex flex-col items-center bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-3xl shadow-xl p-0 overflow-hidden transition-all duration-300 group hover:shadow-2xl hover:border-purple-500 hover:-translate-y-2 ${isEmir ? 'border-4 border-yellow-400 shadow-[0_0_32px_8px_rgba(255,215,0,0.4)]' : 'border border-gray-700'}`}
                    >
                      <div className="relative w-full h-56 overflow-hidden group rounded-b-none rounded-t-3xl">
                        {dancer.image ? (
                          <Image
                            src={dancer.image}
                            alt={`${dancer.name} - KUDANS Team Dancer`}
                            fill
                            className={`object-cover transition-transform duration-500 group-hover:scale-105 ${isEmir ? 'grayscale-0 saturate-150' : ''}`}
                            loading="lazy"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          />
                        ) : (
                          <DefaultProfile name={dancer.name} />
                        )}
                        {/* Gradient overlay from image to card */}
                        <div className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(23,23,23,0.85) 100%)'}} />
                        {/* Golden badge for Emir Göcen */}
                        {isEmir && (
                          <div className="absolute top-3 left-3 z-20 flex flex-col items-center">
                            <svg className="w-12 h-12 drop-shadow-xl animate-spin-slow" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="32" cy="32" r="30" fill="#FFD700" stroke="#F59E42" strokeWidth="4" />
                              <path d="M32 16L35.27 26.52L46.18 26.54L37.82 33.14L41.09 43.66L32 37.53L22.91 43.66L26.18 33.14L17.82 26.54L28.73 26.52L32 16Z" fill="#FFF7CC" />
                            </svg>
                            <span className="mt-1 text-yellow-300 font-bold text-xs drop-shadow-lg">Creator</span>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col flex-1 w-full px-6 py-6 items-center justify-between">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <h3 className={`font-bold text-2xl text-white text-center drop-shadow-lg ${isEmir ? 'text-yellow-300' : ''}`}> 
                            {dancer.name}
                          </h3>
                        </div>
                        {/* Creator label for Emir Göcen */}
                        {isEmir && (
                          <div className="text-xs text-yellow-200 font-bold mb-2 text-center bg-yellow-900/30 px-3 py-1 rounded-full shadow-lg">creator of this website</div>
                        )}
                        {dancer.quote && (
                          <p className={`text-gray-400 text-sm italic mb-3 text-center leading-snug ${isEmir ? 'text-yellow-100' : ''}`}>"{dancer.quote}"</p>
                        )}
                        <div className="flex-1" />
                        {dancer.instagram && (
                          <div className="w-full flex justify-center mt-2">
                            {isEmir ? (
                              <a
                                href={`https://instagram.com/${dancer.instagram}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-full text-black text-base font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 border-2 border-yellow-300"
                              >
                                <svg
                                  className="w-5 h-5 mr-2"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                {dancer.instagram.replace('@', '')}
                              </a>
                            ) : (
                              <a
                                href={`https://instagram.com/${dancer.instagram}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full text-white text-base font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400"
                              >
                                <svg
                                  className="w-5 h-5 mr-2"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                {dancer.instagram.replace('@', '')}
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
} 