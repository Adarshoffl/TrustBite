// --- DYNAMIC DATABASE: Numerical Results Engine ---
const productDB = {
    // 1. AMUL MILK (FAIL)
    "AG-02/SEP25": {
        specs: `<span class="text-red-600 font-bold">FAT (%): 4.1 (Min Required: 6.0)</span><br><span class="text-red-600 font-bold">SNF (%): 7.4 (Min Required: 9.0)</span>`,
        nutrition: `
            <tr class="hover:bg-slate-50"><td class="p-3 border-r border-[#e6f2ff]">Energy, kcal</td><td class="p-3 text-right">72.0</td></tr>
            <tr class="hover:bg-slate-50"><td class="p-3 border-r border-[#e6f2ff]">Total Fat, g</td><td class="p-3 text-right text-red-600 font-bold">4.1 (FAIL)</td></tr>
            <tr class="hover:bg-slate-50"><td class="p-3 border-r border-[#e6f2ff]">Protein, g</td><td class="p-3 text-right">2.8</td></tr>
            <tr class="hover:bg-slate-50 bg-red-50/50"><td class="p-3 border-r border-[#e6f2ff]">Urea Concentration, %</td><td class="p-3 text-right text-red-600 font-bold">0.45% (Limit: 0.0)</td></tr>
        `,
        metric: { category: "CHEMICAL", limitVal: "0.0", limitUnit: "% Urea", foundVal: "0.45", foundUnit: "%", reason: "Failed due to dangerous levels of Urea concentration indicating synthetic milk adulteration." }
    },
    // 2. EVEREST CHILLI (FAIL)
    "E280674318": {
        specs: `<span class="text-red-600 font-bold">Sudan I Dye: 0.8 ppm (Limit: 0.0)</span><br>Ash content: 7.2% (Limit: 8%)`,
        nutrition: `
            <tr class="hover:bg-slate-50"><td class="p-3 border-r border-[#e6f2ff]">Moisture Content, %</td><td class="p-3 text-right">9.0</td></tr>
            <tr class="hover:bg-slate-50 bg-red-50/50"><td class="p-3 border-r border-[#e6f2ff]">Sudan Red I (Carcinogen)</td><td class="p-3 text-right text-red-600 font-bold">0.8 ppm</td></tr>
        `,
        metric: { category: "TOXICOLOGY", limitVal: "0.0", limitUnit: "ppm Dye", foundVal: "0.8", foundUnit: "ppm", reason: "Detected presence of Sudan Red I, a banned carcinogenic dye used for artificial coloring." }
    },
    // 3. MOTHER DAIRY CURD (PASS)
    "MDC-4091A": {
        specs: `Lactic Acid: 0.7% (Required: 0.6-0.8%)<br>pH Level: 4.4 (Safe)`,
        nutrition: `
            <tr class="hover:bg-slate-50"><td class="p-3 border-r border-[#e6f2ff]">Energy, kcal</td><td class="p-3 text-right">62.0</td></tr>
            <tr class="hover:bg-slate-50"><td class="p-3 border-r border-[#e6f2ff]">Total Fat, g</td><td class="p-3 text-right">3.1</td></tr>
            <tr class="hover:bg-slate-50 bg-emerald-50/50"><td class="p-3 border-r border-[#e6f2ff]">Coliform Count</td><td class="p-3 text-right text-emerald-600 font-bold">< 10 cfu/g</td></tr>
        `,
        metric: { category: "MICROBIOLOGICAL", limitVal: "< 10", limitUnit: "Cfu/g", foundVal: "0", foundUnit: "Cfu/g", reason: "Passed all microbiological safety parameters. Completely safe for consumption." }
    },
    // 4. ON WHEY PROTEIN (PASS)
    "ON-WHEY-992": {
        specs: `Protein Purity: 78.5% (Claimed: 78%)<br>Amino Spiking: Not Detected`,
        nutrition: `
            <tr class="hover:bg-slate-50"><td class="p-3 border-r border-[#e6f2ff]">Protein per scoop, g</td><td class="p-3 text-right text-emerald-600 font-bold">24.2 (Req: 24)</td></tr>
            <tr class="hover:bg-slate-50"><td class="p-3 border-r border-[#e6f2ff]">BCAAs, g</td><td class="p-3 text-right">5.5</td></tr>
            <tr class="hover:bg-slate-50 bg-emerald-50/50"><td class="p-3 border-r border-[#e6f2ff]">Heavy Metals</td><td class="p-3 text-right text-emerald-600 font-bold">0.0 ppm</td></tr>
        `,
        metric: { category: "PURITY TEST", limitVal: "24.0", limitUnit: "g Protein", foundVal: "24.2", foundUnit: "grams", reason: "Product meets label claims for protein content with zero detected heavy metals." }
    },
    // 5. MAN MATTERS CREATINE (FAIL)
    "MMCG25003": {
        specs: `<span class="text-red-600 font-bold">Lead (Pb): 2.4 ppm (Limit: 1.0)</span><br>Moisture: 4%`,
        nutrition: `
            <tr class="hover:bg-slate-50"><td class="p-3 border-r border-[#e6f2ff]">Creatine Monohydrate, g</td><td class="p-3 text-right">2.8 (Req: 3.0)</td></tr>
            <tr class="hover:bg-slate-50 bg-red-50/50"><td class="p-3 border-r border-[#e6f2ff]">Heavy Metals (Lead)</td><td class="p-3 text-right text-red-600 font-bold">2.4 ppm</td></tr>
        `,
        metric: { category: "HEAVY METALS", limitVal: "1.0", limitUnit: "ppm Lead", foundVal: "2.4", foundUnit: "ppm", reason: "Heavy metal contamination exceeds safe consumable limits, posing long-term health risks." }
    },
    // 6. PURE SERVING OMEGA-3 (PASS)
    "TB-B02/SEP25": {
        specs: `Peroxide Value: 2.1 meq/kg (Limit < 5.0)<br>Anisidine Value: 4.2 (Limit < 20.0)`,
        nutrition: `
            <tr class="hover:bg-slate-50"><td class="p-3 border-r border-[#e6f2ff]">EPA, mg</td><td class="p-3 text-right text-emerald-600 font-bold">185 (Req: 180)</td></tr>
            <tr class="hover:bg-slate-50"><td class="p-3 border-r border-[#e6f2ff]">DHA, mg</td><td class="p-3 text-right text-emerald-600 font-bold">122 (Req: 120)</td></tr>
            <tr class="hover:bg-slate-50 bg-emerald-50/50"><td class="p-3 border-r border-[#e6f2ff]">Mercury (Hg)</td><td class="p-3 text-right text-emerald-600 font-bold">0.0 ppm</td></tr>
        `,
        metric: { category: "OXIDATION", limitVal: "5.0", limitUnit: "meq/kg", foundVal: "2.1", foundUnit: "meq/kg", reason: "Oil freshness verified. Peroxide oxidation values are extremely low, indicating high purity." }
    },
    // 7. ELECTRAL ORS (FAIL)
    "FDC-ORS-827": {
        specs: `<span class="text-red-600 font-bold">Osmolarity: 212 mOsmol/L (Req: 245)</span><br>pH: 7.4 (Req: 7.0-8.0)`,
        nutrition: `
            <tr class="hover:bg-slate-50"><td class="p-3 border-r border-[#e6f2ff]">Sodium, mmol/L</td><td class="p-3 text-right text-red-600 font-bold">58.0 (Req: 75)</td></tr>
            <tr class="hover:bg-slate-50"><td class="p-3 border-r border-[#e6f2ff]">Potassium, mmol/L</td><td class="p-3 text-right">20.0 (Req: 20)</td></tr>
            <tr class="hover:bg-slate-50"><td class="p-3 border-r border-[#e6f2ff]">Chloride, mmol/L</td><td class="p-3 text-right text-red-600 font-bold">48.0 (Req: 65)</td></tr>
            <tr class="hover:bg-slate-50 bg-red-50/50"><td class="p-3 border-r border-[#e6f2ff]">Bacterial Count (CFU/g)</td><td class="p-3 text-right text-red-600 font-bold">980 (Limit: 10)</td></tr>
        `,
        metric: { category: "MICROBIOLOGICAL", limitVal: "10", limitUnit: "Cfu/g", foundVal: "980", foundUnit: "cfu/ml", reason: "Severe microbiological non-compliance. Coliforms detected way above safety threshold." }
    },
    // 8. DABUR HONEY (FAIL)
    "DB-HNY-102": {
        specs: `<span class="text-red-600 font-bold">C4 Sugar (Syrup): 18.5% (Limit: 7%)</span><br>Fructose/Glucose Ratio: 0.8`,
        nutrition: `
            <tr class="hover:bg-slate-50"><td class="p-3 border-r border-[#e6f2ff]">Total Sugar, g</td><td class="p-3 text-right">82.0</td></tr>
            <tr class="hover:bg-slate-50 bg-red-50/50"><td class="p-3 border-r border-[#e6f2ff]">Added Rice/Corn Syrup, %</td><td class="p-3 text-right text-red-600 font-bold">18.5%</td></tr>
        `,
        metric: { category: "ADULTERATION", limitVal: "7.0", limitUnit: "% Syrup", foundVal: "18.5", foundUnit: "%", reason: "NMR testing detected high presence of added cheap rice/corn syrups instead of natural honey." }
    }
};

// Tab Switching Logic
function switchTab(tabId) {
    const tabs = ['home', 'admin', 'consumer'];
    tabs.forEach(id => {
        const tabElement = document.getElementById(`tab-${id}`);
        const btnElement = document.getElementById(`btn-${id}`);
        if (id === tabId) {
            tabElement.classList.remove('hidden');
            tabElement.classList.add('block');
            btnElement.classList.replace('inactive-nav', 'active-nav');
        } else {
            tabElement.classList.remove('block');
            tabElement.classList.add('hidden');
            btnElement.classList.replace('active-nav', 'inactive-nav');
        }
    });
}

// Intercept clicks from the Public Directory to trigger the Scanner View
function viewReport(state, productName, batchId, adulterantTextData, imageUrl) {
    switchTab('consumer');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const passportCard = document.getElementById('passport-card');
    const scannerOverlay = document.getElementById('scanner-overlay');

    passportCard.classList.add('hidden');
    passportCard.classList.remove('flex');
    scannerOverlay.classList.remove('hidden');
    scannerOverlay.classList.add('flex');

    // Update dynamic text and image
    document.getElementById('display-name').innerText = productName;
    document.getElementById('display-batch').innerText = batchId;
    document.getElementById('display-image').src = imageUrl;

    // FETCH NUMERICAL DATA FROM DB
    const productData = productDB[batchId];
    document.getElementById('dynamic-specs').innerHTML = productData.specs;
    document.getElementById('dynamic-nutrition').innerHTML = productData.nutrition;

    // FETCH METRIC DATA
    const m = productData.metric;
    document.getElementById('metric-category').innerText = m.category;
    document.getElementById('metric-limit-val').innerText = m.limitVal;
    document.getElementById('metric-limit-unit').innerText = m.limitUnit;
    document.getElementById('metric-found-val').innerText = m.foundVal;
    document.getElementById('metric-found-unit').innerText = m.foundUnit;
    document.getElementById('metric-reason').innerText = m.reason;

    // Set Circle Colors based on Pass/Fail
    const foundCircle = document.getElementById('metric-found-circle');
    const foundValText = document.getElementById('metric-found-val');

    if (state === 'tampered' || state === 'fail') {
        foundCircle.className = "w-20 h-20 rounded-full border-[5px] border-red-500 flex flex-col justify-center items-center bg-white shadow-sm text-center";
        foundValText.className = "text-xl font-bold text-red-600 leading-none mt-1 mb-0.5";
    } else {
        foundCircle.className = "w-20 h-20 rounded-full border-[5px] border-emerald-500 flex flex-col justify-center items-center bg-white shadow-sm text-center";
        foundValText.className = "text-xl font-bold text-emerald-600 leading-none mt-1 mb-0.5";
    }

    // Artificial Delay
    setTimeout(() => {
        scannerOverlay.classList.add('hidden');
        scannerOverlay.classList.remove('flex');
        setupCardState(state, adulterantTextData);
        passportCard.classList.remove('hidden');
        passportCard.classList.add('flex');
    }, 1500);
}

// Configures the colors and texts of the Status Box based on Pass/Fail
function setupCardState(state, adulterantTextData) {
    const statusBox = document.getElementById('status-box');
    const title = document.getElementById('status-title');
    const desc = document.getElementById('status-desc');
    const iconContainer = document.getElementById('status-icon');

    const verifiedIcon = `<svg class="w-8 h-8 text-emerald-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
    const tamperedIcon = `<svg class="w-8 h-8 text-red-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>`;

    statusBox.className = 'rounded-xl p-5 mb-6 flex items-start space-x-3 border shadow-sm transform transition-all duration-500 hover:scale-[1.02]';

    if (state === 'verified') {
        statusBox.classList.add('bg-emerald-50', 'border-emerald-200');
        title.className = 'font-bold text-sm leading-tight mb-1 text-emerald-900';
        title.innerText = 'Verified Authentic';
        desc.className = 'text-[11px] leading-relaxed opacity-90 font-medium text-emerald-700';
        desc.innerText = 'Smart contract signature matches lab output. Safe.';
        iconContainer.innerHTML = verifiedIcon;

    } else if (state === 'tampered' || state === 'fail') {
        statusBox.classList.add('bg-red-50', 'border-red-200');
        title.className = 'font-bold text-sm leading-tight mb-1 text-red-900';
        title.innerText = 'Data Mismatch / Failed';
        desc.className = 'text-[11px] leading-relaxed opacity-90 font-medium text-red-700';
        desc.innerText = 'CRITICAL: Lab results show failure or data alteration.';
        iconContainer.innerHTML = tamperedIcon;
    }
}

// REAL-TIME DYNAMIC ENGINE FOR FORM SUBMISSION
function handleFormSubmit(event) {
    event.preventDefault();

    const batchId = document.getElementById('inputId').value;
    const product = document.getElementById('inputProduct').value;
    const brand = document.getElementById('inputBrand').value;
    const date = document.getElementById('inputDate').value;

    // Values captured from User Input
    const adulterant = document.getElementById('inputAdulterant').value;
    const inputFat = parseFloat(document.getElementById('inputFat').value);
    const inputPH = parseFloat(document.getElementById('inputPH').value);
    const inputSNF = parseFloat(document.getElementById('inputSNF').value);

    let isFail = false;
    let dynCategory, dynLimitVal, dynLimitUnit, dynFoundVal, dynFoundUnit, dynReason;
    let formattedAdulterant = "None Detected";

    if (adulterant !== 'none') {
        isFail = true;
        formattedAdulterant = `Found: ${adulterant.toUpperCase()}`;
        dynCategory = "ADULTERATION TEST";
        dynLimitVal = "0.0";
        dynLimitUnit = "%";
        dynFoundVal = adulterant === 'detergent' ? '5.2' : adulterant === 'urea' ? '1.4' : adulterant === 'starch' ? '8.0' : 'Detected';
        dynFoundUnit = "%";
        dynReason = `CRITICAL: Product failed due to detection of ${adulterant.replace('_', ' ')}. Unfit for human consumption.`;
    }
    else if (inputFat < 6.0 || inputSNF < 9.0) {
        isFail = true;
        dynCategory = "COMPOSITION CHECK";
        if (inputFat < 6.0) {
            dynLimitVal = "6.0";
            dynLimitUnit = "Fat %";
            dynFoundVal = inputFat.toFixed(1);
            dynFoundUnit = "%";
            dynReason = `Product failed to meet the minimum required FAT percentage of 6.0%. Detected: ${inputFat.toFixed(1)}%.`;
        } else {
            dynLimitVal = "9.0";
            dynLimitUnit = "SNF %";
            dynFoundVal = inputSNF.toFixed(1);
            dynFoundUnit = "%";
            dynReason = `Product failed to meet the minimum required SNF (Solids Not Fat) percentage of 9.0%. Detected: ${inputSNF.toFixed(1)}%.`;
        }
    }
    else {
        isFail = false;
        dynCategory = "QUALITY VERIFIED";
        dynLimitVal = "6.0";
        dynLimitUnit = "Fat %";
        dynFoundVal = inputFat.toFixed(1);
        dynFoundUnit = "%";
        dynReason = `Passed: Fat (${inputFat.toFixed(1)}%) and SNF (${inputSNF.toFixed(1)}%) meet all safety and composition regulations.`;
    }

    const state = isFail ? 'tampered' : 'verified';
    const badgeHtml = isFail ? '<span class="badge-fail">Fail</span>' : '<span class="badge-pass">Pass</span>';
    const stampHtml = isFail ? '<div class="stamp-fail">FAILED</div>' : '';

    // Inject the calculated values into the Real-Time Database!
    productDB[batchId] = {
        specs: `Custom Live Entry <br> pH Level: ${inputPH}`,
        nutrition: `
            <tr class="hover:bg-slate-50"><td class="p-3 border-r border-[#e6f2ff]">Fat %</td><td class="p-3 text-right">${inputFat.toFixed(1)}</td></tr>
            <tr class="hover:bg-slate-50"><td class="p-3 border-r border-[#e6f2ff]">SNF %</td><td class="p-3 text-right">${inputSNF.toFixed(1)}</td></tr>
            <tr class="hover:bg-slate-50 ${isFail ? 'bg-red-50/50' : 'bg-emerald-50/50'}"><td class="p-3 border-r border-[#e6f2ff]">Adulterant</td><td class="p-3 text-right font-bold ${isFail ? 'text-red-600' : 'text-emerald-600'}">${formattedAdulterant}</td></tr>
        `,
        metric: {
            category: dynCategory, limitVal: dynLimitVal, limitUnit: dynLimitUnit, foundVal: dynFoundVal, foundUnit: dynFoundUnit, reason: dynReason
        }
    };

    const generatedImageUrl = `https://placehold.co/400x400/ffffff/333333?text=${encodeURIComponent(product)}`;

    const newCardHTML = `
        <div class="product-card bg-white border border-emerald-400 rounded-2xl overflow-hidden shadow-sm flex flex-col relative animate-fade-in shadow-glow-emerald">
            <div class="h-48 bg-white flex items-center justify-center relative p-4 border-b border-slate-100 overflow-hidden">
                ${badgeHtml}
                ${stampHtml}
                <img src="${generatedImageUrl}" alt="Product" class="w-full h-full object-contain absolute mix-blend-multiply opacity-50">
                <div class="text-center relative z-10 bg-white/90 p-3 rounded-lg backdrop-blur-sm shadow-sm border border-slate-200">
                    <span class="block text-xs text-slate-500 uppercase tracking-widest mb-1">New Entry</span>
                    <span class="font-bold text-slate-900">${product}</span>
                </div>
            </div>
            <div class="bg-white p-5 flex-grow flex flex-col justify-between">
                <div>
                    <h3 class="font-bold text-slate-900 text-lg mb-3">${brand}</h3>
                    <ul class="text-[11px] text-slate-600 space-y-1.5 mb-4 leading-relaxed">
                        <li><span class="font-bold text-slate-800">Product</span> - ${product}</li>
                        <li><span class="font-bold text-slate-800">Batch No.</span> - ${batchId}</li>
                        <li><span class="font-bold text-slate-800">Date</span> - ${date}</li>
                    </ul>
                </div>
                <button onclick="viewReport('${state}', '${product}', '${batchId}', '${formattedAdulterant}', '${generatedImageUrl}')" class="btn-report">See Report ></button>
            </div>
        </div>
    `;

    document.getElementById('reports-grid').insertAdjacentHTML('afterbegin', newCardHTML);

    const toast = document.getElementById('toast');
    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => { toast.classList.add('translate-y-20', 'opacity-0'); }, 3000);

    event.target.reset();
    switchTab('home');
}