# Design

https://www.tldraw.com/ro/LyMvsthJexP8YYskawKom?v=-2566,-2803,3847,2135&p=page

# Curriculum

Sprint 5-6-7: Neler öğrendik?

[ ] DOM kavramı
[ ] DOM manipülasyonu
  [ ] Class add, remove, contains
  [ ] query selector'lar
  [ ] get... metodları (getElementById vb.)
  [ ] createElement
  [ ] appendChild
[ ] Event listeners
  [ ] event handler functions
[ ] HTML'e JS ekleme yöntemleri

[+] HTML form & form elements
[+] axios
[+] components
  [+] Döngüleri kullanma
[+] React
[+] hook'lar
  [+] useState
  [+] useEffect
    [+] React Router @5
    [+] useHistory
  [+] useParams
    [+] Switch, BrowserRouter, Route, Link, NavLink, Redirect
    [+] Functional Component
[+] import&export
  [+] default
  [+] named
[+] React ile Form yönetimi
  [+] controlled input
  [+] checkbox, radio button, select
  [+] form validasyonu
[+] testler
  [+] cypress
  [+] E2E testleri
[+] harice kütüphaneler ile çalışma
  [+] styled-components
  [+] reactstrap
[+] vite framwork'ü ile sıfırdan react projesi oluşturma


## REACT FORM YÖNETİMİ

1. stateleri tanımla
   1. formData [Object]
   2. errors [Object]
   3. isValid [Boolean]
2. Form'u kodla
   1. value'ları state'den al (controlled input)
   2. label'ları unutma!
   3. error mesajlarını input alanlarının altına yazmayı unutma
   4. form elemanları ve errorlar için onChange handler'ı yaz
   5. onSubmit için submit handler'ı yaz
      1. preventDefault'u kullan.
      2. axios isteği ile datayı POST et.
3. Validasyonları yaz (onChange handler'da)
   1. validasyondan geçemez ise error state'ini hata mesajı ile güncelle
4. isValid kontrolünü useEffect'de yaz.
   1. submit butonuna disabled attribute'u olarak isValid'i ekle