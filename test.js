const mn = document.getElementById("name");
const m = document.getElementById("model");
const bn = document.getElementById("brand");
const os = document.getElementById("os");
const ver = document.getElementById("ver");
const sh = document.getElementById("sheight");
const sw = document.getElementById("swidth");
const rh = document.getElementById("rheight");
const rw = document.getElementById("rwidth");
const b = document.getElementById("browser");
const bv = document.getElementById("browser_version");
const cdn = document.getElementById("complete_device_name");

console.log(WURFL)
console.log(WURFL.complete_device_name)

mn.innerHTML = WURFL.marketing_name;
m.innerHTML = WURFL.model_name;
bn.innerHTML = WURFL.brand_name;
os.innerHTML = WURFL.advertised_device_os;
ver.innerHTML = WURFL.advertised_device_os_version;
sh.innerHTML = WURFL.physical_screen_height;
sw.innerHTML = WURFL.physical_screen_width;
rh.innerHTML = WURFL.resolution_height;
rw.innerHTML = WURFL.resolution_width;
b.innerHTML = WURFL.advertised_browser;
bv.innerHTML = WURFL.advertised_browser_version;
cdn.innerHTML = WURFL.complete_device_name;
