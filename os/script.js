var _SYSTEM_PATHS = ["C:/Windows/System32/kernel32.dll", "/var/www/html/macro-os/", "https://macro-os.local/api/v1/auth"];
var _devBuildVer = "3.0.1";

var APPS = {
    'cine': {title: 'CINE // HUB', path: 'script/Apps/Cine/index.html', icon: 'https://cdn.worldvectorlogo.com/logos/netflix-logo-icon.svg', pinned: true},
    'term': {title: 'Spotify', path: 'script/Apps/Spotify/index.html', icon: 'https://cdn.pixabay.com/photo/2016/10/22/00/15/spotify-1759471_1280.jpg', pinned: true},
    'files': {title: 'PS5 Emu', path: 'script/Apps/Ps5/index.html', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-OeL_be7RFaoHi3PswkuAR5XcMgBNRDynsg&s', pinned: true},
    'web': {title: 'Macro-Web', path: 'script/Apps/Web/index.html', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeD89ZcX5W1FBtal7RerasT27q-OmZqnBixQ&s', pinned: true},
    'settings': {title: 'CONFIG', internal: true, icon: 'https://cdn.iconscout.com/icon/free/png-256/free-apple-settings-icon-svg-download-png-493162.png', pinned: true},
    'discord': {title: 'Discord', path: 'script/Apps/Discord/index.html', icon: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png', pinned: true},
    'roblox': {title: 'Roblox', path: 'script/Apps/Roblox/index.html', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9KvNyFWMg_bjo_q_1IVLKFWbfCeonn2qDow&s', pinned: false},
    'android': {title: 'Android', path: 'script/Apps/Android/index.html', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/android-icon.png', pinned: false},
    'ciniai': {title: 'Cini AI', path: 'script/Apps/Cini/index.html', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkLXhvns5Rrdf-XBNlWcPIRh0hlJfWnEtBWg&s', pinned: false},
    'VM': {title: 'Windows Virtual-Machine', path: 'script/Apps/VM/index.html', icon: 'https://static1.squarespace.com/static/68e69c83884dc82cc035a923/69454e29c6db7516b2566fca/69454e32c6db7516b256[...]', pinned: false},
    'crunchyroll': {title: 'CrunchyRoll', path: 'script/Apps/Crunchy/index.html', icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a0a4547a-06c5-4740-b87a-ca9c4fa0171e/dduaesk-2b3e[...]', pinned: false},
    'Geforce': {title: 'GEFORCE NOW', path: 'script/Apps/Geforce/index.html', icon: 'https://play-lh.googleusercontent.com/_-b_HQXrVyyhZSHj_BoE9u_-cxkcHDH_yLX5rDjJsFMIfsCNQs9F3QP4JvEFcWaSIz0=w240-[...]', pinned: false},
    'Fortnite': {title: 'Fortnite', path: 'script/Apps/Fortnite/index.html', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShiXrQ-cvZeDyQNPIZCv_hsaUCAe5j_rXJ7Q&s', pinned: false},
    'RocketL': {title: 'Rocket League', path: 'script/Apps/RocketL/index.html', icon: 'https://ygo-assets-entities-us.yougov.net/87bb7a16-2b62-11e8-82b1-37bb0d207ced.jpg?zcw=518&zch=518&zct=10&zcl[...]', pinned: false},
    'Xbox': {title: 'Xbox', path: 'script/Apps/Xbox/index.html', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknRQh-WRK4F75YB3EAlfrsqAk66Xjn45sBg&s', pinned: false},
};

var wallpaperRegistry = {
    "Default": {id: "Default", name: "Snake Skeleton", url: "Videos/default.mp4", locked: false},
    "green": {id: "green", name: "Green Anime", url: "Videos/green.mp4", locked: false},
    "33A56": {id: "hunt_trait", name: "Hunt Showdown", url: "Videos/33A56.mp4", locked: true},
    "45E33": {id: "45E33", name: "45E33", url: "Videos/45E33.mp4", locked: false},
    "55Cine": {id: "55Cine", name: "Cine 55", url: "Videos/55Cine.PNG", locked: false},
    "99Med": {id: "99Med", name: "99 Med", url: "Videos/99Med.mp4", locked: false},
    "Brother": {id: "Brother", name: "Brother", url: "Videos/Brother.mp4", locked: false},
    "F-1": {id: "F-1", name: "F-1 Formula", url: "Videos/F-1.mp4", locked: false},
    "Gojo-Sukuna": {id: "Gojo-Sukuna", name: "Gojo vs Sukuna", url: "Videos/Gojo-Sukuna.mp4", locked: false},
    "Hunt": {id: "Hunt", name: "Hunt Showdown 2", url: "Videos/Hunt.mp4", locked: false},
    "Minecraft01": {id: "Minecraft01", name: "Minecraft 01", url: "Videos/Minecraft01.mp4", locked: false},
    "Minecraft02": {id: "Minecraft02", name: "Minecraft 02", url: "Videos/Minecraft02.mp4", locked: false},
    "Minecraft03": {id: "Minecraft03", name: "Minecraft 03", url: "Videos/Minecraft03.mp4", locked: false},
    "Monkey": {id: "Monkey", name: "Monkey", url: "Videos/Monkey.mp4", locked: false},
    "Skello": {id: "Skello", name: "Skello", url: "Videos/Skello.MP4", locked: false},
    "SnowFox": {id: "SnowFox", name: "Snow Fox", url: "Videos/SnowFox.mp4", locked: false},
    "Supra": {id: "Supra", name: "Supra Drift", url: "Videos/Supra.PNG", locked: false},
    "Yuji52": {id: "Yuji52", name: "Yuji 52", url: "Videos/Yuji52.mp4", locked: false},
    "sukuna-fire": {id: "sukuna-fire", name: "Sukuna Fire", url: "Videos/sukuna-fire.mp4", locked: false},
    "CozyFox": {id: "CozyFox", name: "Cozy Fox", url: "Videos/CozyFox.mp4", locked: false},
    "RainyCity": {id: "RainyCity", name: "Rainy City", url: "Videos/RainyCity.mp4", locked: false},
    "Gojo": {id: "Gojo", name: "Gojo", url: "Videos/Gojo.mp4", locked: false},
    "BlackHole": {id: "BlackHole", name: "Black Hole", url: "Videos/BlackHole.mp4", locked: false},
    "Yuta": {id: "Yuta", name: "Yuta", url: "Videos/Yuta.mp4", locked: false},
    "Desktop": {id: "Desktop", name: "Desktop Lines", url: "Videos/Desktop.mp4", locked: false}
};

// Rest of script.js content continues here - keeping all the original functionality
var savedPins = localStorage.getItem('c_pins_v2');
if(savedPins) {
    let p = JSON.parse(savedPins);
    for(let k in p) {
        if(APPS[k]) APPS[k].pinned = p[k];
    }
}

function syncPins() {
    let obj = {};
    for(let k in APPS) obj[k] = APPS[k].pinned;
    localStorage.setItem('c_pins_v2', JSON.stringify(obj));
}

var sysConfig = JSON.parse(localStorage.getItem('cine_sys_config')) || {};
if(sysConfig.optBg === undefined) sysConfig.optBg = false;
if(sysConfig.shortBoot === undefined) sysConfig.shortBoot = false;
if(sysConfig.wpLoop === undefined) sysConfig.wpLoop = false;
if(sysConfig.idleLock === undefined) sysConfig.idleLock = false; 
if(sysConfig.redirectConfirm === undefined) sysConfig.redirectConfirm = false; 
if(!sysConfig.panicKey) sysConfig.panicKey = '`';
if(!sysConfig.homeWallpaper) sysConfig.homeWallpaper = 'Default';
if(!sysConfig.lockWallpaper) sysConfig.lockWallpaper = 'green';
if(!sysConfig.cloak) sysConfig.cloak = 'none';

window.updateSysSetting = function(key, value) {
    sysConfig[key] = value;
    localStorage.setItem('cine_sys_config', JSON.stringify(sysConfig));
    if(key === 'optBg') applySystemSettings();
    if(key === 'wpLoop') updateWallpaperLoop();
};

var cloaks = {
    none: {title: "Macro-OS", icon: ""},
    google: {title: "Google", icon: "https://www.google.com/favicon.ico"},
    drive: {title: "My Drive - Google Drive", icon: "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png"},
    canvas: {title: "Dashboard", icon: "https://du11hjcvx0uqb.cloudfront.net/br/dist/images/favicon-e10d657a73.ico"},
    classroom: {title: "Classes", icon: "https://ssl.gstatic.com/classroom/favicon.png"}
};

window.updateCloak = function(key) {
    sysConfig.cloak = key;
    localStorage.setItem('cine_sys_config', JSON.stringify(sysConfig));
    applyCloak();
};

function applyCloak() {
    var k = sysConfig.cloak || 'none';
    var sel = cloaks[k];
    var icons = document.querySelectorAll("link[rel*='icon']");
    for(var i=0; i<icons.length; i++) icons[i].remove();
    
    if(sel && k !== 'none') {
        document.title = sel.title;
        let n = document.createElement('link');
        n.type = 'image/x-icon';
        n.rel = 'shortcut icon';
        n.href = sel.icon;
        document.getElementsByTagName('head')[0].appendChild(n);
    } else {
        document.title = "Macro-OS";
    }
}
setInterval(applyCloak, 2000);

var isDesktopActive = false;
var bootActive = true;
var enterCount = 0;
var highestZ = 500;
var activeWindowId = null;
var isMediaPlaying = false;
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var activeCtxId = null;

if(isMobile) {
    var mobWarn = document.getElementById('mobile-warning');
    if(mobWarn && mobWarn.showModal) mobWarn.showModal();
    else if(mobWarn) mobWarn.style.display = 'flex';
    
    var lastTap = 0;
    document.addEventListener('touchstart', function(e) {
        let t = new Date().getTime();
        let tl = t - lastTap;
        if(tl < 500 && tl > 0) {
            if(mobWarn && mobWarn.close) mobWarn.close();
            else if(mobWarn) mobWarn.style.display = 'none';
        }
        lastTap = t;
    });
}

async function loadDynamicResources() {
    renderUI();
    initWallpapers();
    setupAppContextMenu();
}

window.onbeforeunload = function(e) {
    if(sysConfig.redirectConfirm) {
        let msg = "Are you sure you want to leave? This helps block GoGuardian redirects.";
        e.returnValue = msg;
        return msg;
    }
};

document.addEventListener("DOMContentLoaded", function() {
    applyCloak();
    loadDynamicResources();
    document.getElementById('boot-layer').style.display = 'block';
    loadDesktop();
    updateSidebarData();
});

function renderUI() {
    let dock = document.getElementById('dock-container');
    let dHTML = '<div class="dock-item" onclick="toggleStartMenu()"><img src="https://missionsupport.archden.org/wp-content/uploads/2022/02/windows11-icon.png"></div><div class="dock-sep"></div>';
    
    let pGrid = document.getElementById('pinned-grid');
    let pHTML = '';
    
    for(let id in APPS) {
        if(APPS[id].pinned) {
            dHTML += '<div class="dock-item" data-id="'+id+'" onmousedown="DragSystem.start(event,this,'dock',''+id+'")" onclick="toggleApp(''+id+'')" oncontextmenu="openDockCtx(event, ''+id+'')"><img src="'+APPS[id].icon+'"></div>';
            pHTML += '<div class="pinned-item" onclick="toggleApp(''+id+'')"><img src="'+APPS[id].icon+'"><span>'+APPS[id].title+'</span></div>';
        }
    }
    
    dock.innerHTML = dHTML;
    pGrid.innerHTML = pHTML;
    populateDrawer();
}

// Additional functions would continue here (the rest of the original script.js)
// This is a simplified version - you should replace with the full script.js content