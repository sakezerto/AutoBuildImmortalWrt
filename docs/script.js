// === Device Data ===
const DEVICES = {
  "x86-64": {
    workflow: "build-x86-64-24.10.x.yml",
    workflow23: "build-x86-64-23.05.4.yml",
    devices: [
      { id: "generic", name: "x86-64 Generic (EFI)", soc: "Intel / AMD", desc: "EFI + Legacy BIOS" },
      { id: "generic-iso", name: "x86-64 ISO Installer", soc: "Intel / AMD", desc: "ISO" }
    ]
  },
  "rockchip": {
    workflow: "build-rockchip-immortalWrt-24.10.x.yml",
    workflow23: "build-rockchip-immortalWrt-23.05.4.yml",
    devices: [
      { id: "ariaboard_photonicat", name: "Ariaboard Photonicat", soc: "RK3588" },
      { id: "armsom_sige3", name: "ArmSoM Sige3", soc: "RK3568" },
      { id: "armsom_sige7", name: "ArmSoM Sige7", soc: "RK3588" },
      { id: "cyber_cyber3588-aib", name: "Cyber 3588-AIB", soc: "RK3588" },
      { id: "ezpro_mrkaio-m68s", name: "EZPro MRKaio M68S", soc: "RK3568" },
      { id: "firefly_roc-rk3328-cc", name: "Firefly ROC-RK3328-CC", soc: "RK3328" },
      { id: "firefly_roc-rk3568-pc", name: "Firefly ROC-RK3568-PC", soc: "RK3568" },
      { id: "friendlyarm_nanopc-t4", name: "FriendlyARM NanoPC-T4", soc: "RK3399" },
      { id: "friendlyarm_nanopc-t6", name: "FriendlyARM NanoPC-T6", soc: "RK3588" },
      { id: "friendlyarm_nanopi-r2c", name: "FriendlyARM NanoPi R2C", soc: "RK3328" },
      { id: "friendlyarm_nanopi-r2c-plus", name: "FriendlyARM NanoPi R2C Plus", soc: "RK3328" },
      { id: "friendlyarm_nanopi-r2s", name: "FriendlyARM NanoPi R2S", soc: "RK3328" },
      { id: "friendlyarm_nanopi-r3s", name: "FriendlyARM NanoPi R3S", soc: "RK3568" },
      { id: "friendlyarm_nanopi-r4s", name: "FriendlyARM NanoPi R4S", soc: "RK3399" },
      { id: "friendlyarm_nanopi-r4se", name: "FriendlyARM NanoPi R4SE", soc: "RK3399" },
      { id: "friendlyarm_nanopi-r4s-enterprise", name: "FriendlyARM NanoPi R4S Enterprise", soc: "RK3399" },
      { id: "friendlyarm_nanopi-r5c", name: "FriendlyARM NanoPi R5C", soc: "RK3568" },
      { id: "friendlyarm_nanopi-r5s", name: "FriendlyARM NanoPi R5S", soc: "RK3568" },
      { id: "friendlyarm_nanopi-r6c", name: "FriendlyARM NanoPi R6C", soc: "RK3588" },
      { id: "friendlyarm_nanopi-r6s", name: "FriendlyARM NanoPi R6S", soc: "RK3588" },
      { id: "huake_guangmiao-g4c", name: "Huake Guangmiao G4C", soc: "RK3568" },
      { id: "linkease_easepi-r1", name: "Linkease EasePi R1", soc: "RK3568" },
      { id: "lunzn_fastrhino-r66s", name: "FastRhino R66S", soc: "RK3568" },
      { id: "lunzn_fastrhino-r68s", name: "FastRhino R68S", soc: "RK3588" },
      { id: "lyt_t68m", name: "LYT T68M", soc: "RK3568" },
      { id: "pine64_rock64", name: "Pine64 ROCK64", soc: "RK3328" },
      { id: "pine64_rockpro64", name: "Pine64 ROCKPro64", soc: "RK3399" },
      { id: "radxa_cm3_io", name: "Radxa CM3 IO", soc: "RK3566" },
      { id: "radxa_e25", name: "Radxa E25", soc: "RK3568" },
      { id: "radxa_rock-3a", name: "Radxa ROCK 3A", soc: "RK3568" },
      { id: "radxa_rock-3b", name: "Radxa ROCK 3B", soc: "RK3568" },
      { id: "radxa_rock-3c", name: "Radxa ROCK 3C", soc: "RK3568" },
      { id: "radxa_rock-5a", name: "Radxa ROCK 5A", soc: "RK3588S" },
      { id: "radxa_rock-5b", name: "Radxa ROCK 5B", soc: "RK3588" },
      { id: "radxa_rock-pi-4a", name: "Radxa ROCK Pi 4A", soc: "RK3399" },
      { id: "radxa_rock-pi-e", name: "Radxa ROCK Pi E", soc: "RK3328" },
      { id: "radxa_rock-pi-s", name: "Radxa ROCK Pi S", soc: "RK3308" },
      { id: "radxa_zero-3e", name: "Radxa ZERO 3E", soc: "RK3566" },
      { id: "radxa_zero-3w", name: "Radxa ZERO 3W", soc: "RK3566" },
      { id: "sinovoip_bpi-r2-pro", name: "BananaPi BPI-R2 Pro", soc: "RK3568" },
      { id: "xunlong_orangepi-5", name: "OrangePi 5", soc: "RK3588S" },
      { id: "xunlong_orangepi-5-plus", name: "OrangePi 5 Plus", soc: "RK3588" },
      { id: "xunlong_orangepi-r1-plus", name: "OrangePi R1 Plus", soc: "RK3328" },
      { id: "xunlong_orangepi-r1-plus-lts", name: "OrangePi R1 Plus LTS", soc: "RK3328" }
    ]
  },
  "raspberry": {
    workflow: "build-RaspBerryPi-24.10.x.yml",
    workflow23: "build-RaspBerryPi-23.05.4.yml",
    devices: [
      { id: "rpi-1", name: "Raspberry Pi 1 Model B", soc: "BCM2835 (ARMv6)" },
      { id: "rpi-2", name: "Raspberry Pi 2 Model B", soc: "BCM2836 (ARMv7)" },
      { id: "rpi-3", name: "Raspberry Pi 3 Model B", soc: "BCM2837 (Cortex-A53)" },
      { id: "rpi-3-plus", name: "Raspberry Pi 3 Model B+", soc: "BCM2837B0" },
      { id: "rpi-4", name: "Raspberry Pi 4 Model B", soc: "BCM2711 (Cortex-A72)" },
      { id: "rpi-5", name: "Raspberry Pi 5", soc: "BCM2712 (Cortex-A76)" }
    ]
  },
  "sunxi": {
    workflow: "build-sunxi-cortexa53-24.10.x.yml",
    workflow23: "build-sunxi-cortexa53-23.05.4.yml",
    devices: [
      { id: "xunlong_orangepi-zero3", name: "OrangePi Zero3", soc: "H618" },
      { id: "friendlyarm_nanopi-r1s-h5", name: "NanoPi R1S H5", soc: "H5" },
      { id: "xunlong_orangepi-zero2", name: "OrangePi Zero2", soc: "H616" },
      { id: "xunlong_orangepi-zero-plus", name: "OrangePi Zero Plus", soc: "H5" },
      { id: "friendlyarm_nanopi-neo2", name: "NanoPi NEO2", soc: "H5" },
      { id: "xunlong_orangepi-pc2", name: "OrangePi PC2", soc: "H5" },
      { id: "friendlyarm_nanopi-neo-plus2", name: "NanoPi NEO Plus2", soc: "H5" },
      { id: "libretech_all-h3-cc-h5", name: "Libre Computer H5", soc: "H5" },
      { id: "pine64_pine64-plus", name: "Pine64 Plus", soc: "A64" },
      { id: "pine64_sopine-baseboard", name: "Pine64 SOPine", soc: "A64" }
    ]
  },
  "mediatek": {
    workflow: "build-wireless-router.yml",
    devices: [
      { id: "glinet_gl-mt3000", name: "GL.iNet GL-MT3000", soc: "MT7981B" },
      { id: "glinet_gl-mt2500", name: "GL.iNet GL-MT2500", soc: "MT7981B" },
      { id: "glinet_gl-mt6000", name: "GL.iNet GL-MT6000", soc: "MT7986A" },
      { id: "glinet_gl-x3000", name: "GL.iNet GL-X3000", soc: "MT7981B" },
      { id: "glinet_gl-xe3000", name: "GL.iNet GL-XE3000", soc: "MT7981B" },
      { id: "cudy_tr3000-v1", name: "Cudy TR3000 V1", soc: "MT7981B" },
      { id: "cudy_tr3000-v1-ubootmod", name: "Cudy TR3000 V1 (uboot-mod)", soc: "MT7981B" },
      { id: "cudy_wr3000-v1", name: "Cudy WR3000 V1", soc: "MT7981B" },
      { id: "cudy_wr3000e-v1", name: "Cudy WR3000E V1", soc: "MT7981B" },
      { id: "cudy_wr3000h-v1", name: "Cudy WR3000H V1", soc: "MT7981B" },
      { id: "cudy_wr3000s-v1", name: "Cudy WR3000S V1", soc: "MT7981B" },
      { id: "xiaomi_mi-router-ax3000t", name: "Xiaomi AX3000T", soc: "MT7981B" },
      { id: "xiaomi_mi-router-ax3000t-ubootmod", name: "Xiaomi AX3000T (uboot-mod)", soc: "MT7981B" },
      { id: "xiaomi_mi-router-wr30u-stock", name: "Xiaomi WR30U (stock)", soc: "MT7981B" },
      { id: "xiaomi_mi-router-wr30u-ubootmod", name: "Xiaomi WR30U (uboot-mod)", soc: "MT7981B" },
      { id: "xiaomi_redmi-router-ax6000-stock", name: "Redmi AX6000 (stock)", soc: "MT7986A" },
      { id: "xiaomi_redmi-router-ax6000-ubootmod", name: "Redmi AX6000 (uboot-mod)", soc: "MT7986A" },
      { id: "cmcc_rax3000m", name: "CMCC RAX3000M", soc: "MT7981B" },
      { id: "cmcc_rax3000m-emmc-ubootmod", name: "CMCC RAX3000M eMMC (uboot-mod)", soc: "MT7981B" },
      { id: "cmcc_rax3000m-nand-ubootmod", name: "CMCC RAX3000M NAND (uboot-mod)", soc: "MT7981B" },
      { id: "cmcc_a10", name: "CMCC A10", soc: "MT7981B" },
      { id: "h3c_magic-nx30-pro", name: "H3C Magic NX30 Pro", soc: "MT7981B" },
      { id: "jcg_q30", name: "JCG Q30", soc: "MT7981B" },
      { id: "jcg_q30-pro", name: "JCG Q30 Pro", soc: "MT7981B" },
      { id: "nokia_ea0326gmp", name: "Nokia EA0326GMP", soc: "MT7981B" },
      { id: "qihoo_360t7", name: "Qihoo 360T7", soc: "MT7981B" },
      { id: "netcore_n60", name: "Netcore N60", soc: "MT7986A" },
      { id: "tplink_tl-xdr4288", name: "TP-Link TL-XDR4288", soc: "MT7986A" },
      { id: "tplink_tl-xdr6086", name: "TP-Link TL-XDR6086", soc: "MT7986A" },
      { id: "tplink_tl-xdr6088", name: "TP-Link TL-XDR6088", soc: "MT7986A" },
      { id: "asus_tuf-ax4200", name: "ASUS TUF-AX4200", soc: "MT7986A" },
      { id: "asus_tuf-ax6000", name: "ASUS TUF-AX6000", soc: "MT7986A" },
      { id: "bananapi_bpi-r3", name: "BananaPi BPI-R3", soc: "MT7986A" },
      { id: "bananapi_bpi-r4", name: "BananaPi BPI-R4", soc: "MT7988A" },
      { id: "openwrt_one", name: "OpenWrt One", soc: "MT7981B" },
      { id: "routerich_ax3000", name: "Routerich AX3000", soc: "MT7981B" },
      { id: "cetron_ct3003", name: "Cetron CT3003", soc: "MT7981B" },
      { id: "livinet_zr-3020", name: "Livinet ZR-3020", soc: "MT7981B" },
      { id: "netgear_wax220", name: "Netgear WAX220", soc: "MT7986B" },
      { id: "ruijie_rg-x60-pro", name: "Ruijie RG-X60 Pro", soc: "MT7986A" },
      { id: "jdcloud_re-cp-03", name: "JDCloud RE-CP-03", soc: "MT7986A" }
    ]
  },
  "qemu-arm64": {
    workflow: "build-QEMU-arm64-24.10.x.yml",
    devices: [
      { id: "generic", name: "QEMU ARM64 Generic", soc: "ARM Cortex-A53/A72", desc: "qcow2 format" }
    ]
  },
  "n1": {
    workflow: "build-N1.yml",
    devices: [
      { id: "phicomm-n1", name: "Phicomm N1", soc: "Amlogic S905D", desc: "Flippy" }
    ]
  },
  "amlogic": {
    workflow: "build-boxs-by-ophub.yml",
    devices: [
      { id: "s905", name: "Amlogic S905 Boxes", soc: "S905" },
      { id: "s905x2", name: "Amlogic S905X2 Boxes", soc: "S905X2" },
      { id: "s905x3", name: "Amlogic S905X3 Boxes", soc: "S905X3" },
      { id: "s912", name: "Amlogic S912 Boxes", soc: "S912" },
      { id: "s922x", name: "Amlogic S922X Boxes", soc: "S922X" },
      { id: "h28k", name: "HINLINK H28K", soc: "S905X3" },
      { id: "h66k", name: "HINLINK H66K", soc: "S922X" },
      { id: "h68k", name: "HINLINK H68K", soc: "S922X" },
      { id: "h69k", name: "HINLINK H69K", soc: "S922X" },
      { id: "h88k", name: "HINLINK H88K", soc: "S922X" },
      { id: "e20c", name: "Radxa E20C", soc: "RK3528A" },
      { id: "rock5b", name: "Radxa ROCK 5B", soc: "RK3588" },
      { id: "jp-tvbox", name: "JP TV Box", soc: "S905X3" }
    ]
  }
};

// === Packages Data ===
const PACKAGES = {
  "Proxy / VPN": [
    { id: "luci-i18n-passwall-zh-cn", name: "Passwall", desc: "Proxy" },
    { id: "luci-app-passwall2", name: "Passwall2", desc: "Proxy" },
    { id: "luci-app-ssr-plus", name: "SSR Plus+", desc: "Proxy" },
    { id: "luci-app-openclash", name: "OpenClash", desc: "Clash" },
    { id: "luci-i18n-homeproxy-zh-cn", name: "HomeProxy", desc: "Proxy" },
    { id: "luci-i18n-nikki-zh-cn", name: "Nikki", desc: "Proxy" },
    { id: "luci-app-nekobox", name: "NekoBox", desc: "Proxy" },
    { id: "luci-app-momo", name: "Momo", desc: "Proxy" },
    { id: "luci-app-tailscale", name: "Tailscale", desc: "VPN" },
    { id: "luci-app-easytier", name: "EasyTier", desc: "Mesh VPN" },
    { id: "luci-i18n-ipsec-vpnd-zh-cn", name: "IPSec VPN", desc: "VPN Server" }
  ],
  "DNS / Ad-Block": [
    { id: "luci-app-mosdns", name: "MosDNS", desc: "DNS" },
    { id: "luci-app-adguardhome", name: "AdGuard Home", desc: "DNS Ad-Block" }
  ],
  "Themes": [
    { id: "luci-theme-aurora", name: "Aurora", desc: "Theme" },
    { id: "luci-theme-kucat", name: "Kucat", desc: "Theme" },
    { id: "luci-app-argon-config", name: "Argon Config", desc: "Theme Config" }
  ],
  "Network / Acceleration": [
    { id: "luci-app-turboacc", name: "Turbo ACC", desc: "Net Acceleration" },
    { id: "luci-app-appfilter", name: "App Filter", desc: "Application Filter" },
    { id: "luci-app-lucky", name: "Lucky", desc: "Port Forward" },
    { id: "luci-app-netwizard", name: "Net Wizard", desc: "Setup Wizard" },
    { id: "luci-i18n-quickstart-zh-cn", name: "Quick Start", desc: "Home Page" }
  ],
  "Storage / Sharing": [
    { id: "luci-app-samba4", name: "Samba4", desc: "File Sharing" },
    { id: "luci-app-unishare", name: "Unishare", desc: "WebDAV" },
    { id: "luci-i18n-dufs-zh-cn", name: "DUFS", desc: "File Server" }
  ],
  "System / Tools": [
    { id: "luci-app-store", name: "iStore", desc: "App Store" },
    { id: "luci-app-docker", name: "Docker", desc: "Container" },
    { id: "luci-app-partexp", name: "Partition Expand", desc: "Disk" },
    { id: "luci-app-advancedplus", name: "Advanced Settings", desc: "System" },
    { id: "luci-app-netspeedtest", name: "Net Speed Test", desc: "Benchmark" },
    { id: "luci-app-taskplan", name: "Task Plan", desc: "Scheduler" },
    { id: "luci-app-uninstall", name: "Advanced Uninstall", desc: "Tools" },
    { id: "luci-app-gecoosac", name: "GecoOS AC", desc: "AC Controller" }
  ],
  "Media / Monitor": [
    { id: "luci-app-rtp2httpd", name: "RTP2HTTPd", desc: "IPTV Streaming" },
    { id: "luci-app-bandix", name: "Bandix", desc: "Traffic Monitor" }
  ]
};

// === GitHub Repo Info ===
const REPO_OWNER = "sakezerto";
const REPO_NAME = "autobuildimmortalwrt";
const REPO_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}`;

// === State ===
let currentTarget = "x86-64";
let currentDevice = null;

// === Init ===
document.addEventListener("DOMContentLoaded", () => {
  renderDevices();
  renderPackages();
  renderDeviceTable();
  updateBuildLink();

  // PPPoE toggle
  document.getElementById("enable-pppoe").addEventListener("change", (e) => {
    document.getElementById("pppoe-config").style.display = e.target.checked ? "block" : "none";
  });

  // Update build link on config change
  document.getElementById("luci-version").addEventListener("change", updateBuildLink);
});

// === Target Selection ===
function selectTarget(btn) {
  document.querySelectorAll(".target-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  currentTarget = btn.dataset.target;
  currentDevice = null;
  renderDevices();
  updateBuildLink();
}

// === Device Rendering ===
function renderDevices() {
  const list = document.getElementById("device-list");
  const devices = DEVICES[currentTarget]?.devices || [];
  list.innerHTML = devices.map((d, i) => `
    <div class="device-item ${i === 0 ? 'active' : ''}" data-id="${d.id}" onclick="selectDevice(this, '${d.id}')">
      <span class="device-model">${d.name}</span>
      <span class="device-info">${d.soc}${d.desc ? ' | ' + d.desc : ''}</span>
    </div>
  `).join("");

  if (devices.length > 0) {
    currentDevice = devices[0].id;
  }
}

function selectDevice(el, id) {
  document.querySelectorAll(".device-item").forEach(d => d.classList.remove("active"));
  el.classList.add("active");
  currentDevice = id;
  updateBuildLink();
}

function filterDevices() {
  const q = document.getElementById("device-search").value.toLowerCase();
  document.querySelectorAll(".device-item").forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(q) ? "" : "none";
  });
}

// === Package Rendering ===
function renderPackages() {
  const container = document.getElementById("pkg-categories");
  container.innerHTML = Object.entries(PACKAGES).map(([cat, pkgs]) => `
    <div class="pkg-category" data-category="${cat}">
      <h3>${cat}</h3>
      <div class="pkg-list">
        ${pkgs.map(p => `
          <label class="pkg-item" data-name="${p.name.toLowerCase()} ${p.id.toLowerCase()}">
            <input type="checkbox" value="${p.id}">
            <span class="pkg-name">${p.name}</span>
            <span class="pkg-desc">${p.desc}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function filterPackages() {
  const q = document.getElementById("pkg-search").value.toLowerCase();
  document.querySelectorAll(".pkg-item").forEach(item => {
    const name = item.dataset.name;
    item.style.display = name.includes(q) ? "" : "none";
  });
}

function togglePackages() {
  const el = document.getElementById("packages-content");
  el.style.display = el.style.display === "none" ? "block" : "none";
}

// === Device Table ===
function renderDeviceTable() {
  const tbody = document.getElementById("devices-table-body");
  const rows = [];
  for (const [target, data] of Object.entries(DEVICES)) {
    for (const d of data.devices) {
      rows.push(`<tr>
        <td>${target}</td>
        <td>${d.name}</td>
        <td>${d.id}</td>
        <td>${d.soc}</td>
        <td>24.10.x</td>
      </tr>`);
    }
  }
  tbody.innerHTML = rows.join("");
}

function toggleDeviceTable() {
  const el = document.getElementById("devices-table-content");
  el.style.display = el.style.display === "none" ? "block" : "none";
}

// === Build Link ===
function updateBuildLink() {
  const targetData = DEVICES[currentTarget];
  if (!targetData) return;

  const version = document.getElementById("luci-version").value;
  const is23 = version.startsWith("23.05");
  const workflow = is23 && targetData.workflow23 ? targetData.workflow23 : targetData.workflow;

  const buildUrl = `${REPO_URL}/actions/workflows/${workflow}`;
  document.getElementById("build-link").href = buildUrl;

  const releaseUrl = `${REPO_URL}/releases`;
  document.getElementById("release-link").href = releaseUrl;
}
