# 2 - oy Imtihon

## Oylik Imtihon Talablari: Trello-ga O'xshash REST Xizmat Yaratish

### Maqsad:

Ushbu imtihonning maqsadi sizning RESTful xizmat yaratish bo'yicha o'z bilim va ko'nikmangizni namoyish etish uchun. Siz PostgreSQL ma'lumotlar bazasi bilan integratsiyalashgan to'liq CRUD (~~Create~~, Read, Update, Delete) operatsiyalarni amalga oshiradigan RESTful API yaratishiz kerak bo’ladi.

### Imtihon Topshiriqlari:

1. **GitHub Repozitoriyasini Yaratish:**
    - Yangi GitHub repo yaratish: `nodejs-trello-service`.
    - Repozitoriya manzili `https://github.com/%your-github%/nodejs-trello-service` bo'lishi kerak.
2. **Resurslar va CRUD Operatsiyalar:**
    - Quyidagi resurslar bilan ishlovchi REST endpointlar yaratish:
    - `POST /setUp`  routega murojat qilinganda tablelar yo’q bo’lsa yaratilsin.
    - **Autentifikatsiya:**
        - Ro'yxatdan o'tish (`/register`) va kirish (`/login`) endpointlarini yarating:
            - `POST /register`:
                - Foydalanuvchi ro'yxatdan o'tishi uchun endpoint.
                - Ma'lumotlar bazasiga foydalanuvchini passwordini `bcrypt` bilan hashlab  saqlanadi va foydalanuvchi ma'lumotlarini qaytarish kerak! (javobdan parolni olib tashlash!).
        - `POST /login`:
            - Foydalanuvchi tizimga kirishi uchun endpoint.
            - Foydalanuvchini `login` va `parol` orqali tekshiriladi, agar ma'lumotlar to'g'ri bo'lsa, foydalanuvchi ma'lumotlarini qaytaradi (parolni javobdan olib tashlash).
    - **User (Foydalanuvchi)**:
        
        ```jsx
        { id, name, email, password }
        
        ```
        
        - `GET /users` - barcha foydalanuvchilarni olish (javobdan parolni olib tashlash).
        - `GET /users/:userId` - foydalanuvchini ID bo'yicha olish (javobdan parolni olib tashlash).
        - `PUT /users/:userId` - foydalanuvchini yangilash.
        - `DELETE /users/:userId` - foydalanuvchini o'chirish.
    - **Board (Doskalar)**:
        
        ```jsx
        { id, title, columns }
        ```
        
        - `GET /boards` - barcha doskalarni olish.
        - `GET /boards/:boardId` - doskani ID bo'yicha olish.
        - `POST /boards` - doska yaratish.
        - `PUT /boards/:boardId` - doskani yangilash.
        - `DELETE /boards/:boardId` - doskani o'chirish.
    - **Task (Vazifalar)**:
        
        ```jsx
        {
          id,
          title,
          order,
          description,
          userId, 
          boardId,
          columnId
        }
        ```
        
        - `GET boards/:boardId/tasks` - barcha vazifalarni olish.
        - `GET boards/:boardId/tasks/:taskId` - vazifani ID bo'yicha olish.
        - `POST boards/:boardId/tasks` - vazifa yaratish.
        - `PUT boards/:boardId/tasks/:taskId` - vazifani yangilash.
        - `DELETE boards/:boardId/tasks/:taskId` - vazifani o'chirish.
        - 
3. **Qo'shimcha Talablar:**
    - **Board** o'chirilganda, uning barcha **Task**lari ham o'chirilishi kerak.
    - **User** o'chirilganda, uning barcha **Task**lari uchun `userId` `null`ga o'zgartirilishi kerak.
    - Endpointlar faqat   ma'lumotlar bazasi bilan ishlashligi kerak.
    - `application/json` formati so'rov va javoblar uchun ishlatilishi kerak.
    - Kodni bitta faylda saqlamang - ilova yaratish, **routerlar** (**controllers**) , **database** va  biznes mantiqiga oid kodlarni alohida fayllarga ajrating.
    - Projectni ishga  tushirish uchun `npm start` buyrug'ini ishlating.
    - Xizmat 4000-portda tinglash kerak.
4. **Ma'lumotlar Bazasi:**
    - Ma'lumotlar bazasi sifatida PostgreSQLdan foydalaning. `drawSQL`dan foydalanib, ma'lumotlar bazasini loyihalashtiring.
    - `pg` moduli orqali PostgreSQLni Node.jsga ulash:
        - `pg` modulini o'rnating.
        - Bazaga yozishdan oldin userning passwordini `bcrypt` bilan hashlab joylash kerak!.
        - Bazaga ulaning va CRUD operatsiyalarni amalga oshiring.
- API larni test qilish uchun postmandan foydalanish kerak!.
    - Postmanda folder ochib oling va har bir eng pointni o’ziga tegishle folderga saqlab keting.
    - Projectni yuklash vaqtida postmandan siz foydalangan folderni export qilib oling!.

### Vaqt:

- Imtihon muddati: 4 soat

### Imtihon muvaffaqiyatli bo'lishi uchun yuqoridagi barcha talablarga rioya qilishingiz kerak. Omad! 😎.

# `BONUS`

> Bonus faqatgina avvalgi tasklarni tugatganlar uchun agarda yakunlamagan bo’lsangiz avvl tugating!. Yuqoridagi task yakunlagandan so’ng bonusga o’tish mumkin va shundagina ball qo’shiladi!.
> 

- Siz qo’shilishi kerak deb bilagan functionni qo’shing va [`README.md`](http://README.md) da shu haqida qisqacha tavsif qoldiring!.