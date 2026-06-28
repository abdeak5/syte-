// ==========================================================================
// 1. Translations & Bilingual UI Support
// ==========================================================================
const translations = {
  ar: {
    pageTitle: "إجتماع داخلي - اجتماعات الشركة",
    loginTitle: "إجتماع داخلي",
    loginSubtitle: "اجتماعات الشركة الداخلية الكلاسيكية",
    labelUsername: "اسم المستخدم:",
    usernamePlaceholder: "مثال: أحمد محمد",
    labelCameraSelect: "الكاميرا (الفيديو):",
    labelMicSelect: "الميكروفون (الصوت):",
    optCamLoading: "جاري البحث عن كاميرات...",
    optMicLoading: "جاري البحث عن ميكروفونات...",
    btnStartCall: "بدء المكالمة",
    footerNote: "كل الحقوق محفوظة 2026",
    roomStatusTitle: "مكالمة جماعية نشطة",
    appLogoText: "إجتماع داخلي",
    localParticipantLabel: "أنت (محلي)",
    tabChat: "الدردشة",
    tabParticipants: "النشطين",
    tabFiles: "الملفات",
    tabArchive: "الأرشيف",
    tabSettings: "الأجهزة",
    chatPlaceholder: "اكتب رسالة فورية هنا...",
    btnChatSend: "إرسال",
    sendFileTitle: "إرسال ملف للمشاركين",
    sendFileHelp: "الحد الأقصى للملف هو 100 ميغابايت. يتم إرسال الملف مباشرة P2P.",
    btnSelectFile: "اختر ملفاً",
    filesTransferTitle: "حالة النقل والملفات",
    archiveTitle: "سجل الاجتماعات السابقة",
    archiveHelp: "اعرض رسائل وملفات الاجتماعات السابقة المؤرشفة.",
    modalArchiveTitle: "تفاصيل الاجتماع المؤرشف",
    modalSessionDate: "التاريخ: {0}",
    modalSessionDuration: "المدة: {0}",
    btnShowArchivedMsgs: "الرسائل",
    btnShowArchivedFiles: "الملفات المشتركة",
    archiveListEmpty: "لا توجد اجتماعات مؤرشفة بعد.",
    archiveFilesEmpty: "لم يتم مشاركة أي ملفات في هذا الاجتماع.",
    archiveMsgsEmpty: "لا توجد رسائل دردشة في هذا الاجتماع.",
    archiveLiveLabel: "نشط حالياً",
    archiveDurationMin: "{0} دقيقة",
    archiveDurationSec: "{0} ثانية",
    settingPerfTitle: "تحسين الأداء",
    btnPerfBoostOn: "تحسين الأداء: مفعل ⚡",
    btnPerfBoostOff: "تحسين الأداء: مغلق",
    perfHelpText: "عند التفعيل، يتم خفض استهلاك المعالج عن طريق ضبط الدقة والإطارات تلقائياً حسب نوع جهازك.",
    settingCameraTitle: "تغيير الكاميرا النشطة",
    settingCameraHelp: "اختر الكاميرا المفضلة وسيتم التحديث تلقائياً لدى جميع الحضور.",
    settingMicTitle: "تغيير الميكروفون النشط",
    settingMicHelp: "اختر الميكروفون لالتقاط صوتك بشكل أوضح.",
    btnMicLabelMute: "كتم الصوت",
    btnMicLabelUnmute: "تشغيل الصوت",
    btnVideoLabelOff: "إيقاف الفيديو",
    btnVideoLabelOn: "تشغيل الفيديو",
    btnShareLabel: "المشاركة",
    btnHandLabel: "رفع اليد",
    btnFilesLabel: "الملفات",
    btnLeaveLabel: "إنهاء",
    participantSuffixSelf: "(أنت)",
    participantsCountSuffix: "مشاركين",
    toastJoinSelf: "أهلاً بك في الاجتماع، {0}!",
    toastJoinPeer: "انضم {0} إلى الاجتماع",
    toastLeavePeer: "غادر {0} الاجتماع",
    toastMuteSelf: "تم كتم الصوت",
    toastUnmuteSelf: "تم تشغيل الصوت",
    toastCamOffSelf: "تم إيقاف الكاميرا",
    toastCamOnSelf: "تم تشغيل الكاميرا",
    toastScreenShareOn: "أنت تشارك الشاشة الآن",
    toastScreenShareOff: "تم إيقاف مشاركة الشاشة",
    toastHandRaiseSelf: "لقد قمت برفع يدك ✋",
    toastHandRaisePeer: "{0} قام برفع اليد ✋",
    toastCamChangeSuccess: "تم تبديل الكاميرا بنجاح",
    toastMicChangeSuccess: "تم تبديل الميكروفون بنجاح",
    fileSendSuccess: "تم إرسال الملف بنجاح: {0}",
    fileReceiveSuccess: "تم استلام الملف بنجاح: {0}",
    fileTransferFailed: "فشل نقل الملف: {0}",
    fileLimitError: "الحد الأقصى لحجم الملف هو 100 ميغابايت!"
  },
  en: {
    pageTitle: "Internal Meeting - Company Meetings",
    loginTitle: "Internal Meeting",
    loginSubtitle: "Classic internal company meetings",
    labelUsername: "Username:",
    usernamePlaceholder: "e.g. John Doe",
    labelCameraSelect: "Camera (Video):",
    labelMicSelect: "Microphone (Audio):",
    optCamLoading: "Searching for cameras...",
    optMicLoading: "Searching for microphones...",
    btnStartCall: "Start Call",
    footerNote: "All Rights Reserved 2026",
    roomStatusTitle: "Active Conference Call",
    appLogoText: "Internal Meeting",
    localParticipantLabel: "You (Local)",
    tabChat: "Chat",
    tabParticipants: "Participants",
    tabFiles: "Files",
    tabArchive: "Archive",
    tabSettings: "Devices",
    chatPlaceholder: "Type an instant message here...",
    btnChatSend: "Send",
    sendFileTitle: "Send File to Peers",
    sendFileHelp: "Maximum file size is 100MB. Files are sent directly via P2P.",
    btnSelectFile: "Choose File",
    filesTransferTitle: "Transfer Status & Files",
    archiveTitle: "Past Meeting Records",
    archiveHelp: "View messages and files from archived past meetings.",
    modalArchiveTitle: "Archived Meeting Details",
    modalSessionDate: "Date: {0}",
    modalSessionDuration: "Duration: {0}",
    btnShowArchivedMsgs: "Messages",
    btnShowArchivedFiles: "Shared Files",
    archiveListEmpty: "No archived meetings yet.",
    archiveFilesEmpty: "No files shared during this meeting.",
    archiveMsgsEmpty: "No chat messages in this meeting.",
    archiveLiveLabel: "Active Now",
    archiveDurationMin: "{0} min",
    archiveDurationSec: "{0} sec",
    settingPerfTitle: "Performance Boost",
    btnPerfBoostOn: "Performance Boost: ON ⚡",
    btnPerfBoostOff: "Performance Boost: OFF",
    perfHelpText: "When enabled, CPU usage is lowered by automatically tuning resolution and FPS based on your device.",
    settingCameraTitle: "Change Active Camera",
    settingCameraHelp: "Choose your preferred camera; it updates automatically for all peers.",
    settingMicTitle: "Change Active Microphone",
    settingMicHelp: "Choose your microphone to capture your voice clearly.",
    btnMicLabelMute: "Mute",
    btnMicLabelUnmute: "Unmute",
    btnVideoLabelOff: "Camera Off",
    btnVideoLabelOn: "Camera On",
    btnShareLabel: "Share",
    btnHandLabel: "Raise Hand",
    btnFilesLabel: "Files",
    btnLeaveLabel: "Leave",
    participantSuffixSelf: "(You)",
    participantsCountSuffix: "participants",
    toastJoinSelf: "Welcome to the meeting, {0}!",
    toastJoinPeer: "{0} joined the meeting",
    toastLeavePeer: "{0} left the meeting",
    toastMuteSelf: "Audio muted",
    toastUnmuteSelf: "Audio unmuted",
    toastCamOffSelf: "Camera turned off",
    toastCamOnSelf: "Camera turned on",
    toastScreenShareOn: "You are now sharing your screen",
    toastScreenShareOff: "Screen sharing stopped",
    toastHandRaiseSelf: "You raised your hand ✋",
    toastHandRaisePeer: "{0} raised their hand ✋",
    toastCamChangeSuccess: "Camera switched successfully",
    toastMicChangeSuccess: "Microphone switched successfully",
    fileSendSuccess: "File sent successfully: {0}",
    fileReceiveSuccess: "File received successfully: {0}",
    fileTransferFailed: "File transfer failed: {0}",
    fileLimitError: "Maximum file size allowed is 100MB!"
  }
};

let currentLang = localStorage.getItem('meeting_lang') || 'ar';

function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('meeting_lang', lang);
  
  // Set html direction and class
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  if (lang === 'ar') {
    document.body.classList.remove('ltr-mode');
  } else {
    document.body.classList.add('ltr-mode');
  }

  // Translate static UI elements
  const t = translations[lang];
  document.getElementById('page-title').textContent = t.pageTitle;
  document.getElementById('login-title').textContent = t.loginTitle;
  document.getElementById('login-subtitle').textContent = t.loginSubtitle;
  document.getElementById('label-username').textContent = t.labelUsername;
  document.getElementById('username').placeholder = t.usernamePlaceholder;
  document.getElementById('label-camera-select').textContent = t.labelCameraSelect;
  document.getElementById('label-mic-select').textContent = t.labelMicSelect;
  
  const optCam = document.getElementById('opt-cam-loading');
  if (optCam) optCam.textContent = t.optCamLoading;
  const optMic = document.getElementById('opt-mic-loading');
  if (optMic) optMic.textContent = t.optMicLoading;
  
  document.getElementById('btn-start-call-text').textContent = t.btnStartCall;
  document.getElementById('footer-note-text').textContent = t.footerNote;
  document.getElementById('room-status-title').textContent = t.roomStatusTitle;
  document.getElementById('app-logo-text').textContent = t.appLogoText;
  document.getElementById('local-participant-label').textContent = t.localParticipantLabel;
  
  document.getElementById('tab-chat-label').textContent = t.tabChat;
  document.getElementById('tab-participants-label').textContent = t.tabParticipants;
  document.getElementById('tab-files-label').textContent = t.tabFiles;
  document.getElementById('tab-archive-label').textContent = t.tabArchive;
  document.getElementById('tab-settings-label').textContent = t.tabSettings;
  document.getElementById('chat-input').placeholder = t.chatPlaceholder;
  document.getElementById('btn-chat-send').textContent = t.btnChatSend;
  
  document.getElementById('send-file-title').textContent = t.sendFileTitle;
  document.getElementById('send-file-help').textContent = t.sendFileHelp;
  document.getElementById('btn-select-file-label').textContent = t.btnSelectFile;
  document.getElementById('files-transfer-title').textContent = t.filesTransferTitle;

  document.getElementById('archive-title').textContent = t.archiveTitle;
  document.getElementById('archive-help').textContent = t.archiveHelp;
  document.getElementById('modal-archive-title').textContent = t.modalArchiveTitle;
  document.getElementById('btn-show-archived-msgs').textContent = t.btnShowArchivedMsgs;
  document.getElementById('btn-show-archived-files').textContent = t.btnShowArchivedFiles;
  
  document.getElementById('setting-perf-title').textContent = t.settingPerfTitle;
  document.getElementById('btn-perf-boost-label').textContent = perfBoostActive ? t.btnPerfBoostOn : t.btnPerfBoostOff;
  document.getElementById('perf-help-text').textContent = t.perfHelpText;
  document.getElementById('setting-camera-title').textContent = t.settingCameraTitle;
  document.getElementById('setting-camera-help').textContent = t.settingCameraHelp;
  document.getElementById('setting-mic-title').textContent = t.settingMicTitle;
  document.getElementById('setting-mic-help').textContent = t.settingMicHelp;
  
  document.getElementById('btn-mic-label').textContent = isMuted ? t.btnMicLabelUnmute : t.btnMicLabelMute;
  document.getElementById('btn-video-label').textContent = isVideoOff ? t.btnVideoLabelOn : t.btnVideoLabelOff;
  document.getElementById('btn-share-label').textContent = t.btnShareLabel;
  document.getElementById('btn-hand-label').textContent = t.btnHandLabel;
  document.getElementById('btn-files-label').textContent = t.btnFilesLabel;
  document.getElementById('btn-leave-label').textContent = t.btnLeaveLabel;

  // Toggle language switcher button texts
  document.getElementById('btn-lang-toggle').textContent = lang === 'ar' ? 'English' : 'العربية';
  document.getElementById('btn-room-lang-toggle').textContent = lang === 'ar' ? 'English' : 'العربية';

  updateParticipantsList();
  renderArchiveListLocally();
}

function formatString(str, ...args) {
  return str.replace(/{(\d+)}/g, (match, number) => {
    return typeof args[number] !== 'undefined' ? args[number] : match;
  });
}

// ==========================================================================
// 2. Connection and WebRTC Configurations
// ==========================================================================
const socket = io();
const rtcConfig = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' },
    { urls: 'stun:stun2.l.google.com:19302' },
    {
      urls: 'turn:openrelay.metered.ca:80',
      username: 'openrelayproject',
      credential: 'openrelayproject'
    },
    {
      urls: 'turn:openrelay.metered.ca:443',
      username: 'openrelayproject',
      credential: 'openrelayproject'
    },
    {
      urls: 'turn:openrelay.metered.ca:443?transport=tcp',
      username: 'openrelayproject',
      credential: 'openrelayproject'
    }
  ]
};

// Application State
let localStream = null;
let screenStream = null;
let localId = null;
let userName = '';
let isMuted = false;
let isVideoOff = false;
let isHandRaised = false;
let isScreenSharing = false;
let perfBoostActive = false;
let archiveListCached = [];

// WebRTC connections map: peerId -> RTCPeerConnection
const peerConnections = {};
// User state metadata map: peerId -> { id, name, is_muted, is_video_off, is_hand_raised }
const peersState = {};
// WebRTC DataChannels for file P2P transfers: peerId -> RTCDataChannel
const fileChannels = {};

// DOM Elements
const loginScreen = document.getElementById('login-screen');
const meetingRoom = document.getElementById('meeting-room');
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const videoGrid = document.getElementById('video-grid');
const localVideo = document.getElementById('local-video');
const participantCount = document.getElementById('participant-count');

// Device Selectors
const loginCameraSelect = document.getElementById('login-camera-select');
const loginMicSelect = document.getElementById('login-mic-select');
const roomCameraSelect = document.getElementById('room-camera-select');
const roomMicSelect = document.getElementById('room-mic-select');

// Control Buttons
const btnToggleMic = document.getElementById('btn-toggle-mic');
const btnToggleVideo = document.getElementById('btn-toggle-video');
const btnScreenShare = document.getElementById('btn-screen-share');
const btnRaiseHand = document.getElementById('btn-raise-hand');
const btnLeave = document.getElementById('btn-leave');
const btnSendFiles = document.getElementById('btn-send-files');
const meetingSidebar = document.getElementById('meeting-sidebar');
const sidebarBackdrop = document.getElementById('sidebar-backdrop');

// Sidebar Tabs & Panels
const chatTabBtn = document.getElementById('chat-tab-btn');
const participantsTabBtn = document.getElementById('participants-tab-btn');
const filesTabBtn = document.getElementById('files-tab-btn');
const archiveTabBtn = document.getElementById('archive-tab-btn');
const settingsTabBtn = document.getElementById('settings-tab-btn');

const chatPanel = document.getElementById('chat-panel');
const participantsPanel = document.getElementById('participants-panel');
const filesPanel = document.getElementById('files-panel');
const archivePanel = document.getElementById('archive-panel');
const settingsPanel = document.getElementById('settings-panel');

const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessagesContainer = document.getElementById('chat-messages-container');
const participantsListContainer = document.getElementById('participants-list-container');
const archiveListContainer = document.getElementById('archive-list-container');

// Local Overlays
const localMicBadge = document.getElementById('local-mic-badge');
const localHandBadge = document.getElementById('local-hand-badge');

// Language Switcher Triggers
document.getElementById('btn-lang-toggle').addEventListener('click', () => {
  changeLanguage(currentLang === 'ar' ? 'en' : 'ar');
});
document.getElementById('btn-room-lang-toggle').addEventListener('click', () => {
  changeLanguage(currentLang === 'ar' ? 'en' : 'ar');
});

// ==========================================================================
// 3. Performance Booster & Device Utils
// ==========================================================================
function isMobile() {
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent);
}

const btnPerfBoost = document.getElementById('btn-perf-boost');
btnPerfBoost.addEventListener('click', async () => {
  perfBoostActive = !perfBoostActive;
  btnPerfBoost.classList.toggle('active', perfBoostActive);
  
  const t = translations[currentLang];
  document.getElementById('btn-perf-boost-label').textContent = perfBoostActive ? t.btnPerfBoostOn : t.btnPerfBoostOff;
  
  showToast(
    currentLang === 'ar' 
      ? (perfBoostActive ? "تم تمكين وضع تحسين الأداء ⚡" : "تم إيقاف تحسين الأداء") 
      : (perfBoostActive ? "Performance boost enabled ⚡" : "Performance boost disabled"), 
    'success'
  );

  // Apply new video constraints
  if (roomCameraSelect.value) {
    await changeCamera(roomCameraSelect.value);
  }
});

// ==========================================================================
// 4. Device Enumeration & Setup
// ==========================================================================
async function setupDeviceSelectors() {
  try {
    await navigator.mediaDevices.getUserMedia({ audio: true, video: true }).catch(() => {});
    const devices = await navigator.mediaDevices.enumerateDevices();
    
    loginCameraSelect.innerHTML = '';
    loginMicSelect.innerHTML = '';
    roomCameraSelect.innerHTML = '';
    roomMicSelect.innerHTML = '';

    let cameraCount = 0;
    let micCount = 0;

    devices.forEach(device => {
      if (device.kind === 'videoinput') {
        cameraCount++;
        const label = device.label || `كاميرا ${cameraCount}`;
        
        const opt1 = document.createElement('option');
        opt1.value = device.deviceId;
        opt1.textContent = label;
        loginCameraSelect.appendChild(opt1);

        const opt2 = document.createElement('option');
        opt2.value = device.deviceId;
        opt2.textContent = label;
        roomCameraSelect.appendChild(opt2);
      } else if (device.kind === 'audioinput') {
        micCount++;
        const label = device.label || `ميكروفون ${micCount}`;

        const opt1 = document.createElement('option');
        opt1.value = device.deviceId;
        opt1.textContent = label;
        loginMicSelect.appendChild(opt1);

        const opt2 = document.createElement('option');
        opt2.value = device.deviceId;
        opt2.textContent = label;
        roomMicSelect.appendChild(opt2);
      }
    });

    const t = translations[currentLang];
    if (cameraCount === 0) {
      const opt = `<option value="">${t.loginSubtitle.includes("Classic") ? "No camera available" : "لا توجد كاميرا متوفرة"}</option>`;
      loginCameraSelect.innerHTML = opt;
      roomCameraSelect.innerHTML = opt;
    }
    if (micCount === 0) {
      const opt = `<option value="">${t.loginSubtitle.includes("Classic") ? "No microphone available" : "لا يوجد ميكروفون متوفر"}</option>`;
      loginMicSelect.innerHTML = opt;
      roomMicSelect.innerHTML = opt;
    }

  } catch (err) {
    console.error('❌ Failed to enumerate devices:', err);
  }
}

setupDeviceSelectors();

roomCameraSelect.addEventListener('change', async () => {
  const deviceId = roomCameraSelect.value;
  if (deviceId) {
    await changeCamera(deviceId);
    loginCameraSelect.value = deviceId;
  }
});

roomMicSelect.addEventListener('change', async () => {
  const deviceId = roomMicSelect.value;
  if (deviceId) {
    await changeMicrophone(deviceId);
    loginMicSelect.value = deviceId;
  }
});

// ==========================================================================
// 5. Media Hot-Swapping Engine
// ==========================================================================
async function changeCamera(deviceId) {
  if (!localStream) return;
  try {
    let width = 640, height = 360, fps = 30;
    if (perfBoostActive) {
      if (isMobile()) {
        width = 480; height = 270; fps = 15;
      } else {
        width = 1280; height = 720; fps = 24;
      }
    } else {
      width = 1280; height = 720; fps = 30;
    }

    const newStream = await navigator.mediaDevices.getUserMedia({
      video: {
        deviceId: { exact: deviceId },
        width: { ideal: width },
        height: { ideal: height },
        frameRate: { ideal: fps }
      },
      audio: false
    });

    const newVideoTrack = newStream.getVideoTracks()[0];
    const oldVideoTrack = localStream.getVideoTracks()[0];

    if (oldVideoTrack) {
      localStream.removeTrack(oldVideoTrack);
      oldVideoTrack.stop();
    }
    localStream.addTrack(newVideoTrack);
    newVideoTrack.enabled = !isVideoOff;

    if (!isScreenSharing) {
      replaceVideoTrack(newVideoTrack);
      localVideo.srcObject = localStream;
    }

    showToast(translations[currentLang].toastCamChangeSuccess, 'success');
  } catch (err) {
    console.error('❌ Failed to change camera:', err);
  }
}

async function changeMicrophone(deviceId) {
  if (!localStream) return;
  try {
    const newStream = await navigator.mediaDevices.getUserMedia({
      audio: { deviceId: { exact: deviceId } },
      video: false
    });

    const newAudioTrack = newStream.getAudioTracks()[0];
    const oldAudioTrack = localStream.getAudioTracks()[0];

    if (oldAudioTrack) {
      localStream.removeTrack(oldAudioTrack);
      oldAudioTrack.stop();
    }
    localStream.addTrack(newAudioTrack);
    newAudioTrack.enabled = !isMuted;

    for (const id in peerConnections) {
      const pc = peerConnections[id];
      const audioSender = pc.getSenders().find(s => s.track && s.track.kind === 'audio');
      if (audioSender) {
        await audioSender.replaceTrack(newAudioTrack);
      }
    }
    showToast(translations[currentLang].toastMicChangeSuccess, 'success');
  } catch (err) {
    console.error('❌ Failed to change microphone:', err);
  }
}

// ==========================================================================
// 6. Meeting Room Join & Login
// ==========================================================================
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  userName = usernameInput.value.trim();
  if (!userName) return;

  const selectedCamId = loginCameraSelect.value;
  const selectedMicId = loginMicSelect.value;

  try {
    let width = 640, height = 360, fps = 30;
    if (perfBoostActive) {
      if (isMobile()) {
        width = 480; height = 270; fps = 15;
      } else {
        width = 1280; height = 720; fps = 24;
      }
    }

    const constraints = {
      video: selectedCamId ? { deviceId: { exact: selectedCamId }, width: { ideal: width }, height: { ideal: height }, frameRate: { ideal: fps } } : { width: { ideal: width }, height: { ideal: height }, frameRate: { ideal: fps } },
      audio: selectedMicId ? { deviceId: { exact: selectedMicId } } : true
    };

    try {
      localStream = await navigator.mediaDevices.getUserMedia(constraints);
      localVideo.srcObject = localStream;
    } catch (mediaError) {
      console.warn('❌ Failed to load specific settings, fallback to defaults:', mediaError);
      try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;
      } catch (err) {
        localStream = createDummyStream();
        isVideoOff = true;
        isMuted = true;
        btnToggleVideo.classList.add('muted');
        btnToggleMic.classList.add('muted');
      }
    }

    socket.emit('join-room', { name: userName });

    if (selectedCamId) roomCameraSelect.value = selectedCamId;
    if (selectedMicId) roomMicSelect.value = selectedMicId;

  } catch (err) {
    console.error('❌ Login Error:', err);
  }
});

function createDummyStream() {
  const canvas = document.createElement('canvas');
  canvas.width = 320;
  canvas.height = 180;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ffffff';
  ctx.font = '14px Cairo';
  ctx.fillText(currentLang === 'ar' ? 'لا تتوفر كاميرا' : 'Camera Unavailable', 100, 90);

  const videoStream = canvas.captureStream(10);
  const videoTrack = videoStream.getVideoTracks()[0];

  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const dst = audioCtx.createMediaStreamDestination();
  oscillator.connect(dst);
  const audioTrack = dst.stream.getAudioTracks()[0];

  return new MediaStream([videoTrack, audioTrack]);
}

// ==========================================================================
// 7. WebRTC Mesh Core Engine & Signaling
// ==========================================================================
socket.on('room-joined', ({ selfId, users, chatHistory }) => {
  localId = selfId;
  
  loginScreen.classList.add('hidden');
  meetingRoom.classList.remove('hidden');
  meetingRoom.classList.add('fade-in');
  
  chatHistory.forEach(msg => appendChatMessage(msg));
  scrollToBottom(chatMessagesContainer);

  users.forEach(user => {
    if (user.id !== localId) {
      peersState[user.id] = {
        id: user.id,
        name: user.name,
        is_muted: user.is_muted,
        is_video_off: user.is_video_off,
        is_hand_raised: user.is_hand_raised
      };
    }
  });

  changeLanguage(currentLang);
  showToast(formatString(translations[currentLang].toastJoinSelf, userName), 'success');
});

socket.on('user-joined', ({ id, name, is_muted, is_video_off }) => {
  showToast(formatString(translations[currentLang].toastJoinPeer, name), 'success');
  
  peersState[id] = {
    id,
    name,
    is_muted,
    is_video_off,
    is_hand_raised: false
  };

  initiatePeerConnection(id, name);
  updateParticipantsList();
  updateGridClasses();
});

const queuedCandidates = {};

async function processQueuedCandidates(peerId) {
  const pc = peerConnections[peerId];
  const candidates = queuedCandidates[peerId];
  if (pc && candidates) {
    for (const candidate of candidates) {
      try {
        await pc.addIceCandidate(new RTCIceCandidate(candidate));
      } catch (err) {
        console.error('❌ Error adding queued ICE candidate:', err);
      }
    }
    delete queuedCandidates[peerId];
  }
}

socket.on('webrtc-offer', async ({ from, offer }) => {
  const peerName = peersState[from]?.name || 'Peer';
  const pc = getOrCreatePeerConnection(from, peerName);
  
  try {
    await pc.setRemoteDescription(new RTCSessionDescription(offer));
    await processQueuedCandidates(from);
    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);
    
    socket.emit('webrtc-answer', { to: from, answer });
  } catch (err) {
    console.error('❌ Error handling WebRTC Offer:', err);
  }
});

socket.on('webrtc-answer', async ({ from, answer }) => {
  const pc = peerConnections[from];
  if (pc) {
    try {
      await pc.setRemoteDescription(new RTCSessionDescription(answer));
      await processQueuedCandidates(from);
    } catch (err) {
      console.error('❌ Error setting remote answer:', err);
    }
  }
});

socket.on('webrtc-ice-candidate', async ({ from, candidate }) => {
  const pc = peerConnections[from];
  if (pc && pc.remoteDescription && pc.remoteDescription.type) {
    try {
      await pc.addIceCandidate(new RTCIceCandidate(candidate));
    } catch (err) {
      console.error('❌ Error adding ICE candidate:', err);
    }
  } else {
    if (!queuedCandidates[from]) {
      queuedCandidates[from] = [];
    }
    queuedCandidates[from].push(candidate);
  }
});

socket.on('user-left', ({ id, name }) => {
  showToast(formatString(translations[currentLang].toastLeavePeer, name), 'danger');
  closePeerConnection(id);
  updateGridClasses();
});

socket.on('new-chat-message', (msg) => {
  appendChatMessage(msg);
  if (!chatPanel.classList.contains('active')) {
    chatTabBtn.classList.add('glowing-accent');
  }
  // Glow files button on mobile if sidebar is closed to notify user
  if (!meetingSidebar.classList.contains('open') && isMobile()) {
    btnSendFiles.classList.add('glowing-accent');
  }
  scrollToBottom(chatMessagesContainer);
});

socket.on('hand-raise-updated', ({ userId, isHandRaised }) => {
  if (peersState[userId]) {
    peersState[userId].is_hand_raised = isHandRaised;
    updateParticipantsList();
    
    const card = document.getElementById(`card-${userId}`);
    const badge = document.getElementById(`hand-badge-${userId}`);
    if (card && badge) {
      if (isHandRaised) {
        card.classList.add('hand-raised');
        badge.classList.remove('hidden');
        if (userId !== localId) {
          showToast(formatString(translations[currentLang].toastHandRaisePeer, peersState[userId].name), 'warning');
        }
      } else {
        card.classList.remove('hand-raised');
        badge.classList.add('hidden');
      }
    }
  }
});

socket.on('mute-updated', ({ userId, isMuted }) => {
  if (peersState[userId]) {
    peersState[userId].is_muted = isMuted;
    updateParticipantsList();
    
    const badge = document.getElementById(`mic-badge-${userId}`);
    if (badge) {
      if (isMuted) {
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    }
  }
});

socket.on('video-updated', ({ userId, isVideoOff }) => {
  if (peersState[userId]) {
    peersState[userId].is_video_off = isVideoOff;
    updateParticipantsList();
    
    const videoElement = document.getElementById(`video-${userId}`);
    if (videoElement) {
      videoElement.style.opacity = isVideoOff ? '0' : '1';
    }
  }
});

async function initiatePeerConnection(peerId, peerName) {
  const pc = getOrCreatePeerConnection(peerId, peerName);
  
  try {
    const dc = pc.createDataChannel('fileTransfer', { ordered: true });
    setupFileChannel(dc, peerId);
  } catch (err) {
    console.error("Failed to create DataChannel:", err);
  }

  try {
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    socket.emit('webrtc-offer', { to: peerId, offer });
  } catch (err) {
    console.error(`❌ Error initiating connection to ${peerName}:`, err);
  }
}

function getOrCreatePeerConnection(peerId, peerName) {
  if (peerConnections[peerId]) {
    return peerConnections[peerId];
  }

  const pc = new RTCPeerConnection(rtcConfig);
  peerConnections[peerId] = pc;

  if (localStream) {
    localStream.getTracks().forEach(track => {
      pc.addTrack(track, localStream);
    });
  }

  pc.ondatachannel = (event) => {
    if (event.channel.label === 'fileTransfer') {
      setupFileChannel(event.channel, peerId);
    }
  };

  pc.onicecandidate = (event) => {
    if (event.candidate) {
      socket.emit('webrtc-ice-candidate', {
        to: peerId,
        candidate: event.candidate
      });
    }
  };

  pc.ontrack = (event) => {
    const remoteStream = event.streams[0] || new MediaStream();
    createOrUpdateVideoTile(peerId, peerName, remoteStream, event.track);
  };

  pc.onconnectionstatechange = () => {
    if (pc.connectionState === 'failed' || pc.connectionState === 'closed') {
      closePeerConnection(peerId);
    }
  };

  return pc;
}

function playVideo(video, peerId) {
  const card = document.getElementById(`card-${peerId}`);
  const autoplayNotice = document.getElementById(`autoplay-notice-${peerId}`);
  if (!video || !card || !autoplayNotice) return;

  video.play().then(() => {
    autoplayNotice.classList.add('hidden');
    card.style.cursor = '';
  }).catch(err => {
    console.warn(`⚠️ Autoplay block for peer ${peerId}:`, err.message);
    autoplayNotice.classList.remove('hidden');
    card.style.cursor = 'pointer';
    
    const playHandler = () => {
      video.play().then(() => {
        autoplayNotice.classList.add('hidden');
        card.style.cursor = '';
        card.removeEventListener('click', playHandler);
      }).catch(e => console.error("❌ Play failed after click:", e));
    };
    
    card.removeEventListener('click', playHandler);
    card.addEventListener('click', playHandler);
  });
}

function createOrUpdateVideoTile(peerId, peerName, stream, incomingTrack) {
  let card = document.getElementById(`card-${peerId}`);
  let video = document.getElementById(`video-${peerId}`);
  
  if (!card) {
    card = document.createElement('div');
    card.className = 'video-card-classic fade-in';
    card.id = `card-${peerId}`;

    video = document.createElement('video');
    video.id = `video-${peerId}`;
    video.autoplay = true;
    video.playsInline = true;
    video.srcObject = stream;
    if (incomingTrack && stream.getTracks().indexOf(incomingTrack) === -1) {
      stream.addTrack(incomingTrack);
    }

    const autoplayNotice = document.createElement('div');
    autoplayNotice.className = 'autoplay-notice hidden';
    autoplayNotice.id = `autoplay-notice-${peerId}`;
    autoplayNotice.innerHTML = `
      <i class="fa-solid fa-volume-xmark"></i>
      <span id="autoplay-text-${peerId}">${currentLang === 'ar' ? 'انقر لتشغيل الصوت' : 'Click to unmute'}</span>
    `;
    card.appendChild(autoplayNotice);

    const overlay = document.createElement('div');
    overlay.className = 'video-overlay-classic';

    const nameSpan = document.createElement('span');
    nameSpan.className = 'participant-name';
    nameSpan.textContent = peerName;

    const statesDiv = document.createElement('div');
    statesDiv.className = 'participant-states';

    const handBadge = document.createElement('span');
    handBadge.className = 'state-icon hand-raised-badge hidden';
    handBadge.id = `hand-badge-${peerId}`;
    handBadge.innerHTML = `<i class="fa-solid fa-hand"></i>`;

    const micBadge = document.createElement('span');
    micBadge.className = 'state-icon mic-muted-badge hidden';
    micBadge.id = `mic-badge-${peerId}`;
    micBadge.innerHTML = `<i class="fa-solid fa-microphone-slash"></i>`;

    if (peersState[peerId]?.is_muted) micBadge.classList.remove('hidden');
    if (peersState[peerId]?.is_hand_raised) {
      card.classList.add('hand-raised');
      handBadge.classList.remove('hidden');
    }
    if (peersState[peerId]?.is_video_off) video.style.opacity = '0';

    statesDiv.appendChild(handBadge);
    statesDiv.appendChild(micBadge);
    overlay.appendChild(nameSpan);
    overlay.appendChild(statesDiv);
    
    card.appendChild(video);
    card.appendChild(overlay);
    videoGrid.appendChild(card);
    
    updateGridClasses();
    
    // Attempt play
    playVideo(video, peerId);
  } else {
    if (video) {
      const currentStream = video.srcObject;
      if (currentStream instanceof MediaStream) {
        if (incomingTrack && currentStream.getTracks().indexOf(incomingTrack) === -1) {
          currentStream.addTrack(incomingTrack);
        }
        stream.getTracks().forEach(track => {
          if (currentStream.getTracks().indexOf(track) === -1) {
            currentStream.addTrack(track);
          }
        });
      } else {
        video.srcObject = stream;
      }
      
      // Attempt play again on track updates
      playVideo(video, peerId);
    }
  }
}

function closePeerConnection(peerId) {
  if (peerConnections[peerId]) {
    peerConnections[peerId].close();
    delete peerConnections[peerId];
  }
  if (fileChannels[peerId]) {
    fileChannels[peerId].close();
    delete fileChannels[peerId];
  }
  if (peersState[peerId]) {
    delete peersState[peerId];
  }

  const card = document.getElementById(`card-${peerId}`);
  if (card) {
    card.classList.add('fade-out');
    setTimeout(() => card.remove(), 300);
  }

  updateParticipantsList();
  updateGridClasses();
}

async function replaceVideoTrack(newTrack) {
  for (const id in peerConnections) {
    const pc = peerConnections[id];
    const sender = pc.getSenders().find(s => s.track && s.track.kind === 'video');
    if (sender) {
      try {
        await sender.replaceTrack(newTrack);
      } catch (err) {
        console.error("replaceTrack error:", err);
      }
    }
  }
}

// ==========================================================================
// 8. P2P Chunked File Sharing Logic (DataChannel)
// ==========================================================================
const CHUNK_SIZE = 16384; // 16 KB
const HIGH_WATER_MARK = 1048576; // 1 MB backpressure limit
const LOW_WATER_MARK = 65536; // 64 KB resume trigger

function setupFileChannel(channel, peerId) {
  fileChannels[peerId] = channel;
  channel.binaryType = 'arraybuffer';

  let fileMetadata = null;
  let receivedChunks = [];
  let receivedSize = 0;
  let transferItemId = '';

  channel.onmessage = (event) => {
    if (typeof event.data === 'string') {
      try {
        const signal = JSON.parse(event.data);
        if (signal.type === 'file-start') {
          fileMetadata = signal.meta;
          receivedChunks = [];
          receivedSize = 0;
          transferItemId = createTransferUIItem(fileMetadata.name, false, fileMetadata.size);
          return;
        }
        
        if (signal.type === 'file-end') {
          const blob = new Blob(receivedChunks, { type: fileMetadata.mimeType });
          const downloadUrl = URL.createObjectURL(blob);
          finalizeTransferUIItem(transferItemId, downloadUrl);
          
          showToast(formatString(translations[currentLang].fileReceiveSuccess, fileMetadata.name), 'success');
          fileMetadata = null;
          receivedChunks = [];
          return;
        }
      } catch (err) {
        console.error("Failed to parse DataChannel signal:", err);
      }
      return;
    }

    receivedChunks.push(event.data);
    receivedSize += event.data.byteLength;

    if (fileMetadata) {
      const pct = Math.round((receivedSize / fileMetadata.size) * 100);
      updateTransferUIProgress(transferItemId, pct);
    }
  };

  channel.onerror = (err) => {
    console.error("DataChannel error:", err);
    if (transferItemId) failTransferUIItem(transferItemId);
  };
}

async function shareLocalFile(file) {
  const maxBytes = 100 * 1024 * 1024; // 100 MB
  if (file.size > maxBytes) {
    showToast(translations[currentLang].fileLimitError, 'danger');
    return;
  }

  const itemId = createTransferUIItem(file.name, true, file.size);

  const activeChannels = Object.values(fileChannels).filter(c => c.readyState === 'open');
  
  // Log file sharing in database archive
  socket.emit('log-file-share', {
    fileName: file.name,
    fileSize: file.size,
    senderName: userName
  });

  if (activeChannels.length === 0) {
    updateTransferUIProgress(itemId, 100);
    finalizeTransferUIItem(itemId, null);
    return;
  }

  activeChannels.forEach(c => {
    c.send(JSON.stringify({
      type: 'file-start',
      meta: {
        name: file.name,
        size: file.size,
        mimeType: file.type
      }
    }));
  });

  let offset = 0;
  
  async function queueNextChunks() {
    while (offset < file.size) {
      const congested = activeChannels.some(c => c.bufferedAmount > HIGH_WATER_MARK);
      if (congested) {
        activeChannels.forEach(c => {
          c.bufferedAmountLowThreshold = LOW_WATER_MARK;
          c.onbufferedamountlow = () => {
            activeChannels.forEach(ch => ch.onbufferedamountlow = null);
            queueNextChunks();
          };
        });
        return;
      }

      const end = Math.min(offset + CHUNK_SIZE, file.size);
      const chunk = file.slice(offset, end);

      try {
        const buffer = await chunk.arrayBuffer();
        activeChannels.forEach(c => {
          if (c.readyState === 'open') c.send(buffer);
        });
      } catch (err) {
        console.error("Error reading chunk:", err);
        if (itemId) failTransferUIItem(itemId);
        return;
      }

      offset = end;
      const pct = Math.round((offset / file.size) * 100);
      updateTransferUIProgress(itemId, pct);
    }

    activeChannels.forEach(c => {
      if (c.readyState === 'open') {
        c.send(JSON.stringify({ type: 'file-end' }));
      }
    });

    finalizeTransferUIItem(itemId, null);
    showToast(formatString(translations[currentLang].fileSendSuccess, file.name), 'success');
  }

  await queueNextChunks();
}

// Transfer List UI Helpers
const transferListContainer = document.getElementById('transfer-list-container');

function createTransferUIItem(filename, isOutgoing, sizeBytes) {
  const itemId = `transfer-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
  const item = document.createElement('div');
  item.className = 'transfer-item';
  item.id = itemId;

  const sizeText = (sizeBytes / (1024 * 1024)).toFixed(2) + ' MB';
  const prefix = isOutgoing 
    ? (currentLang === 'ar' ? 'إرسال: ' : 'Sending: ') 
    : (currentLang === 'ar' ? 'استلام: ' : 'Receiving: ');

  item.innerHTML = `
    <div class="transfer-info">
        <span class="transfer-filename" title="${filename}">${prefix}${filename} (${sizeText})</span>
        <span class="transfer-status-pct" id="pct-${itemId}">0%</span>
    </div>
    <div class="transfer-progress-bar">
        <div class="transfer-progress-fill" id="fill-${itemId}" style="width: 0%"></div>
    </div>
    <div class="transfer-action-area" id="act-${itemId}"></div>
  `;

  transferListContainer.appendChild(item);
  transferListContainer.scrollTop = transferListContainer.scrollHeight;
  return itemId;
}

function updateTransferUIProgress(itemId, pct) {
  const pctEl = document.getElementById(`pct-${itemId}`);
  const fillEl = document.getElementById(`fill-${itemId}`);
  if (pctEl) pctEl.textContent = `${pct}%`;
  if (fillEl) fillEl.style.width = `${pct}%`;
}

function finalizeTransferUIItem(itemId, downloadUrl) {
  const item = document.getElementById(itemId);
  if (item) {
    item.classList.add('done');
    updateTransferUIProgress(itemId, 100);
    
    if (downloadUrl) {
      const actionArea = document.getElementById(`act-${itemId}`);
      if (actionArea) {
        const dlBtn = document.createElement('a');
        dlBtn.className = 'transfer-download-btn';
        dlBtn.href = downloadUrl;
        
        const filenameSpan = item.querySelector('.transfer-filename');
        let filename = 'file';
        if (filenameSpan) {
          const match = filenameSpan.title;
          if (match) filename = match;
        }
        
        dlBtn.download = filename;
        dlBtn.textContent = currentLang === 'ar' ? 'تحميل الملف' : 'Download File';
        actionArea.appendChild(dlBtn);
      }
    }
  }
}

function failTransferUIItem(itemId) {
  const item = document.getElementById(itemId);
  if (item) {
    item.classList.add('error');
    const fillEl = document.getElementById(`fill-${itemId}`);
    if (fillEl) fillEl.style.background = 'var(--meeting-red)';
    const pctEl = document.getElementById(`pct-${itemId}`);
    if (pctEl) pctEl.textContent = currentLang === 'ar' ? 'فشل' : 'Failed';
  }
}

// Bind File selection triggers
const fileSelector = document.getElementById('file-selector');
const btnSelectFile = document.getElementById('btn-select-file');

btnSelectFile.addEventListener('click', () => {
  fileSelector.click();
});

fileSelector.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    shareLocalFile(file);
    fileSelector.value = '';
  }
});

function toggleSidebar(open) {
  if (open) {
    meetingSidebar.classList.add('open');
    btnSendFiles.classList.remove('glowing-accent');
    if (sidebarBackdrop) {
      sidebarBackdrop.classList.remove('hidden');
      setTimeout(() => sidebarBackdrop.classList.add('active'), 10);
    }
  } else {
    meetingSidebar.classList.remove('open');
    if (sidebarBackdrop) {
      sidebarBackdrop.classList.remove('active');
      setTimeout(() => sidebarBackdrop.classList.add('hidden'), 300);
    }
  }
}

btnSendFiles.addEventListener('click', () => {
  toggleSidebar(true);
  filesTabBtn.click();
});

if (sidebarBackdrop) {
  sidebarBackdrop.addEventListener('click', () => {
    toggleSidebar(false);
  });
}

// ==========================================================================
// 9. Meeting Archives System logic
// ==========================================================================
archiveTabBtn.addEventListener('click', () => {
  socket.emit('get-archive-list');
});

socket.on('archive-list-response', (list) => {
  archiveListCached = list;
  renderArchiveListLocally();
});

function renderArchiveListLocally() {
  if (!archiveListContainer) return;
  archiveListContainer.innerHTML = '';

  const t = translations[currentLang];
  if (archiveListCached.length === 0) {
    archiveListContainer.innerHTML = `<p class="settings-help">${t.archiveListEmpty}</p>`;
    return;
  }

  archiveListCached.forEach(session => {
    const item = document.createElement('div');
    item.className = 'archive-item';
    
    const formattedDate = new Date(session.created_at).toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const isLive = !session.ended_at;
    const titleText = `${currentLang === 'ar' ? 'اجتماع #' : 'Meeting #'}${session.id}`;
    
    item.innerHTML = `
      <div class="archive-item-header">
          <span class="archive-item-title">${titleText}</span>
          ${isLive ? `<span class="status-indicator live"></span>` : ''}
      </div>
      <div class="archive-item-date">${formattedDate} ${isLive ? `(${t.archiveLiveLabel})` : ''}</div>
      <div class="archive-item-stats">
          <span><i class="fa-solid fa-comments"></i> ${session.msg_count}</span>
          <span><i class="fa-solid fa-file"></i> ${session.file_count}</span>
      </div>
    `;

    item.addEventListener('click', () => {
      socket.emit('get-session-details', { sessionId: session.id });
    });

    archiveListContainer.appendChild(item);
  });
}

// Archive Details Modal handling
const archiveModal = document.getElementById('archive-details-modal');
const btnCloseArchiveModal = document.getElementById('btn-close-archive-modal');
const btnShowArchivedMsgs = document.getElementById('btn-show-archived-msgs');
const btnShowArchivedFiles = document.getElementById('btn-show-archived-files');
const archivedMsgsContainer = document.getElementById('archived-msgs-container');
const archivedFilesContainer = document.getElementById('archived-files-container');

btnCloseArchiveModal.addEventListener('click', () => {
  archiveModal.classList.add('hidden');
});

// Close modal on overlay tap
archiveModal.addEventListener('click', (e) => {
  if (e.target === archiveModal) {
    archiveModal.classList.add('hidden');
  }
});

btnShowArchivedMsgs.addEventListener('click', () => {
  btnShowArchivedMsgs.classList.add('active');
  btnShowArchivedFiles.classList.remove('active');
  archivedMsgsContainer.classList.remove('hidden');
  archivedFilesContainer.classList.add('hidden');
});

btnShowArchivedFiles.addEventListener('click', () => {
  btnShowArchivedFiles.classList.add('active');
  btnShowArchivedMsgs.classList.remove('active');
  archivedFilesContainer.classList.remove('hidden');
  archivedMsgsContainer.classList.add('hidden');
});

socket.on('session-details-response', ({ sessionId, messages, files }) => {
  const session = archiveListCached.find(s => s.id === parseInt(sessionId));
  if (!session) return;

  const t = translations[currentLang];
  
  // Format Date
  const formattedDate = new Date(session.created_at).toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  document.getElementById('modal-session-date').textContent = formatString(t.modalSessionDate, formattedDate);

  // Calculate Duration
  let durationText = '';
  if (session.ended_at) {
    const diffMs = new Date(session.ended_at) - new Date(session.created_at);
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    if (diffMins > 0) {
      durationText = formatString(t.archiveDurationMin, diffMins);
    } else {
      durationText = formatString(t.archiveDurationSec, diffSecs);
    }
  } else {
    durationText = t.archiveLiveLabel;
  }
  document.getElementById('modal-session-duration').textContent = formatString(t.modalSessionDuration, durationText);

  // Load Messages
  archivedMsgsContainer.innerHTML = '';
  if (messages.length === 0) {
    archivedMsgsContainer.innerHTML = `<p class="settings-help">${t.archiveMsgsEmpty}</p>`;
  } else {
    messages.forEach(msg => {
      const msgItem = document.createElement('div');
      msgItem.className = 'archived-msg-item';
      const timeStr = new Date(msg.sent_at).toLocaleTimeString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      msgItem.innerHTML = `
        <div class="archived-msg-meta">
            <span>${msg.user_name}</span>
            <span class="archived-msg-time">${timeStr}</span>
        </div>
        <div class="archived-msg-text">${escapeHtml(msg.message)}</div>
      `;
      archivedMsgsContainer.appendChild(msgItem);
    });
  }

  // Load Files Metadata
  archivedFilesContainer.innerHTML = '';
  if (files.length === 0) {
    archivedFilesContainer.innerHTML = `<p class="settings-help">${t.archiveFilesEmpty}</p>`;
  } else {
    files.forEach(file => {
      const fileItem = document.createElement('div');
      fileItem.className = 'archived-file-item';
      const sizeText = (parseInt(file.file_size) / (1024 * 1024)).toFixed(2) + ' MB';
      fileItem.innerHTML = `
        <div class="archived-file-info">
            <span class="archived-file-name" title="${file.file_name}">${file.file_name}</span>
            <span class="archived-file-meta">${sizeText} • <span class="archived-file-sender">${file.sender_name}</span></span>
        </div>
        <i class="fa-solid fa-file-invoice" style="font-size: 1.2rem; color: var(--primary-blue);"></i>
      `;
      archivedFilesContainer.appendChild(fileItem);
    });
  }

  // Active messages tab inside modal by default
  btnShowArchivedMsgs.click();

  // Show Modal
  archiveModal.classList.remove('hidden');
});

// ==========================================================================
// 10. Meeting Controls Actions (Mute, Camera, Screen Share, Raise Hand)
// ==========================================================================

// Toggle Microphone (Mute/Unmute)
btnToggleMic.addEventListener('click', () => {
  if (!localStream) return;
  
  const audioTrack = localStream.getAudioTracks()[0];
  if (audioTrack) {
    isMuted = !isMuted;
    audioTrack.enabled = !isMuted;

    const t = translations[currentLang];
    if (isMuted) {
      btnToggleMic.classList.add('muted');
      btnToggleMic.innerHTML = `<i class="fa-solid fa-microphone-slash"></i><span class="control-label" id="btn-mic-label">${t.btnMicLabelUnmute}</span>`;
      localMicBadge.classList.remove('hidden');
      showToast(t.toastMuteSelf, 'warning');
    } else {
      btnToggleMic.classList.remove('muted');
      btnToggleMic.innerHTML = `<i class="fa-solid fa-microphone"></i><span class="control-label" id="btn-mic-label">${t.btnMicLabelMute}</span>`;
      localMicBadge.classList.add('hidden');
      showToast(t.toastUnmuteSelf, 'success');
    }

    socket.emit('toggle-mute', { isMuted });
    updateParticipantsList();
  }
});

// Toggle Camera (Play/Pause)
btnToggleVideo.addEventListener('click', () => {
  if (!localStream) return;

  const videoTrack = localStream.getVideoTracks()[0];
  if (videoTrack) {
    isVideoOff = !isVideoOff;
    videoTrack.enabled = !isVideoOff;

    localVideo.style.opacity = isVideoOff ? '0' : '1';

    const t = translations[currentLang];
    if (isVideoOff) {
      btnToggleVideo.classList.add('muted');
      btnToggleVideo.innerHTML = `<i class="fa-solid fa-video-slash"></i><span class="control-label" id="btn-video-label">${t.btnVideoLabelOn}</span>`;
      showToast(t.toastCamOffSelf, 'warning');
    } else {
      btnToggleVideo.classList.remove('muted');
      btnToggleVideo.innerHTML = `<i class="fa-solid fa-video"></i><span class="control-label" id="btn-video-label">${t.btnVideoLabelOff}</span>`;
      showToast(t.toastCamOnSelf, 'success');
    }

    socket.emit('toggle-video', { isVideoOff });
    updateParticipantsList();
  }
});

// Toggle Screen Share
btnScreenShare.addEventListener('click', async () => {
  const t = translations[currentLang];
  if (!isScreenSharing) {
    try {
      screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: false
      });

      const screenTrack = screenStream.getVideoTracks()[0];

      replaceVideoTrack(screenTrack);

      localVideo.srcObject = screenStream;
      localVideo.style.opacity = '1';
      document.getElementById('local-video-card').classList.add('screen-sharing-tile');

      screenTrack.onended = () => {
        stopScreenSharing();
      };

      isScreenSharing = true;
      btnScreenShare.classList.add('active');
      showToast(t.toastScreenShareOn, 'success');

    } catch (err) {
      console.error('❌ Screen share failed:', err);
    }
  } else {
    stopScreenSharing();
  }
});

// Stop screen sharing and restore camera
async function stopScreenSharing() {
  if (screenStream) {
    screenStream.getTracks().forEach(track => track.stop());
    screenStream = null;
  }

  try {
    const selectedCamId = roomCameraSelect.value;
    let width = 640, height = 360, fps = 30;
    if (perfBoostActive) {
      if (isMobile()) {
        width = 480; height = 270; fps = 15;
      } else {
        width = 1280; height = 720; fps = 24;
      }
    }

    const constraints = {
      video: selectedCamId ? { deviceId: { exact: selectedCamId }, width: { ideal: width }, height: { ideal: height }, frameRate: { ideal: fps } } : { width: { ideal: width }, height: { ideal: height }, frameRate: { ideal: fps } },
      audio: false
    };
    
    const tempStream = await navigator.mediaDevices.getUserMedia(constraints);
    const cameraTrack = tempStream.getVideoTracks()[0];

    const oldVideoTrack = localStream.getVideoTracks()[0];
    if (oldVideoTrack) {
      localStream.removeTrack(oldVideoTrack);
      oldVideoTrack.stop();
    }
    localStream.addTrack(cameraTrack);
    cameraTrack.enabled = !isVideoOff;

    replaceVideoTrack(cameraTrack);
    localVideo.srcObject = localStream;

  } catch (err) {
    console.error('❌ Failed to restore camera after screen share:', err);
  }

  localVideo.style.opacity = isVideoOff ? '0' : '1';
  document.getElementById('local-video-card').classList.remove('screen-sharing-tile');

  isScreenSharing = false;
  btnScreenShare.classList.remove('active');
  showToast(translations[currentLang].toastScreenShareOff, 'warning');
}

// Toggle Raise Hand
btnRaiseHand.addEventListener('click', () => {
  isHandRaised = !isHandRaised;

  const t = translations[currentLang];
  if (isHandRaised) {
    btnRaiseHand.classList.add('active');
    localHandBadge.classList.remove('hidden');
    document.getElementById('local-video-card').classList.add('hand-raised');
    showToast(t.toastHandRaiseSelf, 'warning');
  } else {
    btnRaiseHand.classList.remove('active');
    localHandBadge.classList.add('hidden');
    document.getElementById('local-video-card').classList.remove('hand-raised');
  }

  socket.emit('toggle-hand-raise', { isHandRaised });
  updateParticipantsList();
});

btnLeave.addEventListener('click', () => {
  leaveRoom();
});

function leaveRoom() {
  socket.emit('leave-room');
  
  if (localStream) {
    localStream.getTracks().forEach(track => track.stop());
  }
  if (screenStream) {
    screenStream.getTracks().forEach(track => track.stop());
  }

  for (const id in peerConnections) {
    peerConnections[id].close();
  }

  window.location.reload();
}

// ==========================================================================
// 11. Chat & Sidebar UI Actions
// ==========================================================================
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;

  socket.emit('send-chat-message', {
    message: text,
    userName: userName
  });

  chatInput.value = '';
});

function appendChatMessage(msg) {
  const isSelf = msg.user_name === userName;
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${isSelf ? 'outgoing' : 'incoming'}`;
  
  const formattedTime = new Date(msg.sent_at).toLocaleTimeString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  bubble.innerHTML = `
    ${!isSelf ? `<span class="sender">${msg.user_name}</span>` : ''}
    <span class="message-text">${escapeHtml(msg.message)}</span>
    <span class="msg-time">${formattedTime}</span>
  `;

  chatMessagesContainer.appendChild(bubble);
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

function scrollToBottom(element) {
  element.scrollTop = element.scrollHeight;
}

// Handle Sidebar Tabs Switch
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.sidebar-content').forEach(p => p.classList.remove('active'));

    btn.classList.remove('glowing-accent');
    btn.classList.add('active');
    
    const panelId = btn.getAttribute('data-tab');
    document.getElementById(panelId).classList.add('active');
  });
});

// Close Sidebar on Mobile view click
const btnCloseSidebarMobile = document.getElementById('btn-close-sidebar-mobile');
if (btnCloseSidebarMobile) {
  btnCloseSidebarMobile.addEventListener('click', () => {
    toggleSidebar(false);
  });
}

// Update the list of active participants in the sidebar
function updateParticipantsList() {
  if (!participantsListContainer) return;
  participantsListContainer.innerHTML = '';

  const suffixSelf = translations[currentLang].participantSuffixSelf;
  const countSuffix = translations[currentLang].participantsCountSuffix;

  // Add self
  appendParticipantItem(localId || 'self', `${userName} ${suffixSelf}`, isMuted, isVideoOff, isHandRaised);

  // Add other peers
  for (const id in peersState) {
    const peer = peersState[id];
    appendParticipantItem(peer.id, peer.name, peer.is_muted, peer.is_video_off, peer.is_hand_raised);
  }

  const count = Object.keys(peersState).length + 1;
  participantCount.textContent = `${count} ${countSuffix}`;
}

function appendParticipantItem(id, name, isMutedState, isVideoOffState, isHandRaisedState) {
  const item = document.createElement('li');
  item.className = 'participant-item';

  const initial = name.charAt(0).toUpperCase();

  item.innerHTML = `
    <div class="participant-userinfo">
        <div class="user-avatar-indicator">${initial}</div>
        <span>${name}</span>
    </div>
    <div class="participant-badges">
        ${isHandRaisedState ? `<i class="fa-solid fa-hand hand-raised" id="p-hand-${id}"></i>` : ''}
        ${isMutedState ? `<i class="fa-solid fa-microphone-slash mic-muted" id="p-mic-${id}"></i>` : ''}
    </div>
  `;

  participantsListContainer.appendChild(item);
}

function updateGridClasses() {
  const totalTiles = videoGrid.children.length;
  videoGrid.className = 'video-grid';
  
  if (totalTiles === 1) {
    videoGrid.classList.add('peers-1');
  } else if (totalTiles === 2) {
    videoGrid.classList.add('peers-2');
  } else if (totalTiles <= 4) {
    videoGrid.classList.add('peers-3');
  } else {
    videoGrid.classList.add('peers-5');
  }
}

function showToast(message, type = 'success') {
  const toastContainer = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let icon = 'fa-circle-info';
  if (type === 'success') icon = 'fa-circle-check';
  if (type === 'danger') icon = 'fa-triangle-exclamation';
  if (type === 'warning') icon = 'fa-hand';

  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <div class="toast-body">${message}</div>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideIn 0.25s reverse forwards';
    setTimeout(() => {
      toast.remove();
    }, 250);
  }, 4000);
}

// Initial language set on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  changeLanguage(currentLang);
});
changeLanguage(currentLang);
