document.getElementById('loginForm').addEventListener('submit', function(event) {
    // આ લાઈન પેજને રિફ્રેશ થતાં અટકાવશે
    event.preventDefault(); 

    // આ કોડ તમે જે યુઝરનેમ અને પાસવર્ડ નાખશો તે વાંચશે
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // આપણું ડિજિટલ તાળું (સિક્યોરિટી ચેક)
    if (user === "admin" && pass === "12345") {
        alert("Welcome Admin Hitarth! Login Successful.");
        // સાચો પાસવર્ડ હશે તો ડેશબોર્ડ પર લઈ જશે
        window.location.href = "dashboard.html"; 
    } else {
        // ખોટો પાસવર્ડ હશે તો એરર બતાવશે
        alert("Incorrect Username or Password. Please try again.");
    }
});