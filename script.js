const GOOGLE_MAPS_API_KEY = "YOUR_KEY";
const GOOGLE_MAPS_LIBRARIES = ["places"];

const buttons = document.querySelectorAll(".action-tile");
const backButtons = document.querySelectorAll(".back-button");
const homeSection = document.querySelector("#homeSection");
const featureSections = document.querySelectorAll(".feature-card");
const chooseImageButton = document.querySelector("#chooseImageButton");
const prescriptionInput = document.querySelector("#prescriptionInput");
const uploadSection = document.querySelector("#uploadSection");
const prescriptionPreview = document.querySelector("#prescriptionPreview");
const uploadPreviewGrid = document.querySelector("#uploadPreviewGrid");
const uploadNote = document.querySelector("#uploadNote");
const scanStatus = document.querySelector("#scanStatus");
const medicineResult = document.querySelector("#medicineResult");
const ocrText = document.querySelector("#ocrText");
const medicalRecordsSummary = document.querySelector("#medicalRecordsSummary");
const medicalRecordDateList = document.querySelector("#medicalRecordDateList");
const medicalRecordDetails = document.querySelector("#medicalRecordDetails");
const reminderForm = document.querySelector("#reminderForm");
const medicineName = document.querySelector("#medicineName");
const timeOfDayOptions = document.querySelectorAll('input[name="timesOfDay"]');
const reminderDuration = document.querySelector("#reminderDuration");
const savedReminder = document.querySelector("#savedReminder");
const reminderNotification = document.querySelector("#reminderNotification");
const refillNotification = document.querySelector("#refillNotification");
const refillRemindersList = document.querySelector("#refillRemindersList");
const activeRemindersList = document.querySelector("#activeRemindersList");
const doseSummary = document.querySelector("#doseSummary");
const takenDosesList = document.querySelector("#takenDosesList");
const missedDosesList = document.querySelector("#missedDosesList");
const historyTabButtons = document.querySelectorAll("[data-history-tab]");
const historyTabPanels = document.querySelectorAll("#historySection .history-tab-panel");
const visitHistorySummary = document.querySelector("#visitHistorySummary");
const visitHistoryDateList = document.querySelector("#visitHistoryDateList");
const visitHistoryDetails = document.querySelector("#visitHistoryDetails");
const doctorVisitForm = document.querySelector("#doctorVisitForm");
const doctorVisitDate = document.querySelector("#doctorVisitDate");
const doctorVisitReason = document.querySelector("#doctorVisitReason");
const doctorVisitTabButtons = document.querySelectorAll("[data-visit-tab]");
const visitStatusModal = document.querySelector("#visitStatusModal");
const visitStatusForm = document.querySelector("#visitStatusForm");
const visitStatusClose = document.querySelector("#visitStatusClose");
const visitStatusTitle = document.querySelector("#visitStatusTitle");
const visitStatusNote = document.querySelector("#visitStatusNote");
const visitStatusRemark = document.querySelector("#visitStatusRemark");
const visitStatusRemarkHint = document.querySelector("#visitStatusRemarkHint");
const visitStatusNextVisitGroup = document.querySelector("#visitStatusNextVisitGroup");
const visitStatusNextVisit = document.querySelector("#visitStatusNextVisit");
const visitStatusSaveButton = document.querySelector("#visitStatusSaveButton");
const recordEditorModal = document.querySelector("#recordEditorModal");
const recordEditorForm = document.querySelector("#recordEditorForm");
const recordEditorClose = document.querySelector("#recordEditorClose");
const recordEditorCancel = document.querySelector("#recordEditorCancel");
const recordEditorTitle = document.querySelector("#recordEditorTitle");
const recordEditorNote = document.querySelector("#recordEditorNote");
const recordEditorLabel = document.querySelector("#recordEditorLabel");
const recordEditorTextarea = document.querySelector("#recordEditorTextarea");
const recordEditorSave = document.querySelector("#recordEditorSave");
const doctorVisitTabPanels = document.querySelectorAll("#doctorVisitsSection .history-tab-panel");
const upcomingVisitSummary = document.querySelector("#upcomingVisitSummary");
const upcomingVisitsList = document.querySelector("#upcomingVisitsList");
const completedVisitSummary = document.querySelector("#completedVisitSummary");
const completedVisitDateList = document.querySelector("#completedVisitDateList");
const completedVisitDetails = document.querySelector("#completedVisitDetails");
const dosageHistorySummary = document.querySelector("#dosageHistorySummary");
const dosageDateList = document.querySelector("#dosageDateList");
const dosageDateDetails = document.querySelector("#dosageDateDetails");
const familyForm = document.querySelector("#familyForm");
const familyName = document.querySelector("#familyName");
const familyAge = document.querySelector("#familyAge");
const familyMembersList = document.querySelector("#familyMembersList");
const familyEditModal = document.querySelector("#familyEditModal");
const familyEditForm = document.querySelector("#familyEditForm");
const familyEditClose = document.querySelector("#familyEditClose");
const editFamilyName = document.querySelector("#editFamilyName");
const editFamilyAge = document.querySelector("#editFamilyAge");
const deleteProfileModal = document.querySelector("#deleteProfileModal");
const deleteProfileCancel = document.querySelector("#deleteProfileCancel");
const deleteProfileConfirm = document.querySelector("#deleteProfileConfirm");
const activeMemberStatus = document.querySelector("#activeMemberStatus");
const nearbySection = document.querySelector("#nearbySection");
const nearbyStatus = document.querySelector("#nearbyStatus");
const retryNearbyButton = document.querySelector("#retryNearbyButton");
const nearbyResults = document.querySelector("#nearbyResults");
const buyOnlineModal = document.querySelector("#buyModal");
const buyOnlineClose = document.querySelector("#closeModal");
const googleSearchLink = document.querySelector("#googleLink");
const tataSearchLink = document.querySelector("#tataLink");
const pharmEasySearchLink = document.querySelector("#pharmeasyLink");
const OCR_STORAGE_KEY = "ocrTexts";
const PRESCRIPTION_STORAGE_KEY = "prescriptions";
const MEDICINE_STORAGE_KEY = "medicines";
const DOSE_STORAGE_KEY = "doseHistory";
const APP_STORAGE_KEY = "careCircuitData";
const NEARBY_RADIUS_METERS = 5000;
const NEARBY_PLACE_TYPES = ["hospital", "pharmacy", "doctor"];
const REMINDER_GRACE_PERIOD = 10 * 60 * 1000;
const DEFAULT_REMINDER_DURATION_DAYS = 7;
const TIME_OF_DAY_TO_CLOCK_TIME = {
  Morning: "08:00",
  Afternoon: "14:00",
  Evening: "18:00",
  Night: "22:00",
};
const MEDICINE_INFO_DATABASE = {
  paracetamol: {
    purpose: "Commonly used to reduce fever and relieve mild to moderate pain.",
    condition: "Fever, body pain, headache, or cold-related discomfort.",
    advice: "Take only the dose advised and keep track of combination medicines that may already contain paracetamol.",
    avoid: "Avoid taking more than the recommended dose, especially if you have liver problems or drink alcohol regularly.",
  },
  azithromycin: {
    purpose: "Commonly used as an antibiotic for certain bacterial infections.",
    condition: "Infection-related symptoms such as throat, chest, ear, or skin infection as advised by a doctor.",
    advice: "Complete the full prescribed course and take it exactly as directed.",
    avoid: "Avoid stopping early or using it without medical advice, since antibiotics are not for every illness.",
  },
  cetirizine: {
    purpose: "Commonly used to help with allergy symptoms.",
    condition: "Sneezing, itching, runny nose, rashes, or other allergy-related discomfort.",
    advice: "It may be taken when allergy symptoms are active, depending on your doctor’s instructions.",
    avoid: "Avoid activities needing full alertness if it makes you sleepy.",
  },
  ibuprofen: {
    purpose: "Commonly used for pain, inflammation, and fever relief.",
    condition: "Body pain, inflammation, headache, dental pain, or fever-related discomfort.",
    advice: "Taking it after food may help reduce stomach irritation.",
    avoid: "Avoid it if you have stomach ulcers, kidney issues, or have been told to avoid anti-inflammatory pain medicines.",
  },
};
let activeReminders = [];
let pendingDose;
let nearbyServicesLoaded = false;
let nearbyRequestInFlight = false;
let reminderTimeouts = {};
let missedDoseTimers = {};
let googleMapsLoadPromise;
let editingFamilyMemberName = "";
let pendingDeleteMemberCallback = null;
let lastFocusedElementBeforeDeleteModal = null;
let pendingVisitStatusUpdate = null;
let pendingPrescriptionRecord = null;
let expandedMedicalRecordDateKey = "";
let expandedMedicalRecordId = "";
let pendingRecordEditorState = null;
function createMember(name, age = "") {
  return {
    name,
    age,
    data: {
      ocrTexts: [],
      prescriptions: [],
      medicines: [],
      doseHistory: [],
      doctorVisits: [],
    },
  };
}

function getAppData() {
  const savedData = JSON.parse(localStorage.getItem(APP_STORAGE_KEY));

  if (savedData && Array.isArray(savedData.members)) {
    savedData.activeMember = savedData.activeMember || "Me";
    savedData.members.forEach((member) => {
      member.data = member.data || {};
      member.data.ocrTexts = member.data.ocrTexts || [];
      member.data.prescriptions = member.data.prescriptions || [];
      member.data.medicines = member.data.medicines || [];
      member.data.doseHistory = member.data.doseHistory || [];
      member.data.doctorVisits = member.data.doctorVisits || [];
    });

    if (!savedData.members.some((member) => member.name === savedData.activeMember)) {
      savedData.members.push(createMember(savedData.activeMember));
    }

    return savedData;
  }

  return {
    activeMember: "Me",
    members: [createMember("Me")],
  };
}

function saveAppData(data) {
  localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(data));
}

function getActiveMember() {
  return getAppData().activeMember || "Me";
}

function getActiveMemberObject() {
  const data = getAppData();
  let member = data.members.find((item) => item.name === data.activeMember);

  if (!member) {
    member = createMember(data.activeMember || "Me");
    data.members.push(member);
    saveAppData(data);
  }

  return member;
}

function getMemberArray(key) {
  return getActiveMemberObject().data[key] || [];
}

function saveMemberArray(key, items) {
  const data = getAppData();
  let member = data.members.find((item) => item.name === data.activeMember);

  if (!member) {
    member = createMember(data.activeMember || "Me");
    data.members.push(member);
  }

  member.data[key] = items;
  saveAppData(data);
}

function renderActiveMember() {
  activeMemberStatus.textContent = `Viewing: ${getActiveMember()}`;
}

function addHistoryItem(container, text) {
  const item = document.createElement("div");
  item.className = "history-item";
  item.textContent = text;
  container.appendChild(item);
}

function showEmptyHistory(container, message) {
  const emptyMessage = document.createElement("p");
  emptyMessage.className = "empty-history";
  emptyMessage.textContent = message;
  container.appendChild(emptyMessage);
}

function isPhoneNumberLine(line) {
  const digitsOnly = line.replace(/\D/g, "");

  return digitsOnly.length >= 10;
}

function isHospitalOrDoctorLine(line) {
  const lowerLine = line.toLowerCase();
  const blockedWords = [
    "hospital",
    "clinic",
    "medical center",
    "doctor",
    "dr.",
    "dr ",
    "mbbs",
    "md",
    "ph:",
    "phone",
    "contact",
  ];

  return blockedWords.some((word) => lowerLine.includes(word));
}

function isMedicineRelatedLine(line) {
  const lowerLine = line.toLowerCase();
  const medicineKeywords = [
    "mg",
    "ml",
    "mcg",
    "tablet",
    "tablets",
    "tab",
    "capsule",
    "capsules",
    "cap",
    "syrup",
    "drops",
    "inj",
    "injection",
    "ointment",
  ];

  const hasMedicineKeyword = medicineKeywords.some((keyword) => lowerLine.includes(keyword));
  const hasDosagePattern = /\b\d+\s?(mg|ml|mcg|g)\b/i.test(line);

  return hasMedicineKeyword || hasDosagePattern;
}

function filterPrescriptionLines(text) {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !isPhoneNumberLine(line))
    .filter((line) => !isHospitalOrDoctorLine(line))
    .filter((line) => isMedicineRelatedLine(line));
}

function filterPrescriptionText(text) {
  return filterPrescriptionLines(text).join("\n");
}

function createOcrHistoryItem(entry) {
  const item = document.createElement("div");
  const image = document.createElement("img");
  const text = document.createElement("p");

  item.className = "history-item ocr-history-item";
  image.className = "ocr-history-image";
  text.className = "ocr-history-text";
  image.src = entry.image;
  image.alt = "Saved prescription";
  text.textContent = entry.filteredText || entry.text || "No extracted text available";
  item.append(image, text);
  return item;
}

function normalizePrescriptionMedicine(medicine) {
  if (!medicine) {
    return null;
  }

  if (typeof medicine === "string") {
    return {
      name: medicine,
      dosage: "",
      info: getMedicineInfo(medicine),
    };
  }

  return {
    name: medicine.name || "Medicine",
    dosage: medicine.dosage || "",
    info: medicine.info || getMedicineInfo(medicine.name || "Medicine"),
  };
}

function getPrescriptionMedicines(record) {
  const savedMedicines = Array.isArray(record.medicines) ? record.medicines.map(normalizePrescriptionMedicine).filter(Boolean) : [];
  const ocrMedicines = extractMedicinesFromText(record.extractedText || "").map(normalizePrescriptionMedicine).filter(Boolean);
  const allMedicines = [...savedMedicines, ...ocrMedicines];
  const seen = new Set();

  return allMedicines.filter((medicine) => {
    const key = normalizeMedicineKey(medicine.name);

    if (!key || seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

function normalizeMedicineKey(name) {
  return String(name || "")
    .toLowerCase()
    .replace(/\b\d+\s?(mg|ml|mcg|g)\b/gi, "")
    .replace(/[^a-z\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getMedicineInfo(name) {
  const normalizedName = normalizeMedicineKey(name);
  const databaseKey = Object.keys(MEDICINE_INFO_DATABASE).find((key) => {
    return normalizedName.includes(key);
  });

  if (databaseKey) {
    return MEDICINE_INFO_DATABASE[databaseKey];
  }

  return {
    purpose: "General medicine information is not available for this name yet.",
    condition: "Your doctor may have prescribed this for your symptoms or treatment plan.",
    advice: "Use it exactly as prescribed and confirm the medicine details with your pharmacist if needed.",
    avoid: "Avoid self-adjusting the dose or combining it with other medicines without medical advice.",
  };
}

function getMedicineDisplayName(line) {
  const normalizedLine = String(line || "").replace(/\s+/g, " ").trim();
  const databaseKey = Object.keys(MEDICINE_INFO_DATABASE).find((key) => {
    return normalizeMedicineKey(normalizedLine).includes(key);
  });

  if (databaseKey) {
    return databaseKey.charAt(0).toUpperCase() + databaseKey.slice(1);
  }

  const cleanedLine = normalizedLine
    .replace(/\b\d+\s?(mg|ml|mcg|g)\b/gi, "")
    .replace(/\b(tablet|tablets|tab|capsule|capsules|cap|syrup|drops|inj|injection|ointment)\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleanedLine) {
    return "Medicine";
  }

  return cleanedLine
    .split(" ")
    .slice(0, 3)
    .join(" ");
}

function extractMedicinesFromText(text) {
  const filteredLines = filterPrescriptionLines(text);
  const seen = new Set();

  return filteredLines
    .map((line) => {
      const name = getMedicineDisplayName(line);
      const dosageMatch = line.match(/\b\d+\s?(mg|ml|mcg|g)\b/i);
      const entryKey = normalizeMedicineKey(name);

      if (!entryKey || seen.has(entryKey)) {
        return null;
      }

      seen.add(entryKey);

      return {
        name,
        dosage: dosageMatch ? dosageMatch[0] : "",
        line,
        info: getMedicineInfo(name),
      };
    })
    .filter(Boolean);
}

function createMedicineSearchButton(label, url) {
  const link = document.createElement("a");

  link.className = "medicine-link-button";
  link.href = url;
  link.target = "_blank";
  link.rel = "noreferrer noopener";
  link.textContent = label;
  return link;
}

function createMedicineInfoCard(medicine) {
  const card = document.createElement("article");
  const title = document.createElement("h4");
  const usedFor = document.createElement("p");
  const condition = document.createElement("p");
  const advice = document.createElement("p");
  const avoid = document.createElement("p");
  const links = document.createElement("div");
  const encodedName = encodeURIComponent(medicine.name);

  card.className = "medicine-info-card";
  title.textContent = medicine.dosage ? `${medicine.name} (${medicine.dosage})` : medicine.name;
  usedFor.innerHTML = `<strong>Used for:</strong><br>${medicine.info.purpose}`;
  condition.innerHTML = `<strong>You may be taking this for:</strong><br>${medicine.info.condition}`;
  advice.innerHTML = `<strong>Advice:</strong><br>${medicine.info.advice}`;
  avoid.innerHTML = `<strong>Avoid:</strong><br>${medicine.info.avoid}`;
  links.className = "medicine-card-links";
  links.append(
    createMedicineSearchButton("Search on Google", `https://www.google.com/search?q=${encodedName}`),
    createMedicineSearchButton("Search on Tata 1mg", `https://www.1mg.com/search/all?name=${encodedName}`),
    createMedicineSearchButton("Search on PharmEasy", `https://pharmeasy.in/search/all?name=${encodedName}`)
  );
  card.append(title, usedFor, condition, advice, avoid, links);
  return card;
}

function getMedicineSearchName() {
  const parsedNameInput = document.querySelector("#parsedName");

  return parsedNameInput?.value.trim() || "Medicine";
}

function openBuyModal(medicineName) {
  const modal = document.querySelector("#buyModal");
  const safeMedicineName = encodeURIComponent(medicineName || "Medicine");

  modal.style.display = "flex";

  document.querySelector("#googleLink").onclick = () => {
    window.open(`https://www.google.com/search?q=${safeMedicineName}`, "_blank");
  };

  document.querySelector("#tataLink").onclick = () => {
    window.open(`https://www.1mg.com/search/all?name=${safeMedicineName}`, "_blank");
  };

  document.querySelector("#pharmeasyLink").onclick = () => {
    window.open(`https://pharmeasy.in/search/all?name=${safeMedicineName}`, "_blank");
  };
}

function closeBuyOnlineModal() {
  buyOnlineModal.style.display = "none";
}

function setNearbyStatus(message, isError = false) {
  nearbyStatus.textContent = message;
  nearbyStatus.className = isError ? "nearby-status is-error" : "nearby-status";
}

function setNearbyRetryVisibility(shouldShow) {
  retryNearbyButton.hidden = !shouldShow;
}

function getGeolocationErrorMessage(error) {
  if (!error) {
    return "We could not access your location. Please try again.";
  }

  if (error.code === error.PERMISSION_DENIED) {
    return "Location permission was denied. Please enable location to use Nearby Help.";
  }

  if (error.code === error.TIMEOUT) {
    return "Location request timed out. Please try again.";
  }

  if (error.code === error.POSITION_UNAVAILABLE) {
    return "Your location is unavailable right now. Please try again in a moment.";
  }

  return "We could not get your location right now. Please try again.";
}

function getNearbySearchErrorMessage(error) {
  if (!error || !error.message) {
    return "Nearby search is not available right now. Please try again.";
  }

  if (error.message === "missing-google-maps-api-key") {
    return "Google Maps is not configured yet. Add your API key in the config section.";
  }

  if (error.message === "google-maps-script-load-failed") {
    return "Google Maps could not load. Please check your internet connection and try again.";
  }

  if (error.message === "google-maps-places-unavailable") {
    return "Google Places is unavailable right now. Please try again.";
  }

  return "We could not fetch nearby services right now. Please tap retry.";
}

function getOcrErrorMessage(error) {
  if (!error || !error.message) {
    return "Could not scan this prescription. Please try another image.";
  }

  if (String(error.message).toLowerCase().includes("network")) {
    return "OCR needs a stable connection right now. Please check your internet and try again.";
  }

  if (String(error.message).toLowerCase().includes("load")) {
    return "OCR resources could not load. Please refresh and try again.";
  }

  return "Could not scan this prescription. Please use a clearer image and try again.";
}

function loadGoogleMapsPlacesApi() {
  if (window.google && google.maps && google.maps.places) {
    return Promise.resolve(window.google.maps);
  }

  if (!GOOGLE_MAPS_API_KEY || GOOGLE_MAPS_API_KEY === "YOUR_KEY") {
    return Promise.reject(new Error("missing-google-maps-api-key"));
  }

  if (googleMapsLoadPromise) {
    return googleMapsLoadPromise;
  }

  googleMapsLoadPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector('script[data-google-maps-loader="true"]');

    if (existingScript) {
      existingScript.addEventListener("load", () => {
        if (window.google && google.maps && google.maps.places) {
          resolve(window.google.maps);
          return;
        }

        reject(new Error("google-maps-places-unavailable"));
      }, { once: true });
      existingScript.addEventListener("error", () => {
        reject(new Error("google-maps-script-load-failed"));
      }, { once: true });
      return;
    }

    const script = document.createElement("script");

    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(GOOGLE_MAPS_API_KEY)}&libraries=${encodeURIComponent(GOOGLE_MAPS_LIBRARIES.join(","))}`;
    script.async = true;
    script.defer = true;
    script.dataset.googleMapsLoader = "true";
    script.onload = () => {
      if (window.google && google.maps && google.maps.places) {
        resolve(window.google.maps);
        return;
      }

      reject(new Error("google-maps-places-unavailable"));
    };
    script.onerror = () => {
      reject(new Error("google-maps-script-load-failed"));
    };
    document.head.appendChild(script);
  }).catch((error) => {
    googleMapsLoadPromise = null;
    throw error;
  });

  return googleMapsLoadPromise;
}

function getNearbyServiceType(types = []) {
  if (types.includes("hospital")) {
    return "Hospital";
  }

  if (types.includes("pharmacy")) {
    return "Pharmacy";
  }

  if (types.includes("doctor")) {
    return "Doctor";
  }

  return "Medical Service";
}

function searchNearbyPlaces(service, request) {
  return new Promise((resolve, reject) => {
    service.nearbySearch(request, (results, status) => {
      if (
        status === google.maps.places.PlacesServiceStatus.OK ||
        status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS
      ) {
        resolve(results || []);
        return;
      }

      reject(new Error(`Nearby search failed with status: ${status}`));
    });
  });
}

function normalizePlaceResults(results) {
  const seen = new Set();

  return results
    .map((place) => {
      if (!place.place_id || seen.has(place.place_id)) {
        return null;
      }

      seen.add(place.place_id);

      return {
        name: place.name || "Unnamed Medical Service",
        type: getNearbyServiceType(place.types || []),
        ratingText: typeof place.rating === "number" ? place.rating.toFixed(1) : "",
        address: place.vicinity || place.formatted_address || "Address not available",
      };
    })
    .filter(Boolean)
    .slice(0, 12);
}

function getServiceType(tags = {}) {
  if (tags.amenity === "hospital") {
    return "Hospital";
  }

  if (tags.amenity === "clinic") {
    return "Clinic";
  }

  if (tags.amenity === "pharmacy") {
    return "Pharmacy";
  }

  return "Medical Service";
}

function formatDistance(distanceInMeters) {
  if (distanceInMeters < 1000) {
    return `${Math.round(distanceInMeters)} m away`;
  }

  return `${(distanceInMeters / 1000).toFixed(1)} km away`;
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  const earthRadius = 6371000;
  const toRadians = (value) => (value * Math.PI) / 180;
  const latDistance = toRadians(lat2 - lat1);
  const lonDistance = toRadians(lon2 - lon1);
  const a =
    Math.sin(latDistance / 2) * Math.sin(latDistance / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(lonDistance / 2) *
      Math.sin(lonDistance / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadius * c;
}

function createNearbyCard(service) {
  const item = document.createElement("article");
  const header = document.createElement("div");
  const info = document.createElement("div");
  const name = document.createElement("h3");
  const meta = document.createElement("p");
  const address = document.createElement("p");
  const openButton = document.createElement("a");

  item.className = "history-item nearby-card";
  header.className = "nearby-card-header";
  info.className = "nearby-card-info";
  name.textContent = service.name;
  meta.textContent = service.ratingText
    ? `${service.type} | Rating: ${service.ratingText}`
    : service.type;
  address.className = "nearby-address";
  address.textContent = service.address;
  openButton.className = "map-link-button";
  openButton.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(service.name)}`;
  openButton.target = "_blank";
  openButton.rel = "noreferrer noopener";
  openButton.textContent = "Open in Maps";

  info.append(name, meta, address);
  header.append(info, openButton);
  item.appendChild(header);
  return item;
}

function renderNearbyResults(services) {
  nearbyResults.textContent = "";

  if (services.length === 0) {
    showEmptyHistory(nearbyResults, "No nearby services found right now.");
    return;
  }

  services.forEach((service) => {
    nearbyResults.appendChild(createNearbyCard(service));
  });
}

function buildOverpassQuery(latitude, longitude) {
  return `
    [out:json];
    (
      node["amenity"="hospital"](around:${NEARBY_RADIUS_METERS},${latitude},${longitude});
      way["amenity"="hospital"](around:${NEARBY_RADIUS_METERS},${latitude},${longitude});
      relation["amenity"="hospital"](around:${NEARBY_RADIUS_METERS},${latitude},${longitude});
      node["amenity"="pharmacy"](around:${NEARBY_RADIUS_METERS},${latitude},${longitude});
      way["amenity"="pharmacy"](around:${NEARBY_RADIUS_METERS},${latitude},${longitude});
      relation["amenity"="pharmacy"](around:${NEARBY_RADIUS_METERS},${latitude},${longitude});
      node["amenity"="clinic"](around:${NEARBY_RADIUS_METERS},${latitude},${longitude});
      way["amenity"="clinic"](around:${NEARBY_RADIUS_METERS},${latitude},${longitude});
      relation["amenity"="clinic"](around:${NEARBY_RADIUS_METERS},${latitude},${longitude});
    );
    out center tags;
  `.trim();
}

function normalizeOverpassResults(elements, userLatitude, userLongitude) {
  const seen = new Set();

  return elements
    .map((element) => {
      const latitude = element.lat ?? element.center?.lat;
      const longitude = element.lon ?? element.center?.lon;

      if (!latitude || !longitude) {
        return null;
      }

      const name = element.tags?.name || `Unnamed ${getServiceType(element.tags)}`;
      const type = getServiceType(element.tags);
      const key = `${name}-${latitude}-${longitude}`;

      if (seen.has(key)) {
        return null;
      }

      seen.add(key);

      return {
        name,
        type,
        lat: latitude,
        lon: longitude,
        distance: calculateDistance(userLatitude, userLongitude, latitude, longitude),
      };
    })
    .filter(Boolean)
    .sort((first, second) => first.distance - second.distance)
    .slice(0, 12);
}

function fetchNearbyServices() {
  if (!navigator.geolocation) {
    setNearbyStatus("Location is not supported on this device.", true);
    nearbyResults.textContent = "";
    setNearbyRetryVisibility(true);
    return;
  }

  if (nearbyRequestInFlight) {
    return;
  }

  nearbyRequestInFlight = true;
  nearbyServicesLoaded = false;
  nearbyResults.textContent = "";
  setNearbyRetryVisibility(false);
  setNearbyStatus("Fetching nearby hospitals...");

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      try {
        await loadGoogleMapsPlacesApi();
        const location = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
        const placesService = new google.maps.places.PlacesService(document.createElement("div"));
        const searchResults = await Promise.all(
          NEARBY_PLACE_TYPES.map((type) => {
            return searchNearbyPlaces(placesService, {
              location,
              radius: NEARBY_RADIUS_METERS,
              type,
            });
          })
        );
        const services = normalizePlaceResults(searchResults.flat());

        renderNearbyResults(services);
        setNearbyStatus(
          services.length > 0
            ? "Nearby hospitals, pharmacies, and doctors"
            : "No nearby medical services found in your area."
        );
        setNearbyRetryVisibility(services.length === 0);
        nearbyServicesLoaded = true;
      } catch (error) {
        console.error(error);
        nearbyResults.textContent = "";
        setNearbyStatus(getNearbySearchErrorMessage(error), true);
        setNearbyRetryVisibility(true);
      } finally {
        nearbyRequestInFlight = false;
      }
    },
    (error) => {
      nearbyRequestInFlight = false;
      nearbyResults.textContent = "";
      setNearbyStatus(getGeolocationErrorMessage(error), true);
      setNearbyRetryVisibility(true);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 300000,
    }
  );
}

function getTodayText() {
  return new Date().toLocaleDateString();
}

function getDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function parseDateKey(dateKey) {
  const [year, month, day] = String(dateKey || "").split("-").map(Number);

  if (!year || !month || !day) {
    return null;
  }

  return new Date(year, month - 1, day);
}

function getTimeLabel(timestamp) {
  return new Date(timestamp).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}

function createReminderId() {
  return `reminder-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

function getSelectedTimesOfDay() {
  return Array.from(timeOfDayOptions)
    .filter((option) => option.checked)
    .map((option) => option.value);
}

function mapTimeLabelsToClockTimes(timeLabels) {
  return timeLabels.map((label) => TIME_OF_DAY_TO_CLOCK_TIME[label] || TIME_OF_DAY_TO_CLOCK_TIME.Morning);
}

function getTimeOfDayFromClockTime(clockTime) {
  const [hours] = String(clockTime || "").split(":").map(Number);

  if (hours >= 21 || hours < 5) {
    return "Night";
  }

  if (hours >= 17) {
    return "Evening";
  }

  if (hours >= 12) {
    return "Afternoon";
  }

  return "Morning";
}

function buildReminderSchedule(name, timesOfDay, totalDays) {
  const reminders = [];
  const today = new Date();
  const now = Date.now();

  for (let dayOffset = 0; dayOffset < totalDays; dayOffset += 1) {
    timesOfDay.forEach((timeOfDay) => {
      const timeValue = TIME_OF_DAY_TO_CLOCK_TIME[timeOfDay] || TIME_OF_DAY_TO_CLOCK_TIME.Morning;
      const [hours, minutes] = timeValue.split(":").map(Number);
      const reminderDate = new Date(today);

      reminderDate.setDate(today.getDate() + dayOffset);
      reminderDate.setHours(hours || 0, minutes || 0, 0, 0);

      if (reminderDate.getTime() <= now) {
        return;
      }

      reminders.push({
        id: createReminderId(),
        name,
        timesOfDay,
        timeOfDay,
        timestamp: reminderDate.toISOString(),
        timeLabel: getTimeLabel(reminderDate.toISOString()),
        status: "pending",
      });
    });
  }

  return reminders;
}

function ensureMedicineReminderSchedule(medicine) {
  if (Array.isArray(medicine.reminderSchedule) && medicine.reminderSchedule.length > 0) {
    return false;
  }

  const durationCount = getDurationDays(medicine.duration) || DEFAULT_REMINDER_DURATION_DAYS;
  let timesOfDay = [];

  if (Array.isArray(medicine.timesOfDay) && medicine.timesOfDay.length > 0) {
    timesOfDay = medicine.timesOfDay;
  } else if (medicine.frequency) {
    timesOfDay = getReminderTimes(medicine.frequency);
  } else if (medicine.time === "Morning" || medicine.time === "Evening" || medicine.time === "Afternoon" || medicine.time === "Night") {
    timesOfDay = [medicine.time];
  } else if (Array.isArray(medicine.reminderTimes) && medicine.reminderTimes.length > 0) {
    timesOfDay = medicine.reminderTimes.map(getTimeOfDayFromClockTime);
  } else {
    timesOfDay = ["Morning"];
  }

  timesOfDay = timesOfDay.filter((timeOfDay) => TIME_OF_DAY_TO_CLOCK_TIME[timeOfDay]);

  if (timesOfDay.length === 0) {
    return false;
  }

  medicine.timesOfDay = timesOfDay;
  delete medicine.times;
  delete medicine.repeatCount;
  delete medicine.reminderTimes;
  delete medicine.time;
  medicine.reminderSchedule = buildReminderSchedule(
    medicine.name || "Medicine",
    timesOfDay,
    durationCount
  );

  return medicine.reminderSchedule.length > 0;
}

function clearReminderTimeouts() {
  Object.values(reminderTimeouts).forEach((timeoutId) => {
    clearTimeout(timeoutId);
  });

  reminderTimeouts = {};
}

function clearMissedDoseTimers() {
  Object.values(missedDoseTimers).forEach((timeoutId) => {
    clearTimeout(timeoutId);
  });

  missedDoseTimers = {};
}

function requestNotificationPermission() {
  if (!("Notification" in window) || Notification.permission !== "default") {
    return;
  }

  Notification.requestPermission().catch((error) => {
    console.error(error);
  });
}

function showBrowserNotification(reminder) {
  if (!("Notification" in window) || Notification.permission !== "granted") {
    return;
  }

  new Notification(`Take ${reminder.name} (${reminder.timeOfDay || reminder.timeLabel})`, {
    body: "Mark it as taken or missed in CareCircuit.",
  });
}

function updateReminderEntry(reminderId, updates) {
  const data = getAppData();
  const activeMember = data.members.find((member) => member.name === data.activeMember);

  if (!activeMember) {
    return null;
  }

  let updatedReminder = null;

  activeMember.data.medicines.forEach((medicine) => {
    if (!Array.isArray(medicine.reminderSchedule)) {
      return;
    }

    medicine.reminderSchedule = medicine.reminderSchedule.map((reminder) => {
      if (reminder.id !== reminderId) {
        return reminder;
      }

      updatedReminder = {
        ...reminder,
        ...updates,
      };
      return updatedReminder;
    });
  });

  saveAppData(data);
  return updatedReminder;
}

function findReminderById(reminderId) {
  const medicines = getMemberArray(MEDICINE_STORAGE_KEY);

  for (const medicine of medicines) {
    if (!Array.isArray(medicine.reminderSchedule)) {
      continue;
    }

    const reminder = medicine.reminderSchedule.find((item) => item.id === reminderId);

    if (reminder) {
      return reminder;
    }
  }

  return null;
}

function markReminderAsMissed(reminderId, shouldRefresh = true) {
  const reminder = findReminderById(reminderId);

  if (!reminder || reminder.status !== "pending") {
    return;
  }

  const updatedReminder = updateReminderEntry(reminderId, {
    status: "missed",
  });

  if (!updatedReminder) {
    return;
  }

  saveDose({
    id: updatedReminder.id,
    medicine: updatedReminder.name,
    time: updatedReminder.timeOfDay || updatedReminder.timeLabel,
    date: getTodayText(),
    status: "Missed",
  });

  if (pendingDose && pendingDose.id === reminderId) {
    reminderNotification.textContent = "Dose marked as missed";
    pendingDose = null;
  }

  delete missedDoseTimers[reminderId];

  if (shouldRefresh) {
    loadRemindersFromSavedMedicines();
  }
}

function scheduleMissedDoseTimer(reminder) {
  const remainingDelay = new Date(reminder.timestamp).getTime() + REMINDER_GRACE_PERIOD - Date.now();

  clearTimeout(missedDoseTimers[reminder.id]);

  if (remainingDelay <= 0) {
    markReminderAsMissed(reminder.id);
    return;
  }

  missedDoseTimers[reminder.id] = setTimeout(() => {
    markReminderAsMissed(reminder.id);
  }, remainingDelay);
}

function getDoseMedicine(dose) {
  if (Array.isArray(dose.medicines) && dose.medicines.length > 0) {
    return dose.medicines.join(", ");
  }

  return dose.medicine || dose.name || "Medicine";
}

function getDoseTime(dose) {
  return dose.timeOfDay || dose.time || "Morning";
}

function getDoseStatusText(status) {
  return status === "Missed" ? "✖ Missed" : "✔ Taken";
}

function getReminderDose(reminder, status) {
  return {
    id: reminder.id,
    medicine: reminder.name || reminder.medicine || "Medicine",
    time: reminder.timeOfDay || reminder.timeLabel || reminder.time || "Morning",
    date: getTodayText(),
    status,
  };
}

function removeDoseHistoryByReminderId(reminderId) {
  if (!reminderId) {
    return;
  }

  const doseHistory = getMemberArray(DOSE_STORAGE_KEY).filter((dose) => dose.id !== reminderId);

  saveMemberArray(DOSE_STORAGE_KEY, doseHistory);
  renderDoseHistory();
}

function setReminderStatus(reminderId, status) {
  const updatedReminder = updateReminderEntry(reminderId, {
    status,
  });

  if (!updatedReminder) {
    return null;
  }

  const activeReminder = activeReminders.find((reminder) => reminder.id === reminderId);

  if (activeReminder) {
    activeReminder.status = status;
  }

  return updatedReminder;
}

function completeReminderAction(reminder, status) {
  const statusKey = status.toLowerCase();
  const updatedReminder = setReminderStatus(reminder.id, statusKey);

  if (!updatedReminder) {
    return;
  }

  clearTimeout(reminderTimeouts[reminder.id]);
  delete reminderTimeouts[reminder.id];
  clearTimeout(missedDoseTimers[reminder.id]);
  delete missedDoseTimers[reminder.id];
  saveDose(getReminderDose({
    ...reminder,
    ...updatedReminder,
  }, status));
  renderActiveReminders();
}

function undoReminderAction(reminder) {
  const updatedReminder = setReminderStatus(reminder.id, "pending");

  if (!updatedReminder) {
    return;
  }

  removeDoseHistoryByReminderId(reminder.id);
  loadRemindersFromSavedMedicines();
}

function getRoutineMedicines(routine) {
  if (Array.isArray(routine.medicines)) {
    return routine.medicines.filter(Boolean);
  }

  return String(routine.name || "")
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean);
}

function isRoutineActiveToday(routine) {
  const startDate = parseDateKey(routine.startDate);
  const duration = Number(routine.duration) || 0;

  if (!startDate || duration <= 0) {
    return false;
  }

  const today = parseDateKey(getDateKey());
  const endDate = new Date(startDate);

  endDate.setDate(startDate.getDate() + duration - 1);

  return today >= startDate && today <= endDate;
}

function getTodayRoutineGroups() {
  const groups = new Map();
  const orderedTimes = ["Morning", "Afternoon", "Evening", "Night"];

  getMemberArray(MEDICINE_STORAGE_KEY).forEach((routine) => {
    const medicines = getRoutineMedicines(routine);
    const timesOfDay = Array.isArray(routine.timesOfDay) && routine.timesOfDay.length > 0
      ? routine.timesOfDay
      : [routine.timeOfDay].filter(Boolean);

    if (timesOfDay.length === 0 || medicines.length === 0 || !isRoutineActiveToday(routine)) {
      return;
    }

    timesOfDay.forEach((timeOfDay) => {
      if (!groups.has(timeOfDay)) {
        groups.set(timeOfDay, []);
      }

      medicines.forEach((medicine) => {
        if (!groups.get(timeOfDay).includes(medicine)) {
          groups.get(timeOfDay).push(medicine);
        }
      });
    });
  });

  return orderedTimes
    .filter((timeOfDay) => groups.has(timeOfDay))
    .map((timeOfDay) => ({
      timeOfDay,
      medicines: groups.get(timeOfDay),
    }));
}

function getDoseStatus(medicine, timeOfDay) {
  const today = getTodayText();
  const entry = getMemberArray(DOSE_STORAGE_KEY).find((dose) => {
    return dose.date === today
      && dose.timeOfDay === timeOfDay
      && (dose.medicine || dose.name) === medicine;
  });

  return entry?.status || "Pending";
}

function toggleDoseAction(medicine, timeOfDay, status) {
  const doseHistory = getMemberArray(DOSE_STORAGE_KEY).filter((dose) => {
    return !(dose.date === getTodayText()
      && dose.timeOfDay === timeOfDay
      && (dose.medicine || dose.name) === medicine);
  });
  const currentStatus = getDoseStatus(medicine, timeOfDay);

  if (currentStatus !== status) {
    doseHistory.push({
      date: getTodayText(),
      timeOfDay,
      medicine,
      status,
    });
  }

  saveMemberArray(DOSE_STORAGE_KEY, doseHistory);
  renderDoseHistory();
  renderActiveReminders();
}

function getDurationDays(durationText) {
  const match = String(durationText || "").match(/\d+/);

  return match ? Number(match[0]) : 0;
}

function getFinishDate(durationValue) {
  const days = getDurationDays(durationValue);
  const finishDate = new Date();

  if (!days) {
    return "";
  }

  finishDate.setDate(finishDate.getDate() + days);
  return finishDate.toISOString().split("T")[0];
}

function getDaysUntil(dateText) {
  const today = new Date();
  const targetDate = new Date(dateText);
  const oneDay = 1000 * 60 * 60 * 24;

  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);
  return Math.ceil((targetDate - today) / oneDay);
}

function renderRefillReminders() {
  const savedMedicines = getMemberArray(MEDICINE_STORAGE_KEY);
  const refillMedicines = savedMedicines.filter((medicine) => {
    if (!medicine.finishDate) {
      return false;
    }

    return getDaysUntil(medicine.finishDate) <= 1;
  });

  refillRemindersList.textContent = "";

  if (refillMedicines.length === 0) {
    showEmptyHistory(refillRemindersList, "No refill reminders right now.");
    refillNotification.style.display = "none";
    return;
  }

  refillMedicines.forEach((medicine) => {
    addHistoryItem(
      refillRemindersList,
      `${medicine.name}\nFinish date: ${medicine.finishDate}\nYour medicine will finish soon`
    );
  });

  refillNotification.textContent = "Your medicine will finish soon";
  refillNotification.style.display = "block";
}

function renderFamilyMembers() {
  const members = getAppData().members;
  const activeMember = getActiveMember();

  familyMembersList.textContent = "";

  if (members.length === 0) {
    showEmptyHistory(familyMembersList, "No family members added yet.");
    return;
  }

  members.forEach((member) => {
    const item = document.createElement("div");
    const profileButton = document.createElement("button");
    const text = document.createElement("span");
    const name = document.createElement("strong");
    const age = document.createElement("span");
    const menuWrapper = document.createElement("div");
    const menuButton = document.createElement("button");
    const menu = document.createElement("div");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const isActive = member.name === activeMember;
    const ageText = member.age ? `Age: ${member.age}` : "Age not added";

    item.className = isActive ? "member-card active" : "member-card";
    profileButton.type = "button";
    profileButton.className = "member-button";
    text.className = "member-card-text";
    name.textContent = member.name;
    age.textContent = ageText;
    text.append(name, age);
    profileButton.appendChild(text);

    if (isActive) {
      const badge = document.createElement("span");

      badge.className = "member-active-badge";
      badge.textContent = "Active";
      profileButton.appendChild(badge);
    }

    profileButton.addEventListener("click", () => {
      setActiveMember(member.name);
    });

    menuWrapper.className = "member-menu";
    menuButton.type = "button";
    menuButton.className = "member-menu-button";
    menuButton.textContent = "⋮";
    menuButton.setAttribute("aria-label", `${member.name} profile actions`);
    menu.hidden = true;
    menu.className = "member-menu-options";
    menuButton.addEventListener("click", (event) => {
      event.stopPropagation();
      menu.hidden = !menu.hidden;
    });

    editButton.type = "button";
    editButton.className = "member-menu-option";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      openFamilyEditModal(member);
    });

    deleteButton.type = "button";
    deleteButton.className = "member-menu-option delete-member-option";
    deleteButton.textContent = "x";
    deleteButton.addEventListener("click", () => {
      deleteFamilyMember(member.name);
    });

    menu.append(editButton, deleteButton);
    menuWrapper.append(menuButton, menu);
    item.append(profileButton, menuWrapper);
    familyMembersList.appendChild(item);
  });
}

function openFamilyEditModal(member) {
  editingFamilyMemberName = member.name;
  editFamilyName.value = member.name;
  editFamilyAge.value = member.age || "";
  familyEditModal.style.display = "flex";
}

function closeFamilyEditModal() {
  editingFamilyMemberName = "";
  familyEditModal.style.display = "none";
  familyEditForm.reset();
}

function openDeleteModal(memberName, onConfirmCallback) {
  pendingDeleteMemberCallback = onConfirmCallback;
  lastFocusedElementBeforeDeleteModal = document.activeElement;
  deleteProfileModal.classList.add("active");
  deleteProfileModal.dataset.memberName = memberName;
  deleteProfileCancel.focus();
}

function closeDeleteModal() {
  deleteProfileModal.classList.remove("active");
  delete deleteProfileModal.dataset.memberName;
  pendingDeleteMemberCallback = null;

  if (lastFocusedElementBeforeDeleteModal) {
    lastFocusedElementBeforeDeleteModal.focus();
  }
}

function keepDeleteModalFocus(event) {
  if (!deleteProfileModal.classList.contains("active") || event.key !== "Tab") {
    return;
  }

  const focusableElements = deleteProfileModal.querySelectorAll("button");
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
}

function handleDeleteModalKeydown(event) {
  if (!deleteProfileModal.classList.contains("active")) {
    return;
  }

  if (event.key === "Escape") {
    closeDeleteModal();
    return;
  }

  keepDeleteModalFocus(event);
}

function saveFamilyMemberEdit(event) {
  event.preventDefault();

  const data = getAppData();
  const member = data.members.find((item) => item.name === editingFamilyMemberName);
  const newName = editFamilyName.value.trim();
  const newAge = editFamilyAge.value.trim();

  if (!member || !newName) {
    return;
  }

  const nameExists = data.members.some((item) => item.name === newName && item.name !== editingFamilyMemberName);

  if (nameExists) {
    alert("A member with this name already exists.");
    return;
  }

  if (data.activeMember === editingFamilyMemberName) {
    data.activeMember = newName;
  }

  member.name = newName;
  member.age = newAge;
  saveAppData(data);
  closeFamilyEditModal();
  refreshMemberData();
}

function deleteFamilyMember(name) {
  const data = getAppData();

  if (data.members.length <= 1) {
    alert("You need at least one family member profile.");
    return;
  }

  openDeleteModal(name, () => {
    const latestData = getAppData();

    latestData.members = latestData.members.filter((member) => member.name !== name);

    if (latestData.activeMember === name) {
      latestData.activeMember = latestData.members[0].name;
    }

    saveAppData(latestData);
    refreshMemberData();
  });
}

function refreshMemberData() {
  clearReminderTimeouts();
  clearMissedDoseTimers();
  pendingDose = null;
  reminderNotification.style.display = "none";
  renderActiveMember();
  renderHistory();
  loadRemindersFromSavedMedicines();
  renderDoseHistory();
  renderRefillReminders();
  renderFamilyMembers();
}

function setActiveMember(name) {
  const data = getAppData();

  data.activeMember = name;

  if (!data.members.some((member) => member.name === name)) {
    data.members.push(createMember(name));
  }

  saveAppData(data);
  refreshMemberData();
}

function saveDose(dose) {
  const doseHistory = getMemberArray(DOSE_STORAGE_KEY);
  const alreadySaved = doseHistory.some((entry) => entry.id && entry.id === dose.id && entry.status === dose.status);

  if (alreadySaved) {
    return;
  }

  doseHistory.push(dose);
  saveMemberArray(DOSE_STORAGE_KEY, doseHistory);
  renderDoseHistory();
}

function renderDoseHistory() {
  const doseHistory = getMemberArray(DOSE_STORAGE_KEY);
  const today = getTodayText();
  const takenDoses = doseHistory
    .map((dose, index) => ({ dose, index }))
    .filter((entry) => entry.dose.status === "Taken");
  const missedDoses = doseHistory
    .map((dose, index) => ({ dose, index }))
    .filter((entry) => entry.dose.status === "Missed");
  const missedToday = missedDoses.filter(({ dose }) => dose.date === today).length;

  takenDosesList.textContent = "";
  missedDosesList.textContent = "";

  doseSummary.textContent = `You missed ${missedToday} dose${missedToday === 1 ? "" : "s"} today`;

  if (takenDoses.length === 0) {
    showEmptyHistory(takenDosesList, "No taken doses yet.");
  } else {
    takenDoses.forEach(({ dose, index }) => {
      takenDosesList.appendChild(createDoseHistoryItem(dose, index));
    });
  }

  if (missedDoses.length === 0) {
    showEmptyHistory(missedDosesList, "No missed doses yet.");
  } else {
    missedDoses.forEach(({ dose, index }) => {
      missedDosesList.appendChild(createDoseHistoryItem(dose, index));
    });
  }
}

function createDoseHistoryItem(dose, index) {
  const item = document.createElement("div");
  const text = document.createElement("span");
  const menuWrapper = document.createElement("div");
  const menuButton = document.createElement("button");
  const menu = document.createElement("div");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  item.className = "history-item dose-history-item reminder-dose-history-item";
  text.className = "reminder-dose-text";
  text.textContent = `${dose.status === "Missed" ? "✖" : "✔"} ${getDoseMedicine(dose)} (${getDoseTime(dose)})`;
  menuWrapper.className = "dose-entry-menu";
  menuButton.type = "button";
  menuButton.className = "dose-entry-menu-button";
  menuButton.textContent = "⋮";
  menuButton.setAttribute("aria-label", "Dose actions");
  menu.hidden = true;
  menu.className = "dose-entry-menu-options";
  menuButton.addEventListener("click", () => {
    menu.hidden = !menu.hidden;
  });
  editButton.type = "button";
  editButton.className = "dose-entry-menu-option";
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => {
    toggleDoseHistoryStatus(index);
  });
  deleteButton.type = "button";
  deleteButton.className = "dose-entry-menu-option delete-history-button";
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    deleteDoseHistoryEntry(index);
  });
  menu.append(editButton, deleteButton);
  menuWrapper.append(menuButton, menu);
  item.append(text, menuWrapper);
  return item;
}

function toggleDoseHistoryStatus(index) {
  const doseHistory = getMemberArray(DOSE_STORAGE_KEY);
  const dose = doseHistory[index];

  if (!dose) {
    return;
  }

  dose.status = dose.status === "Taken" ? "Missed" : "Taken";

  if (dose.id) {
    setReminderStatus(dose.id, dose.status.toLowerCase());
  }

  saveMemberArray(DOSE_STORAGE_KEY, doseHistory);
  renderDoseHistory();
  renderActiveReminders();
}

function deleteDoseHistoryEntry(index) {
  const doseHistory = getMemberArray(DOSE_STORAGE_KEY);

  if (!doseHistory[index]) {
    return;
  }

  doseHistory.splice(index, 1);
  saveMemberArray(DOSE_STORAGE_KEY, doseHistory);
  renderDoseHistory();
  renderActiveReminders();
}

function getHistoryDateKey(dateValue) {
  const date = parseDateKey(dateValue) || new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return String(dateValue || "Unknown date");
  }

  return getDateKey(date);
}

function formatHistoryDate(dateValue) {
  const date = parseDateKey(dateValue) || new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return String(dateValue || "Unknown date");
  }

  return date.toLocaleDateString([], {
    day: "numeric",
    month: "short",
  });
}

function groupByHistoryDate(items, getDate) {
  return items.reduce((groups, item) => {
    const dateKey = getHistoryDateKey(getDate(item));

    if (!groups.has(dateKey)) {
      groups.set(dateKey, []);
    }

    groups.get(dateKey).push(item);
    return groups;
  }, new Map());
}

function getSortedHistoryDates(groups) {
  return Array.from(groups.keys()).sort((firstDate, secondDate) => {
    const first = parseDateKey(firstDate) || new Date(firstDate);
    const second = parseDateKey(secondDate) || new Date(secondDate);

    return second.getTime() - first.getTime();
  });
}

function createHistorySummary(items) {
  const summary = document.createElement("div");

  summary.className = "history-summary-grid";
  items.forEach(([label, value]) => {
    const item = document.createElement("div");
    const count = document.createElement("strong");
    const text = document.createElement("span");

    item.className = "history-summary-item";
    count.textContent = value;
    text.textContent = label;
    item.append(count, text);
    summary.appendChild(item);
  });
  return summary;
}

function renderHistoryDateList(container, dates, onSelectDate) {
  container.textContent = "";

  if (dates.length === 0) {
    showEmptyHistory(container, "No records yet.");
    return;
  }

  dates.forEach((dateKey, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = index === 0 ? "history-date-button active" : "history-date-button";
    button.textContent = formatHistoryDate(dateKey);
    button.addEventListener("click", () => {
      container.querySelectorAll(".history-date-button").forEach((dateButton) => {
        dateButton.classList.remove("active");
      });
      button.classList.add("active");
      onSelectDate(dateKey);
    });
    container.appendChild(button);
  });

  onSelectDate(dates[0]);
}

function deleteDoseHistoryDay(dateKey) {
  const doseHistory = getMemberArray(DOSE_STORAGE_KEY).filter((dose) => {
    return getHistoryDateKey(dose.date) !== dateKey;
  });

  saveMemberArray(DOSE_STORAGE_KEY, doseHistory);
  renderDoseHistory();
  renderHistory();
  renderActiveReminders();
}

function deleteDoseHistoryRecord(index, medicineToDelete = "") {
  const doseHistory = getMemberArray(DOSE_STORAGE_KEY);
  const dose = doseHistory[index];

  if (!dose) {
    return;
  }

  if (Array.isArray(dose.medicines) && dose.medicines.length > 1 && medicineToDelete) {
    dose.medicines = dose.medicines.filter((medicine) => medicine !== medicineToDelete);
  } else {
    doseHistory.splice(index, 1);
  }

  saveMemberArray(DOSE_STORAGE_KEY, doseHistory);
  renderDoseHistory();
  renderHistory();
  renderActiveReminders();
}

function getDoseHistoryCount(dose, status) {
  if (dose.status !== status) {
    return 0;
  }

  return Array.isArray(dose.medicines) && dose.medicines.length > 0 ? dose.medicines.length : 1;
}

function renderDosageDateDetails(dateKey, entries) {
  const timeOrder = ["Morning", "Afternoon", "Evening", "Night"];
  const entriesByTime = groupByHistoryDate([], () => "");
  const title = document.createElement("div");
  const deleteDayButton = document.createElement("button");

  dosageDateDetails.textContent = "";
  title.className = "history-detail-header";
  title.textContent = `Date: ${formatHistoryDate(dateKey)}`;
  deleteDayButton.type = "button";
  deleteDayButton.className = "history-delete-day";
  deleteDayButton.textContent = "Delete day";
  deleteDayButton.addEventListener("click", () => {
    deleteDoseHistoryDay(dateKey);
  });
  dosageDateDetails.append(title, deleteDayButton);

  entries.forEach((entry) => {
    const timeOfDay = getDoseTime(entry.dose);

    if (!entriesByTime.has(timeOfDay)) {
      entriesByTime.set(timeOfDay, []);
    }

    entriesByTime.get(timeOfDay).push(entry);
  });

  timeOrder
    .filter((timeOfDay) => entriesByTime.has(timeOfDay))
    .forEach((timeOfDay) => {
      const group = document.createElement("div");
      const heading = document.createElement("h4");

      group.className = "history-detail-group";
      heading.textContent = `${timeOfDay}:`;
      group.appendChild(heading);

      entriesByTime.get(timeOfDay).forEach(({ dose, index }) => {
        const medicines = Array.isArray(dose.medicines) && dose.medicines.length > 0
          ? dose.medicines
          : [getDoseMedicine(dose)];

        medicines.forEach((medicine) => {
          const row = document.createElement("div");
          const text = document.createElement("span");
          const deleteButton = document.createElement("button");

          row.className = "history-detail-row";
          text.textContent = `${dose.status === "Missed" ? "✖" : "✔"} ${medicine}`;
          deleteButton.type = "button";
          deleteButton.className = "history-delete-entry";
          deleteButton.textContent = "×";
          deleteButton.setAttribute("aria-label", "Delete history entry");
          deleteButton.addEventListener("click", () => {
            deleteDoseHistoryRecord(index, medicine);
          });
          row.append(text, deleteButton);
          group.appendChild(row);
        });
      });

      dosageDateDetails.appendChild(group);
    });
}

function renderDosageHistoryTab() {
  const doseHistory = getMemberArray(DOSE_STORAGE_KEY);
  const indexedDoses = doseHistory.map((dose, index) => ({ dose, index }));
  const takenCount = doseHistory.reduce((total, dose) => total + getDoseHistoryCount(dose, "Taken"), 0);
  const missedCount = doseHistory.reduce((total, dose) => total + getDoseHistoryCount(dose, "Missed"), 0);
  const groupedByDate = groupByHistoryDate(indexedDoses, ({ dose }) => dose.date);
  const dates = getSortedHistoryDates(groupedByDate);

  dosageHistorySummary.textContent = "";
  dosageDateDetails.textContent = "";
  dosageHistorySummary.appendChild(createHistorySummary([
    ["Total doses taken", takenCount],
    ["Total doses missed", missedCount],
  ]));
  renderHistoryDateList(dosageDateList, dates, (dateKey) => {
    renderDosageDateDetails(dateKey, groupedByDate.get(dateKey) || []);
  });
}

function getDoctorVisitDate(visit) {
  return visit.date || visit.visitDate || visit.createdAt || visit.nextVisit || visit.nextVisitDate;
}

function isFutureDoctorVisit(dateValue) {
  const visitDate = parseDateKey(getHistoryDateKey(dateValue));
  const today = parseDateKey(getDateKey());

  if (!visitDate || !today) {
    return false;
  }

  return visitDate.getTime() > today.getTime();
}

function normalizeDoctorVisit(visit, index) {
  const date = getDoctorVisitDate(visit) || getDateKey();
  const normalizedStatus = ["Scheduled", "Visited", "Postponed"].includes(visit.status)
    ? visit.status
    : (isFutureDoctorVisit(date) ? "Scheduled" : "Visited");

  return {
    id: visit.id || `doctor-visit-${index}`,
    date,
    status: normalizedStatus,
    remark: visit.remark || visit.notes || "",
    nextVisit: visit.nextVisit || visit.nextVisitDate || "",
  };
}

function getDoctorVisitEntries(filterFn = () => true) {
  return getMemberArray("doctorVisits")
    .map((visit, index) => ({
      visit: normalizeDoctorVisit(visit, index),
      index,
    }))
    .filter(({ visit }) => filterFn(visit));
}

function saveDoctorVisit(event) {
  event.preventDefault();

  const selectedDate = doctorVisitDate.value || getDateKey();
  const visits = getMemberArray("doctorVisits");

  visits.push({
    id: `doctor-visit-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    date: selectedDate,
    status: "Scheduled",
    remark: doctorVisitReason.value.trim(),
    nextVisit: "",
  });
  saveMemberArray("doctorVisits", visits);
  doctorVisitForm.reset();
  doctorVisitDate.value = getDateKey();
  renderHistory();
}

function updateDoctorVisitStatus(index, updates) {
  const visits = getMemberArray("doctorVisits");

  if (!visits[index]) {
    return;
  }

  visits[index] = {
    ...normalizeDoctorVisit(visits[index], index),
    ...updates,
  };
  saveMemberArray("doctorVisits", visits);
  renderHistory();
}

function openVisitStatusModal(index, mode) {
  const visits = getMemberArray("doctorVisits");
  const visit = visits[index] ? normalizeDoctorVisit(visits[index], index) : null;

  if (!visit) {
    return;
  }

  pendingVisitStatusUpdate = { index, mode };
  visitStatusForm.reset();
  visitStatusTitle.textContent = mode === "Visited" ? "Mark as Visited" : "Mark as Postponed";
  visitStatusNote.textContent = `Visit date: ${formatHistoryDate(visit.date)}`;
  visitStatusRemark.value = mode === "Visited" ? (visit.remark || "") : "";
  visitStatusRemark.required = mode === "Visited";
  visitStatusRemarkHint.textContent = mode === "Visited" ? "(required)" : "(optional)";
  visitStatusNextVisitGroup.hidden = mode !== "Visited";
  visitStatusNextVisit.value = mode === "Visited" ? (visit.nextVisit || "") : "";
  visitStatusSaveButton.textContent = mode === "Visited" ? "Save Visit" : "Save Postponed Visit";
  visitStatusModal.style.display = "flex";
}

function closeVisitStatusModal() {
  pendingVisitStatusUpdate = null;
  visitStatusModal.style.display = "none";
  visitStatusForm.reset();
  visitStatusNextVisitGroup.hidden = false;
}

function handleVisitStatusSubmit(event) {
  event.preventDefault();

  if (!pendingVisitStatusUpdate) {
    return;
  }

  const { index, mode } = pendingVisitStatusUpdate;
  const updates = {
    status: mode,
    remark: visitStatusRemark.value.trim(),
    nextVisit: mode === "Visited" ? visitStatusNextVisit.value : "",
  };

  updateDoctorVisitStatus(index, updates);
  closeVisitStatusModal();
}


function deleteDoctorVisitDay(dateKey) {
  const visits = getMemberArray("doctorVisits").filter((visit) => {
    return getHistoryDateKey(getDoctorVisitDate(visit)) !== dateKey;
  });

  saveMemberArray("doctorVisits", visits);
  renderHistory();
}

function deleteDoctorVisitRecord(index) {
  const visits = getMemberArray("doctorVisits");

  if (!visits[index]) {
    return;
  }

  visits.splice(index, 1);
  saveMemberArray("doctorVisits", visits);
  renderHistory();
}

function appendDoctorVisitCard(container, visit, index) {
  const item = document.createElement("div");
  const status = document.createElement("strong");
  const remark = document.createElement("span");
  const nextVisit = document.createElement("span");
  const deleteButton = document.createElement("button");
  const statusText = visit.status === "Postponed" ? "\u23f3 Postponed" : "\u2714 Visited";

  item.className = "history-detail-card";
  status.textContent = statusText;
  remark.textContent = `Remark: ${visit.remark || "No remark"}`;
  nextVisit.textContent = visit.nextVisit ? `Next visit: ${formatHistoryDate(visit.nextVisit)}` : "Next visit: Not set";
  deleteButton.type = "button";
  deleteButton.className = "history-delete-entry";
  deleteButton.textContent = "x";
  deleteButton.setAttribute("aria-label", "Delete doctor visit");
  deleteButton.addEventListener("click", () => {
    deleteDoctorVisitRecord(index);
  });
  item.append(status, remark, nextVisit, deleteButton);
  container.appendChild(item);
}

function renderCompletedDoctorVisitDetails(container, dateKey, entries) {
  const title = document.createElement("div");
  const deleteDayButton = document.createElement("button");

  container.textContent = "";
  title.className = "history-detail-header";
  title.textContent = `Date: ${formatHistoryDate(dateKey)}`;
  deleteDayButton.type = "button";
  deleteDayButton.className = "history-delete-day";
  deleteDayButton.textContent = "Delete day";
  deleteDayButton.addEventListener("click", () => {
    deleteDoctorVisitDay(dateKey);
  });
  container.append(title, deleteDayButton);

  entries.forEach(({ visit, index }) => {
    appendDoctorVisitCard(container, visit, index);
  });
}

function renderCompletedDoctorVisitGroup(summaryContainer, dateListContainer, detailContainer, entries) {
  const groupedByDate = groupByHistoryDate(entries, ({ visit }) => visit.date);
  const dates = getSortedHistoryDates(groupedByDate);
  const visitedCount = entries.filter(({ visit }) => visit.status === "Visited").length;
  const postponedCount = entries.filter(({ visit }) => visit.status === "Postponed").length;

  summaryContainer.textContent = "";
  detailContainer.textContent = "";
  summaryContainer.appendChild(createHistorySummary([
    ["Visited", visitedCount],
    ["Postponed", postponedCount],
  ]));
  renderHistoryDateList(dateListContainer, dates, (dateKey) => {
    renderCompletedDoctorVisitDetails(detailContainer, dateKey, groupedByDate.get(dateKey) || []);
  });
}

function renderVisitHistoryTab() {
  const completedVisits = getDoctorVisitEntries((visit) => visit.status !== "Scheduled");

  renderCompletedDoctorVisitGroup(
    visitHistorySummary,
    visitHistoryDateList,
    visitHistoryDetails,
    completedVisits
  );
}

function renderUpcomingDoctorVisits() {
  const upcomingVisits = getDoctorVisitEntries((visit) => visit.status === "Scheduled").sort((first, second) => {
    return new Date(first.visit.date).getTime() - new Date(second.visit.date).getTime();
  });
  const notedVisits = upcomingVisits.filter(({ visit }) => Boolean(visit.remark)).length;

  upcomingVisitSummary.textContent = "";
  upcomingVisitsList.textContent = "";
  upcomingVisitSummary.appendChild(createHistorySummary([
    ["Scheduled visits", upcomingVisits.length],
    ["With note", notedVisits],
  ]));

  if (upcomingVisits.length === 0) {
    showEmptyHistory(upcomingVisitsList, "No upcoming visits scheduled.");
    return;
  }

  upcomingVisits.forEach(({ visit, index }) => {
    const item = document.createElement("div");
    const meta = document.createElement("div");
    const date = document.createElement("strong");
    const reason = document.createElement("span");
    const actions = document.createElement("div");
    const visitedButton = document.createElement("button");
    const postponedButton = document.createElement("button");

    item.className = "history-item upcoming-visit-card";
    meta.className = "upcoming-visit-meta";
    date.textContent = `Date: ${formatHistoryDate(visit.date)}`;
    reason.textContent = `Reason: ${visit.remark || "No note"}`;
    actions.className = "visit-action-row";
    visitedButton.type = "button";
    visitedButton.className = "visit-action-button visited-button";
    visitedButton.textContent = "Mark as Visited";
    visitedButton.addEventListener("click", () => {
      openVisitStatusModal(index, "Visited");
    });
    postponedButton.type = "button";
    postponedButton.className = "visit-action-button postponed-button";
    postponedButton.textContent = "Mark as Postponed";
    postponedButton.addEventListener("click", () => {
      openVisitStatusModal(index, "Postponed");
    });

    meta.append(date, reason);
    actions.append(visitedButton, postponedButton);
    item.append(meta, actions);
    upcomingVisitsList.appendChild(item);
  });
}

function renderCompletedDoctorVisitsTab() {
  const completedVisits = getDoctorVisitEntries((visit) => visit.status !== "Scheduled");

  renderCompletedDoctorVisitGroup(
    completedVisitSummary,
    completedVisitDateList,
    completedVisitDetails,
    completedVisits
  );
}

function renderDoctorVisitsSection() {
  renderUpcomingDoctorVisits();
  renderCompletedDoctorVisitsTab();
}

function getMedicalRecordSearchName(record, medicines) {
  if (medicines[0]?.name) {
    return medicines[0].name;
  }

  if (record.remark) {
    return record.remark;
  }

  return "Medicine";
}

function createMedicalRecordSearchLinks(searchName) {
  const links = document.createElement("div");
  const safeName = String(searchName || "Medicine").trim() || "Medicine";
  const googleName = encodeURIComponent(`${safeName} medicine`);
  const encodedName = encodeURIComponent(safeName);

  links.className = "medical-record-link-grid";
  links.append(
    createMedicineSearchButton("Search on Google", `https://www.google.com/search?q=${googleName}`),
    createMedicineSearchButton("Search on Tata 1mg", `https://www.1mg.com/search/all?name=${encodedName}`),
    createMedicineSearchButton("Search on PharmEasy", `https://pharmeasy.in/search/all?name=${encodedName}`)
  );
  return links;
}

function updatePrescriptionRecord(recordId, updater) {
  const prescriptions = getMemberArray(PRESCRIPTION_STORAGE_KEY);
  const updatedPrescriptions = prescriptions.map((record) => {
    if (record.id !== recordId) {
      return record;
    }

    const updates = typeof updater === "function" ? updater(record) : updater;
    return {
      ...record,
      ...updates,
    };
  });

  saveMemberArray(PRESCRIPTION_STORAGE_KEY, updatedPrescriptions);
  renderHistory();
}

function deletePrescriptionRecord(recordId) {
  const prescriptions = getMemberArray(PRESCRIPTION_STORAGE_KEY).filter((record) => record.id !== recordId);

  if (expandedMedicalRecordId === recordId) {
    expandedMedicalRecordId = "";
  }

  saveMemberArray(PRESCRIPTION_STORAGE_KEY, prescriptions);
  renderHistory();
}

function deletePrescriptionDate(dateKey) {
  const prescriptions = getMemberArray(PRESCRIPTION_STORAGE_KEY).filter((record) => {
    return getHistoryDateKey(record.date) !== dateKey;
  });

  if (expandedMedicalRecordDateKey === dateKey) {
    expandedMedicalRecordDateKey = "";
    expandedMedicalRecordId = "";
  }

  saveMemberArray(PRESCRIPTION_STORAGE_KEY, prescriptions);
  renderHistory();
}

function openRecordEditor(options) {
  pendingRecordEditorState = options;
  recordEditorForm.reset();
  recordEditorTitle.textContent = options.title;
  recordEditorNote.textContent = options.note || "";
  recordEditorLabel.textContent = options.label;
  recordEditorTextarea.value = options.value || "";
  recordEditorTextarea.placeholder = options.placeholder || "";
  recordEditorSave.textContent = options.saveLabel || "Save";
  recordEditorModal.style.display = "flex";
  recordEditorTextarea.focus();
}

function closeRecordEditor() {
  pendingRecordEditorState = null;
  recordEditorModal.style.display = "none";
  recordEditorForm.reset();
}

function handleRecordEditorSubmit(event) {
  event.preventDefault();

  if (!pendingRecordEditorState) {
    return;
  }

  pendingRecordEditorState.onSave(recordEditorTextarea.value);
  closeRecordEditor();
}

function addManualMedicinesToRecord(record) {
  const existingValue = getPrescriptionMedicines(record)
    .map((medicine) => medicine.name)
    .join("\n");

  openRecordEditor({
    title: "Add Medicines",
    label: "Enter one medicine per line",
    note: "Each medicine will be saved separately.",
    placeholder: "Paracetamol\nVitamin C",
    value: existingValue,
    saveLabel: "Save",
    onSave: (rawValue) => {
      const manualMedicines = rawValue
        .split(/\r?\n/)
        .map((name) => name.trim().toLowerCase())
        .filter(Boolean)
        .map((name) => ({
          name,
          dosage: "",
          info: getMedicineInfo(name),
        }));

      expandedMedicalRecordDateKey = getHistoryDateKey(record.date);
      expandedMedicalRecordId = record.id;
      updatePrescriptionRecord(record.id, {
        medicines: manualMedicines,
      });
    },
  });
}

function addRemarkToRecord(record) {
  openRecordEditor({
    title: "Add/Edit Remark",
    label: "Remark",
    note: "Add a short note for what this receipt is for.",
    placeholder: "Fever treatment",
    value: record.remark || "",
    saveLabel: "Save",
    onSave: (rawValue) => {
      expandedMedicalRecordDateKey = getHistoryDateKey(record.date);
      expandedMedicalRecordId = record.id;
      updatePrescriptionRecord(record.id, {
        remark: rawValue.trim(),
      });
    },
  });
}

function createMedicalRecordDetailPanel(record, medicines) {
  const panel = document.createElement("div");
  const detailText = document.createElement("div");
  const ocrHeading = document.createElement("strong");
  const ocrContent = document.createElement("span");
  const medicineHeading = document.createElement("strong");
  const medicineList = document.createElement("div");
  const manualActions = document.createElement("div");
  const addMedicinesButton = document.createElement("button");
  const addRemarkButton = document.createElement("button");
  const hasUsefulText = Boolean(String(record.extractedText || "").trim());
  const hasMedicines = medicines.length > 0;

  panel.className = "medical-record-detail-panel";
  detailText.className = "medical-record-meta";
  ocrHeading.textContent = "Extracted text";
  medicineHeading.textContent = "Medicines";

  if (hasUsefulText) {
    ocrContent.textContent = record.extractedText;
    detailText.append(ocrHeading, ocrContent);
  }

  medicineList.className = "medical-record-medicine-list";

  if (hasMedicines) {
    medicines.forEach((medicine) => {
      const item = document.createElement("div");
      const title = document.createElement("strong");

      item.className = "medical-record-medicine-item";
      title.textContent = medicine.dosage ? `${medicine.name} (${medicine.dosage})` : medicine.name;
      item.append(title, createMedicalRecordSearchLinks(medicine.name));
      medicineList.appendChild(item);
    });
  } else {
    const empty = document.createElement("span");

    empty.textContent = "No medicine found";
    medicineList.appendChild(empty);
  }

  detailText.append(medicineHeading, medicineList);

  manualActions.className = "medical-record-manual-actions";
  addMedicinesButton.type = "button";
  addMedicinesButton.className = "history-action-button";
  addMedicinesButton.textContent = "Add Medicines Manually";
  addMedicinesButton.addEventListener("click", () => {
    addManualMedicinesToRecord(record);
  });
  addRemarkButton.type = "button";
  addRemarkButton.className = "history-action-button";
  addRemarkButton.textContent = "Add/Edit Remark";
  addRemarkButton.addEventListener("click", () => {
    addRemarkToRecord(record);
  });
  manualActions.append(addMedicinesButton, addRemarkButton);

  panel.append(detailText, manualActions);
  return panel;
}

function renderMedicalRecordDetails(dateKey, entries) {
  const header = document.createElement("div");
  const title = document.createElement("div");
  const deleteAllButton = document.createElement("button");

  medicalRecordDetails.textContent = "";
  header.className = "medical-record-date-header";
  title.className = "history-detail-header";
  title.textContent = `Date: ${formatHistoryDate(dateKey)}`;
  deleteAllButton.type = "button";
  deleteAllButton.className = "history-action-button delete-history-button";
  deleteAllButton.textContent = "Delete All for This Date";
  deleteAllButton.addEventListener("click", () => {
    deletePrescriptionDate(dateKey);
  });
  header.append(title, deleteAllButton);
  medicalRecordDetails.appendChild(header);

  entries.forEach(({ record }, entryIndex) => {
    const item = document.createElement("div");
    const preview = document.createElement("div");
    const image = document.createElement("img");
    const footer = document.createElement("div");
    const headerRow = document.createElement("div");
    const label = document.createElement("strong");
    const actions = document.createElement("div");
    const toggleButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const remarkText = document.createElement("span");
    const detailPanel = document.createElement("div");
    const recordId = record.id || `${dateKey}-${entryIndex}`;
    const medicines = getPrescriptionMedicines(record);
    const isExpanded = expandedMedicalRecordId === recordId;

    item.className = "history-detail-card medical-record-card";
    preview.className = "medical-record-preview";
    image.src = record.image;
    image.alt = "Receipt preview";
    footer.className = "medical-record-preview-footer";
    headerRow.className = "medical-record-preview-header";
    label.textContent = `Receipt ${entryIndex + 1}`;
    actions.className = "medical-record-preview-actions";
    toggleButton.type = "button";
    toggleButton.className = "history-action-button";
    toggleButton.textContent = isExpanded ? "Hide Details" : "Show Details";
    toggleButton.addEventListener("click", () => {
      expandedMedicalRecordId = isExpanded ? "" : recordId;
      renderMedicalRecordDetails(dateKey, entries);
    });
    deleteButton.type = "button";
    deleteButton.className = "history-action-button delete-history-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deletePrescriptionRecord(record.id);
    });
    remarkText.textContent = record.remark || "No remark added";

    actions.append(toggleButton, deleteButton);
    headerRow.append(label, actions);
    preview.appendChild(image);
    footer.append(headerRow, remarkText);
    item.append(preview, footer);

    if (isExpanded) {
      detailPanel.appendChild(createMedicalRecordDetailPanel(record, medicines));
      item.appendChild(detailPanel);
    }

    medicalRecordDetails.appendChild(item);
  });
}

function renderMedicalRecords() {
  const prescriptions = getMemberArray(PRESCRIPTION_STORAGE_KEY);
  const indexedRecords = prescriptions.map((record, index) => ({ record, index }));
  const groupedByDate = groupByHistoryDate(indexedRecords, ({ record }) => record.date);
  const dates = getSortedHistoryDates(groupedByDate);

  if (!groupedByDate.has(expandedMedicalRecordDateKey)) {
    expandedMedicalRecordDateKey = "";
    expandedMedicalRecordId = "";
  }

  medicalRecordsSummary.textContent = "";
  medicalRecordDateList.textContent = "";
  medicalRecordDetails.textContent = "";
  medicalRecordsSummary.appendChild(createHistorySummary([
    ["Saved records", prescriptions.length],
    ["Days with records", dates.length],
  ]));

  if (dates.length === 0) {
    showEmptyHistory(medicalRecordDateList, "No medical records yet.");
    return;
  }

  dates.forEach((dateKey) => {
    const button = document.createElement("button");
    const isActive = expandedMedicalRecordDateKey === dateKey;

    button.type = "button";
    button.className = isActive ? "history-date-button active" : "history-date-button";
    button.textContent = formatHistoryDate(dateKey);
    button.addEventListener("click", () => {
      expandedMedicalRecordDateKey = isActive ? "" : dateKey;
      expandedMedicalRecordId = "";
      renderMedicalRecords();
    });
    medicalRecordDateList.appendChild(button);
  });

  if (expandedMedicalRecordDateKey) {
    renderMedicalRecordDetails(expandedMedicalRecordDateKey, groupedByDate.get(expandedMedicalRecordDateKey) || []);
  }
}

function renderHistory() {
  const prescriptions = getMemberArray(PRESCRIPTION_STORAGE_KEY);
  const indexedRecords = prescriptions.map((record, index) => ({ record, index }));
  const groupedByDate = groupByHistoryDate(indexedRecords, ({ record }) => record.date);
  const dates = getSortedHistoryDates(groupedByDate);

  medicalRecordsSummary.textContent = "";
  medicalRecordDetails.textContent = "";
  medicalRecordsSummary.appendChild(createHistorySummary([
    ["Saved records", prescriptions.length],
    ["Days with records", dates.length],
  ]));
  renderHistoryDateList(medicalRecordDateList, dates, (dateKey) => {
    renderMedicalRecordDetails(dateKey, groupedByDate.get(dateKey) || []);
  });
}

function renderHistory() {
  renderMedicalRecords();
  renderVisitHistoryTab();
  renderDoctorVisitsSection();
  renderDosageHistoryTab();
}

function getReminderTimes(frequency) {
  const lowerFrequency = (frequency || "").toLowerCase();

  if (lowerFrequency.includes("thrice") || lowerFrequency.includes("three")) {
    return ["Morning", "Afternoon", "Evening"];
  }

  if (lowerFrequency.includes("twice") || lowerFrequency.includes("two")) {
    return ["Morning", "Evening"];
  }

  if (lowerFrequency.includes("once") || lowerFrequency.includes("daily")) {
    return ["Morning"];
  }

  return [];
}

function renderActiveReminders() {
  activeRemindersList.textContent = "";

  if (activeReminders.length === 0) {
    showEmptyHistory(activeRemindersList, "No active reminders yet.");
    return;
  }

  activeReminders.forEach((reminder) => {
    activeRemindersList.appendChild(createActiveReminderCard(reminder));
  });
}

function createActiveReminderCard(reminder) {
  const card = document.createElement("div");
  const title = document.createElement("span");
  const actions = document.createElement("div");
  const status = reminder.status || "pending";

  card.className = "history-item active-reminder-card";
  title.textContent = `${reminder.name} - ${reminder.timeOfDay || reminder.time}`;
  actions.className = "reminder-actions";

  if (status === "pending") {
    const takenButton = document.createElement("button");
    const missedButton = document.createElement("button");

    takenButton.type = "button";
    takenButton.className = "mark-button taken-button";
    takenButton.textContent = "✔ Taken";
    takenButton.addEventListener("click", () => {
      completeReminderAction(reminder, "Taken");
    });
    missedButton.type = "button";
    missedButton.className = "mark-button missed-button";
    missedButton.textContent = "✖ Missed";
    missedButton.addEventListener("click", () => {
      completeReminderAction(reminder, "Missed");
    });
    actions.append(takenButton, missedButton);
  } else {
    const statusText = document.createElement("span");
    const undoButton = document.createElement("button");

    statusText.className = status === "missed" ? "reminder-status missed-status" : "reminder-status taken-status";
    statusText.textContent = status === "missed" ? "✖ Missed" : "✔ Taken";
    undoButton.type = "button";
    undoButton.className = "mark-button undo-button";
    undoButton.textContent = "Undo";
    undoButton.addEventListener("click", () => {
      undoReminderAction(reminder);
    });
    actions.append(statusText, undoButton);
  }

  card.append(title, actions);
  return card;
}

function showReminderNotification(reminder) {
  pendingDose = {
    id: reminder.id,
    medicine: reminder.name,
    time: reminder.timeOfDay || reminder.timeLabel || reminder.time,
    date: getTodayText(),
    timestamp: reminder.timestamp,
  };
  const message = document.createElement("span");
  const actions = document.createElement("div");
  const takenButton = document.createElement("button");
  const missedButton = document.createElement("button");

  reminderNotification.textContent = "";
  message.textContent = `Take ${reminder.name} (${pendingDose.time})`;
  actions.className = "reminder-actions";
  takenButton.type = "button";
  takenButton.className = "mark-button taken-button";
  takenButton.textContent = "✔ Taken";
  takenButton.addEventListener("click", () => {
    completeReminderAction({
      ...reminder,
      ...pendingDose,
    }, "Taken");
    pendingDose = null;
    reminderNotification.textContent = "✔ Taken";
  });
  missedButton.type = "button";
  missedButton.className = "mark-button missed-button";
  missedButton.textContent = "✖ Missed";
  missedButton.addEventListener("click", () => {
    completeReminderAction({
      ...reminder,
      ...pendingDose,
    }, "Missed");
    pendingDose = null;
    reminderNotification.textContent = "✖ Missed";
  });

  actions.append(takenButton, missedButton);
  reminderNotification.append(message, actions);
  reminderNotification.style.display = "block";
  showBrowserNotification(reminder);
  scheduleMissedDoseTimer(reminder);
}

function createRemindersFromMedicine(medicine) {
  const medicines = getMemberArray(MEDICINE_STORAGE_KEY);
  const medicineToUpdate = medicines.find((item) => item === medicine)
    || medicines.find((item) => item.name === medicine.name && item.finishDate === medicine.finishDate);

  if (medicineToUpdate) {
    if (!Array.isArray(medicine.reminderSchedule) || medicine.reminderSchedule.length === 0) {
      ensureMedicineReminderSchedule(medicineToUpdate);
    } else {
      medicineToUpdate.reminderSchedule = medicine.reminderSchedule;
      medicineToUpdate.timesOfDay = medicine.timesOfDay || ["Morning"];
    }

    saveMemberArray(MEDICINE_STORAGE_KEY, medicines);
  }

  loadRemindersFromSavedMedicines();
}

function loadRemindersFromSavedMedicines() {
  const savedMedicines = getMemberArray(MEDICINE_STORAGE_KEY);
  const now = Date.now();
  let schedulesUpdated = false;
  let markedMissed = false;

  activeReminders = [];
  clearReminderTimeouts();
  clearMissedDoseTimers();

  savedMedicines.forEach((medicine) => {
    schedulesUpdated = ensureMedicineReminderSchedule(medicine) || schedulesUpdated;

    const savedSchedule = Array.isArray(medicine.reminderSchedule) ? medicine.reminderSchedule : [];
    const timesOfDay = Array.isArray(medicine.timesOfDay) && medicine.timesOfDay.length > 0
      ? medicine.timesOfDay
      : ["Morning"];

    savedSchedule.forEach((reminder) => {
      const reminderTime = new Date(reminder.timestamp).getTime();

      activeReminders.push({
        id: reminder.id,
        name: reminder.name || medicine.name,
        time: reminder.timeLabel || getTimeLabel(reminder.timestamp),
        timeOfDay: reminder.timeOfDay,
        timestamp: reminder.timestamp,
        timesOfDay,
        status: reminder.status || "pending",
      });

      if (reminder.status !== "pending") {
        return;
      }

      if (reminderTime > now) {
        reminderTimeouts[reminder.id] = setTimeout(() => {
          const latestReminder = findReminderById(reminder.id);

          if (!latestReminder || latestReminder.status !== "pending") {
            return;
          }

          showReminderNotification({
            ...latestReminder,
            name: latestReminder.name || medicine.name,
            timeLabel: latestReminder.timeLabel || getTimeLabel(latestReminder.timestamp),
          });
        }, reminderTime - now);
        return;
      }

      if (reminderTime + REMINDER_GRACE_PERIOD > now) {
        showReminderNotification({
          ...reminder,
          name: reminder.name || medicine.name,
          timeLabel: reminder.timeLabel || getTimeLabel(reminder.timestamp),
        });
        return;
      }

      markReminderAsMissed(reminder.id, false);
      markedMissed = true;
    });
  });

  if (schedulesUpdated) {
    saveMemberArray(MEDICINE_STORAGE_KEY, savedMedicines);
  }

  renderActiveReminders();

  if (markedMissed) {
    loadRemindersFromSavedMedicines();
  }
}

function renderActiveReminders() {
  const todayGroups = getTodayRoutineGroups();

  activeRemindersList.textContent = "";

  if (todayGroups.length === 0) {
    showEmptyHistory(activeRemindersList, "No medicines scheduled for today.");
    return;
  }

  todayGroups.forEach((group) => {
    activeRemindersList.appendChild(createTodayMedicineCard(group));
  });
}

function createTodayMedicineCard(group) {
  const card = document.createElement("div");
  const title = document.createElement("strong");
  const medicineList = document.createElement("div");

  card.className = "history-item today-medicine-card";
  title.textContent = group.timeOfDay;
  medicineList.className = "today-medicine-list";

  group.medicines.forEach((medicine) => {
    medicineList.appendChild(createTodayMedicineRow(medicine, group.timeOfDay));
  });

  card.append(title, medicineList);
  return card;
}

function createTodayMedicineRow(medicine, timeOfDay) {
  const row = document.createElement("div");
  const name = document.createElement("span");
  const actions = document.createElement("div");
  const status = getDoseStatus(medicine, timeOfDay);

  row.className = "today-medicine-row";
  name.textContent = medicine;
  actions.className = "dose-actions";

  if (status === "Pending") {
    const takenButton = document.createElement("button");
    const missedButton = document.createElement("button");

    takenButton.type = "button";
    takenButton.className = "dose-action-button taken-button";
    takenButton.textContent = "✔";
    takenButton.setAttribute("aria-label", `Mark ${medicine} ${timeOfDay} dose as taken`);
    takenButton.addEventListener("click", () => {
      toggleDoseAction(medicine, timeOfDay, "Taken");
    });
    missedButton.type = "button";
    missedButton.className = "dose-action-button missed-button";
    missedButton.textContent = "✖";
    missedButton.setAttribute("aria-label", `Mark ${medicine} ${timeOfDay} dose as missed`);
    missedButton.addEventListener("click", () => {
      toggleDoseAction(medicine, timeOfDay, "Missed");
    });
    actions.append(takenButton, missedButton);
  } else {
    const statusButton = document.createElement("button");

    statusButton.type = "button";
    statusButton.className = status === "Missed"
      ? "dose-status-button missed-status"
      : "dose-status-button taken-status";
    statusButton.textContent = status === "Missed" ? "✖ Missed" : "✔ Taken";
    statusButton.addEventListener("click", () => {
      toggleDoseAction(medicine, timeOfDay, status);
    });
    actions.append(statusButton);
  }

  row.append(name, actions);
  return row;
}

function loadRemindersFromSavedMedicines() {
  activeReminders = [];
  clearReminderTimeouts();
  clearMissedDoseTimers();
  renderActiveReminders();
}

function findFrequency(text) {
  const lowerText = text.toLowerCase();
  const frequencyWords = [
    "once daily",
    "twice daily",
    "three times daily",
    "once a day",
    "twice a day",
    "thrice daily",
    "once",
    "twice",
    "thrice",
    "daily",
    "morning",
    "evening",
    "night",
  ];

  return frequencyWords.find((word) => lowerText.includes(word)) || "";
}

function findMedicineName(lines, dosage) {
  const ignoredWords = ["doctor", "patient", "date", "age", "prescription", "rx"];

  return lines.find((line) => {
    const lowerLine = line.toLowerCase();
    const hasIgnoredWord = ignoredWords.some((word) => lowerLine.includes(word));

    return line !== dosage && !hasIgnoredWord && isMedicineRelatedLine(line) && /[a-z]/i.test(line);
  }) || "";
}

function parsePrescriptionText(text) {
  const filteredText = filterPrescriptionText(text);
  const detectedMedicines = extractMedicinesFromText(text);
  const lines = filteredText
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const dosageLine = lines.find((line) => /\b\d+\s?(mg|ml|mcg|g)\b/i.test(line) || isMedicineRelatedLine(line)) || "";
  const dosageMatch = dosageLine.match(/\b\d+\s?(mg|ml|mcg|g)\b/i);
  const durationMatch = filteredText.match(/\b\d+\s?(day|days|week|weeks)\b/i);
  const dosage = dosageMatch ? dosageMatch[0] : "";
  const primaryMedicine = detectedMedicines[0];

  return {
    name: primaryMedicine?.name || findMedicineName(lines, dosage),
    dosage: primaryMedicine?.dosage || dosage,
    frequency: findFrequency(filteredText),
    duration: durationMatch ? durationMatch[0] : "",
    filteredText,
    detectedMedicines,
  };
}

function showParsedMedicine(parsedMedicine, originalText) {
  const isUnclear = !parsedMedicine.name || !parsedMedicine.dosage || !parsedMedicine.frequency || !parsedMedicine.duration;
  const fields = [
    ["Name", "parsedName", parsedMedicine.name],
    ["Dosage", "parsedDosage", parsedMedicine.dosage],
    ["Frequency", "parsedFrequency", parsedMedicine.frequency],
    ["Duration", "parsedDuration", parsedMedicine.duration],
    ["What is this prescription for?", "medicalRecordRemark", ""],
  ];
  const title = document.createElement("h3");
  const form = document.createElement("form");
  const saveButton = document.createElement("button");
  const buyButton = document.createElement("button");
  const cardsContainer = document.createElement("div");
  const safetyMessage = document.createElement("p");
  const hasUsefulText = Boolean(String(parsedMedicine.filteredText || "").trim());

  medicineResult.textContent = "";
  title.textContent = "Medicine:";
  cardsContainer.className = "medicine-info-grid";
  safetyMessage.className = "medicine-safety-note";

  if (parsedMedicine.detectedMedicines?.length) {
    parsedMedicine.detectedMedicines.forEach((medicine) => {
      cardsContainer.appendChild(createMedicineInfoCard(medicine));
    });
  } else if (parsedMedicine.name) {
    cardsContainer.appendChild(createMedicineInfoCard({
      name: parsedMedicine.name,
      dosage: parsedMedicine.dosage,
      info: getMedicineInfo(parsedMedicine.name),
    }));
  }

  safetyMessage.textContent = "This is general information. Follow your doctor's advice.";

  fields.forEach(([label, id, value]) => {
    const fieldLabel = document.createElement("label");
    const input = document.createElement("input");

    fieldLabel.setAttribute("for", id);
    fieldLabel.textContent = label;
    input.id = id;
    input.value = value || "";
    input.placeholder = id === "medicalRecordRemark" ? "Example: Cold and fever treatment" : "Not detected";
    form.append(fieldLabel, input);
  });

  saveButton.type = "submit";
  saveButton.className = "save-button";
  saveButton.textContent = "Save Medical Record";
  buyButton.type = "button";
  buyButton.textContent = "View / Buy Online";
  buyButton.className = "save-button";
  buyButton.onclick = () => {
    openBuyModal(parsedMedicine.name || getMedicineSearchName());
  };
  form.appendChild(saveButton);
  form.addEventListener("submit", saveParsedMedicine);

  medicineResult.append(title, cardsContainer, safetyMessage, form);
  medicineResult.appendChild(buyButton);
  medicineResult.style.display = "block";

  if (hasUsefulText) {
    ocrText.textContent = isUnclear
      ? `Filtered OCR text:\n${parsedMedicine.filteredText}\n\nOriginal OCR text:\n${originalText}`
      : `Filtered OCR text:\n${parsedMedicine.filteredText}`;
  } else {
    ocrText.textContent = "";
  }
}

function saveParsedMedicine(event) {
  event.preventDefault();

  const medicine = {
    name: document.querySelector("#parsedName").value.trim() || "Medicine",
    dosage: document.querySelector("#parsedDosage").value.trim(),
    frequency: document.querySelector("#parsedFrequency").value.trim(),
    duration: document.querySelector("#parsedDuration").value.trim(),
  };
  const recordRemark = document.querySelector("#medicalRecordRemark").value.trim();
  const savedMedicines = getMemberArray(MEDICINE_STORAGE_KEY);
  const savedPrescriptions = getMemberArray(PRESCRIPTION_STORAGE_KEY);
  const recordMedicines = pendingPrescriptionRecord?.detectedMedicines?.length
    ? pendingPrescriptionRecord.detectedMedicines
    : [{
      name: medicine.name,
      dosage: medicine.dosage,
      info: getMedicineInfo(medicine.name),
    }];

  medicine.finishDate = getFinishDate(medicine.duration);
  savedMedicines.push(medicine);
  saveMemberArray(MEDICINE_STORAGE_KEY, savedMedicines);

  if (pendingPrescriptionRecord) {
    savedPrescriptions.push({
      id: `prescription-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
      date: getDateKey(),
      image: pendingPrescriptionRecord.image,
      extractedText: pendingPrescriptionRecord.extractedText,
      medicines: recordMedicines,
      remark: recordRemark,
    });
    saveMemberArray(PRESCRIPTION_STORAGE_KEY, savedPrescriptions);
  }

  renderHistory();
  renderRefillReminders();
  createRemindersFromMedicine(medicine);
  scanStatus.textContent = "Prescription saved to Medical Records";
  pendingPrescriptionRecord = null;
}

function resetPrescriptionUploadState() {
  prescriptionInput.value = "";
  prescriptionPreview.removeAttribute("src");
  prescriptionPreview.hidden = true;
  uploadPreviewGrid.textContent = "";
  uploadPreviewGrid.hidden = true;
  uploadSection.classList.remove("has-image");
  scanStatus.textContent = "";
  medicineResult.textContent = "";
  medicineResult.style.display = "none";
  ocrText.textContent = "";
  uploadNote.textContent = "Choose images of your prescription to preview, scan them, and save them to Medical Records.";
  pendingPrescriptionRecord = null;
}


function savePrescriptionRecord(record) {
  const savedPrescriptions = getMemberArray(PRESCRIPTION_STORAGE_KEY);

  savedPrescriptions.push(record);
  saveMemberArray(PRESCRIPTION_STORAGE_KEY, savedPrescriptions);
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("image-read-failed"));
    reader.readAsDataURL(file);
  });
}

function renderUploadPreviews(images) {
  uploadPreviewGrid.textContent = "";

  if (images.length === 0) {
    uploadPreviewGrid.hidden = true;
    prescriptionPreview.hidden = true;
    return;
  }

  if (images.length === 1) {
    prescriptionPreview.src = images[0];
    prescriptionPreview.hidden = false;
    uploadPreviewGrid.hidden = true;
    return;
  }

  prescriptionPreview.hidden = true;
  images.forEach((imageUrl) => {
    const preview = document.createElement("img");

    preview.src = imageUrl;
    preview.alt = "Selected receipt preview";
    uploadPreviewGrid.appendChild(preview);
  });
  uploadPreviewGrid.hidden = false;
}


function showSection(sectionId, options = {}) {
  if (sectionId === "uploadSection" && !options.preserveUploadState) {
    resetPrescriptionUploadState();
  }

  homeSection.style.display = "none";

  featureSections.forEach((section) => {
    section.style.display = section.id === sectionId ? "block" : "none";
  });

  if (sectionId === "nearbySection" && !nearbyServicesLoaded) {
    fetchNearbyServices();
  }
}

function showHome() {
  homeSection.style.display = "block";

  featureSections.forEach((section) => {
    section.style.display = "none";
  });
}

function handleReminderSubmit(event) {
  event.preventDefault();

  const medicines = medicineName.value
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean);
  const timesOfDay = getSelectedTimesOfDay();
  const duration = Math.max(Number(reminderDuration.value) || 1, 1);

  if (medicines.length === 0) {
    savedReminder.textContent = "Enter at least one medicine name.";
    savedReminder.hidden = false;
    return;
  }

  if (timesOfDay.length === 0) {
    savedReminder.textContent = "Choose at least one time of day.";
    savedReminder.hidden = false;
    return;
  }

  const medicine = {
    medicines,
    timesOfDay,
    startDate: getDateKey(),
    duration,
  };
  const savedMedicines = getMemberArray(MEDICINE_STORAGE_KEY);

  savedMedicines.push(medicine);
  saveMemberArray(MEDICINE_STORAGE_KEY, savedMedicines);
  renderHistory();
  renderRefillReminders();

  savedReminder.textContent = "";

  const title = document.createElement("strong");
  title.textContent = "Reminder saved";

  const details = document.createElement("span");
  details.append(
    medicines.join(", "),
    document.createElement("br"),
    `${timesOfDay.join(" \u2022 ")} for ${duration} day${duration === 1 ? "" : "s"}`
  );

  savedReminder.append(title, details);
  savedReminder.hidden = false;
  loadRemindersFromSavedMedicines();
}

function initializeTabGroup(buttons, panels, key) {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.dataset[key];

      buttons.forEach((tabButton) => {
        tabButton.classList.toggle("active", tabButton === button);
      });
      panels.forEach((panel) => {
        panel.hidden = panel.id !== targetTab;
      });
    });
  });
}

function initializeHistoryTabs() {
  initializeTabGroup(historyTabButtons, historyTabPanels, "historyTab");
}

function initializeDoctorVisitTabs() {
  initializeTabGroup(doctorVisitTabButtons, doctorVisitTabPanels, "visitTab");
}

function initializeEventListeners() {
  showHome();
  requestNotificationPermission();
  refreshMemberData();
  initializeHistoryTabs();
  initializeDoctorVisitTabs();

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const sectionId = button.dataset.section;

      button.classList.add("is-pressed");
      setTimeout(() => {
        button.classList.remove("is-pressed");
      }, 160);

      showSection(sectionId);
      document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });

  backButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showHome();
    });
  });

  retryNearbyButton.addEventListener("click", () => {
    fetchNearbyServices();
  });

  document.querySelector("#closeModal").onclick = () => {
    document.querySelector("#buyModal").style.display = "none";
  };

  buyOnlineModal.addEventListener("click", (event) => {
    if (event.target === buyOnlineModal) {
      closeBuyOnlineModal();
    }
  });
  visitStatusClose.addEventListener("click", closeVisitStatusModal);
  visitStatusModal.addEventListener("click", (event) => {
    if (event.target === visitStatusModal) {
      closeVisitStatusModal();
    }
  });
  recordEditorClose.addEventListener("click", closeRecordEditor);
  recordEditorCancel.addEventListener("click", closeRecordEditor);
  recordEditorModal.addEventListener("click", (event) => {
    if (event.target === recordEditorModal) {
      closeRecordEditor();
    }
  });

  reminderForm.addEventListener("submit", handleReminderSubmit);
  doctorVisitDate.value = getDateKey();
  doctorVisitForm.addEventListener("submit", saveDoctorVisit);
  visitStatusForm.addEventListener("submit", handleVisitStatusSubmit);
  recordEditorForm.addEventListener("submit", handleRecordEditorSubmit);
  familyEditForm.addEventListener("submit", saveFamilyMemberEdit);
  familyEditClose.addEventListener("click", closeFamilyEditModal);
  familyEditModal.addEventListener("click", (event) => {
    if (event.target === familyEditModal) {
      closeFamilyEditModal();
    }
  });
  deleteProfileCancel.addEventListener("click", closeDeleteModal);
  deleteProfileConfirm.addEventListener("click", () => {
    if (typeof pendingDeleteMemberCallback === "function") {
      pendingDeleteMemberCallback();
    }

    closeDeleteModal();
  });
  deleteProfileModal.addEventListener("click", (event) => {
    if (event.target === deleteProfileModal) {
      closeDeleteModal();
    }
  });
  document.addEventListener("keydown", handleDeleteModalKeydown);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeEventListeners, { once: true });
} else {
  initializeEventListeners();
}

familyForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = getAppData();
  const member = {
    name: familyName.value.trim(),
    age: familyAge.value.trim(),
    data: {
      ocrTexts: [],
      prescriptions: [],
      medicines: [],
      doseHistory: [],
      doctorVisits: [],
    },
  };

  if (!data.members.some((item) => item.name === member.name)) {
    data.members.push(member);
  }

  saveAppData(data);
  setActiveMember(member.name);
  familyForm.reset();
});

prescriptionInput.addEventListener("change", async () => {
  const files = Array.from(prescriptionInput.files || []).filter((file) => {
    return file.type.startsWith("image/");
  });

  if (files.length === 0) {
    return;
  }

  showSection("uploadSection", { preserveUploadState: true });
  uploadSection.classList.add("has-image");
  uploadNote.textContent = `Uploading and scanning ${files.length} receipt${files.length === 1 ? "" : "s"}...`;
  scanStatus.textContent = `Preparing ${files.length} image${files.length === 1 ? "" : "s"}...`;
  ocrText.textContent = "";
  medicineResult.textContent = "";
  medicineResult.style.display = "none";

  try {
    const previewImages = await Promise.all(files.map((file) => readFileAsDataUrl(file)));
    const uploadDate = getDateKey();

    renderUploadPreviews(previewImages);

    for (let index = 0; index < files.length; index += 1) {
      const file = files[index];
      const imageDataUrl = previewImages[index];

      scanStatus.textContent = `Scanning receipt ${index + 1} of ${files.length}...`;

      try {
        const result = await Tesseract.recognize(file, "eng");
        const text = result.data.text.trim();
        const parsedMedicine = parsePrescriptionText(text);
        const filteredText = String(parsedMedicine.filteredText || "").trim();
        const hasUsefulText = Boolean(filteredText);

        savePrescriptionRecord({
          id: `prescription-${Date.now()}-${index}-${Math.random().toString(16).slice(2, 8)}`,
          date: uploadDate,
          image: imageDataUrl,
          extractedText: hasUsefulText ? filteredText : "",
          medicines: hasUsefulText ? (parsedMedicine.detectedMedicines || []) : [],
          remark: "",
        });
      } catch (ocrError) {
        console.error(ocrError);
        savePrescriptionRecord({
          id: `prescription-${Date.now()}-${index}-${Math.random().toString(16).slice(2, 8)}`,
          date: uploadDate,
          image: imageDataUrl,
          extractedText: "",
          medicines: [],
          remark: "",
        });
      }
    }

    expandedMedicalRecordDateKey = uploadDate;
    expandedMedicalRecordId = "";
    renderHistory();
    resetPrescriptionUploadState();
    showSection("medicalRecordsSection");
    document.querySelector("#medicalRecordsSection").scrollIntoView({ behavior: "smooth", block: "nearest" });
  } catch (error) {
    console.error(error);
    resetPrescriptionUploadState();
    scanStatus.textContent = getOcrErrorMessage(error);
    uploadNote.textContent = "Try another prescription image or check your connection and try again.";
  }
});
