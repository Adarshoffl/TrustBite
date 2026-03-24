// --- DYNAMIC DATABASE WITH EXACT NUMERICAL TABLES & PROGRESS BAR DATA ---
const productDB = {
    // 1. AMUL MILK (FAIL)
    "AG-02/SEP25": {
        tabular: `
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Energy, kcal</td><td class="p-3 text-right border-l border-slate-200">87.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3 text-red-600 font-bold">Total Fat, g (FAILED)</td><td class="p-3 text-right border-l border-slate-200 text-red-600 font-bold">4.1</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Saturated fat, g</td><td class="p-3 text-right border-l border-slate-200">2.6</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Trans fat, g</td><td class="p-3 text-right border-l border-slate-200">0.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Total Carbohydrate, g</td><td class="p-3 text-right border-l border-slate-200">5.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Added Sugar, g</td><td class="p-3 text-right border-l border-slate-200">0.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Protein, g</td><td class="p-3 text-right border-l border-slate-200">3.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Calcium, mg</td><td class="p-3 text-right border-l border-slate-200">120.0</td></tr>
        `,
        nutrition: `
            <div>
                <div class="flex justify-between text-xs font-bold text-slate-600 mb-1"><span>Total Fat (Req 6.0%)</span> <span class="text-red-600">4.1% (FAIL)</span></div>
                <div class="progress-track"><div class="progress-fill bg-red-500" style="--target-width: 41%;"></div></div>
            </div>
            <div>
                <div class="flex justify-between text-xs font-bold text-slate-600 mb-1"><span>SNF (Req 9.0%)</span> <span class="text-red-600">7.4% (FAIL)</span></div>
                <div class="progress-track"><div class="progress-fill bg-red-500" style="--target-width: 74%;"></div></div>
            </div>
            <div>
                <div class="flex justify-between text-xs font-bold text-slate-600 mb-1"><span>Urea Concentration</span> <span class="text-red-600">0.45% (TOXIC)</span></div>
                <div class="progress-track"><div class="progress-fill bg-red-600 animate-pulse" style="--target-width: 90%;"></div></div>
            </div>
        `,
        metric: { category: "CHEMICAL", limitVal: "0.0", limitUnit: "Urea", foundVal: "0.45", foundUnit: "%", reason: "Failed due to dangerous levels of Urea concentration indicating synthetic milk adulteration." }
    },
    // 2. EVEREST CHILLI (FAIL)
    "E280674318": {
        tabular: `
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Moisture, %</td><td class="p-3 text-right border-l border-slate-200">9.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Total Ash, %</td><td class="p-3 text-right border-l border-slate-200">7.2</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Crude Fiber, %</td><td class="p-3 text-right border-l border-slate-200">15.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Capsaicin, %</td><td class="p-3 text-right border-l border-slate-200">0.5</td></tr>
            <tr class="hover:bg-slate-50 transition-colors bg-red-50/50"><td class="p-3 text-red-600 font-bold">Sudan Dye, ppm (FAILED)</td><td class="p-3 text-right border-l border-slate-200 text-red-600 font-bold">0.8</td></tr>
        `,
        nutrition: `
            <div>
                <div class="flex justify-between text-xs font-bold text-slate-600 mb-1"><span>Moisture Content</span> <span class="text-slate-800">9.0%</span></div>
                <div class="progress-track"><div class="progress-fill bg-slate-400" style="--target-width: 50%;"></div></div>
            </div>
            <div>
                <div class="flex justify-between text-xs font-bold text-slate-600 mb-1"><span>Sudan Red I (Carcinogen)</span> <span class="text-red-600">0.8 ppm (FAIL)</span></div>
                <div class="progress-track"><div class="progress-fill bg-red-500" style="--target-width: 80%;"></div></div>
            </div>
        `,
        metric: { category: "TOXICOLOGY", limitVal: "0.0", limitUnit: "Sudan", foundVal: "0.8", foundUnit: "ppm", reason: "Detected presence of Sudan Red I, a banned carcinogenic dye used for artificial coloring." }
    },
    // 3. MOTHER DAIRY CURD (PASS)
    "MDC-4091A": { 
        tabular: `
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Energy, kcal</td><td class="p-3 text-right border-l border-slate-200">62.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Protein, g</td><td class="p-3 text-right border-l border-slate-200">3.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Carbohydrate, g</td><td class="p-3 text-right border-l border-slate-200">4.3</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Added Sugar, g</td><td class="p-3 text-right border-l border-slate-200">0.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Total Fat, g</td><td class="p-3 text-right border-l border-slate-200">3.1</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Calcium, mg</td><td class="p-3 text-right border-l border-slate-200">130.0</td></tr>
        `,
        nutrition: `
            <div>
                <div class="flex justify-between text-xs font-bold text-slate-600 mb-1"><span>Lactic Acid (Req 0.6-0.8)</span> <span class="text-emerald-600">0.7%</span></div>
                <div class="progress-track"><div class="progress-fill bg-emerald-400" style="--target-width: 70%;"></div></div>
            </div>
            <div>
                <div class="flex justify-between text-xs font-bold text-slate-600 mb-1"><span>Coliform Count</span> <span class="text-emerald-600">0 cfu/g (SAFE)</span></div>
                <div class="progress-track"><div class="progress-fill bg-emerald-500" style="--target-width: 10%;"></div></div>
            </div>
        `,
        metric: { category: "MICROBIOLOGICAL", limitVal: "< 10", limitUnit: "Cfu/g", foundVal: "0", foundUnit: "Cfu/g", reason: "Passed all microbiological safety parameters. Completely safe for consumption." }
    },
    // 4. ON WHEY PROTEIN (PASS)
    "ON-WHEY-992": {
        tabular: `
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Energy, kcal</td><td class="p-3 text-right border-l border-slate-200">119.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3 font-bold text-slate-800">Protein, g</td><td class="p-3 text-right border-l border-slate-200 font-bold text-emerald-600">24.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Total Fat, g</td><td class="p-3 text-right border-l border-slate-200">1.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Carbohydrate, g</td><td class="p-3 text-right border-l border-slate-200">3.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Sugars, g</td><td class="p-3 text-right border-l border-slate-200">1.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Sodium, mg</td><td class="p-3 text-right border-l border-slate-200">50.0</td></tr>
        `,
        nutrition: `
            <div>
                <div class="flex justify-between text-xs font-bold text-slate-600 mb-1"><span>Protein per scoop (Req 24g)</span> <span class="text-emerald-600">24.2g</span></div>
                <div class="progress-track"><div class="progress-fill bg-emerald-400" style="--target-width: 100%;"></div></div>
            </div>
            <div>
                <div class="flex justify-between text-xs font-bold text-slate-600 mb-1"><span>Heavy Metals</span> <span class="text-emerald-600">0.0 ppm</span></div>
                <div class="progress-track"><div class="progress-fill bg-emerald-500" style="--target-width: 5%;"></div></div>
            </div>
        `,
        metric: { category: "PURITY TEST", limitVal: "24.0", limitUnit: "g Pro", foundVal: "24.2", foundUnit: "grams", reason: "Product meets label claims for protein content with zero detected heavy metals." }
    },
    // 5. MAN MATTERS CREATINE (FAIL)
    "MMCG25003": {
        tabular: `
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Energy, kcal</td><td class="p-3 text-right border-l border-slate-200">15.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Carbohydrate, g</td><td class="p-3 text-right border-l border-slate-200">3.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Creatine Monohydrate, g</td><td class="p-3 text-right border-l border-slate-200">3.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors bg-red-50/50"><td class="p-3 text-red-600 font-bold">Lead (Pb), ppm (FAILED)</td><td class="p-3 text-right border-l border-slate-200 text-red-600 font-bold">2.4</td></tr>
        `,
        nutrition: `
            <div>
                <div class="flex justify-between text-xs font-bold text-slate-600 mb-1"><span>Creatine Monohydrate</span> <span class="text-slate-800">2.8g</span></div>
                <div class="progress-track"><div class="progress-fill bg-slate-400" style="--target-width: 80%;"></div></div>
            </div>
            <div>
                <div class="flex justify-between text-xs font-bold text-slate-600 mb-1"><span>Heavy Metals (Lead)</span> <span class="text-red-600">2.4 ppm (TOXIC)</span></div>
                <div class="progress-track"><div class="progress-fill bg-red-500" style="--target-width: 95%;"></div></div>
            </div>
        `,
        metric: { category: "HEAVY METALS", limitVal: "1.0", limitUnit: "Limit", foundVal: "2.4", foundUnit: "ppm Pb", reason: "Heavy metal contamination exceeds safe consumable limits, posing long-term health risks." }
    },
    // 6. PURE SERVING OMEGA-3 (PASS)
    "TB-B02/SEP25": {
        tabular: `
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Energy, kcal</td><td class="p-3 text-right border-l border-slate-200">9.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Total Fat, g</td><td class="p-3 text-right border-l border-slate-200">1.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3 font-bold text-slate-800">EPA, mg</td><td class="p-3 text-right border-l border-slate-200 text-emerald-600 font-bold">185.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3 font-bold text-slate-800">DHA, mg</td><td class="p-3 text-right border-l border-slate-200 text-emerald-600 font-bold">122.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Trans Fat, g</td><td class="p-3 text-right border-l border-slate-200">0.0</td></tr>
        `,
        nutrition: `
            <div>
                <div class="flex justify-between text-xs font-bold text-slate-600 mb-1"><span>EPA (Req 180mg)</span> <span class="text-emerald-600">185mg</span></div>
                <div class="progress-track"><div class="progress-fill bg-emerald-400" style="--target-width: 95%;"></div></div>
            </div>
            <div>
                <div class="flex justify-between text-xs font-bold text-slate-600 mb-1"><span>Peroxide Value (Limit <5)</span> <span class="text-emerald-600">2.1 meq/kg</span></div>
                <div class="progress-track"><div class="progress-fill bg-emerald-500" style="--target-width: 30%;"></div></div>
            </div>
        `,
        metric: { category: "OXIDATION", limitVal: "5.0", limitUnit: "Limit", foundVal: "2.1", foundUnit: "meq/kg", reason: "Oil freshness verified. Peroxide oxidation values are extremely low, indicating high purity." }
    },
    // 7. ELECTRAL ORS (FAIL)
    "FDC-ORS-827": {
        tabular: `
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3 text-red-600 font-bold">Sodium, mmol/L (FAILED)</td><td class="p-3 text-right border-l border-slate-200 text-red-600 font-bold">58.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Potassium, mmol/L</td><td class="p-3 text-right border-l border-slate-200">20.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3 text-red-600 font-bold">Chloride, mmol/L (FAILED)</td><td class="p-3 text-right border-l border-slate-200 text-red-600 font-bold">48.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Citrate, mmol/L</td><td class="p-3 text-right border-l border-slate-200">10.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Dextrose Anhydrous, mmol/L</td><td class="p-3 text-right border-l border-slate-200">75.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors bg-red-50/50"><td class="p-3 text-red-600 font-bold">Coliforms, cfu/g (TOXIC)</td><td class="p-3 text-right border-l border-slate-200 text-red-600 font-bold">980.0</td></tr>
        `,
        nutrition: `
            <div>
                <div class="flex justify-between text-xs font-bold text-slate-600 mb-1"><span>Sodium (Req 75)</span> <span class="text-red-600">58.0 mmol/L (FAIL)</span></div>
                <div class="progress-track"><div class="progress-fill bg-red-400" style="--target-width: 58%;"></div></div>
            </div>
            <div>
                <div class="flex justify-between text-xs font-bold text-slate-600 mb-1"><span>Coliform Count</span> <span class="text-red-600">980 cfu/g (TOXIC)</span></div>
                <div class="progress-track"><div class="progress-fill bg-red-600 animate-pulse" style="--target-width: 100%;"></div></div>
            </div>
        `,
        metric: { category: "MICROBIOLOGICAL", limitVal: "10", limitUnit: "Cfu/g", foundVal: "980", foundUnit: "cfu/ml", reason: "Severe microbiological non-compliance. Coliforms detected way above safety threshold." }
    },
    // 8. DABUR HONEY (FAIL)
    "DB-HNY-102": {
        tabular: `
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Energy, kcal</td><td class="p-3 text-right border-l border-slate-200">320.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Carbohydrate, g</td><td class="p-3 text-right border-l border-slate-200">80.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Natural Sugars, g</td><td class="p-3 text-right border-l border-slate-200">80.0</td></tr>
            <tr class="hover:bg-slate-50 transition-colors bg-red-50/50"><td class="p-3 text-red-600 font-bold">Added Sugar Syrup, % (FAILED)</td><td class="p-3 text-right border-l border-slate-200 text-red-600 font-bold">18.5%</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Protein, g</td><td class="p-3 text-right border-l border-slate-200">0.0</td></tr>
        `,
        nutrition: `
            <div>
                <div class="flex justify-between text-xs font-bold text-slate-600 mb-1"><span>Total Natural Sugar</span> <span class="text-slate-800">82.0g</span></div>
                <div class="progress-track"><div class="progress-fill bg-slate-400" style="--target-width: 82%;"></div></div>
            </div>
            <div>
                <div class="flex justify-between text-xs font-bold text-slate-600 mb-1"><span>Added Sugar Syrup (Limit 7%)</span> <span class="text-red-600">18.5% (FAIL)</span></div>
                <div class="progress-track"><div class="progress-fill bg-red-500" style="--target-width: 60%;"></div></div>
            </div>
        `,
        metric: { category: "ADULTERATION", limitVal: "7.0", limitUnit: "% Syrup", foundVal: "18.5", foundUnit: "%", reason: "NMR testing detected high presence of added cheap rice/corn syrups instead of natural honey." }
    }
};

// Initial Grid Generation
const initialProducts = [
    { id: "AG-02/SEP25", brand: "Amul", name: "Gold Milk (1L)", date: "04 Mar 2026", img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&h=500&fit=crop", state: "fail", text: "WARNING: High Urea" },
    { id: "E280674318", brand: "Everest", name: "Kashmiri Chilli Powder", date: "01 Mar 2026", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&h=500&fit=crop", state: "fail", text: "WARNING: Sudan Red" },
    { id: "MDC-4091A", brand: "Mother Dairy", name: "Classic Premium Curd", date: "15 Mar 2026", img: "https://images.unsplash.com/photo-1583338917451-fade27510584?w=500&h=500&fit=crop", state: "pass", text: "None Detected" },
    { id: "ON-WHEY-992", brand: "Optimum Nutrition", name: "Gold Standard Whey", date: "20 Feb 2026", img: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=500&h=500&fit=crop", state: "pass", text: "None Detected" },
    { id: "MMCG25003", brand: "Man Matters", name: "Creatine Powder", date: "12 May 2026", img: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500&h=500&fit=crop", state: "fail", text: "WARNING: Heavy Metals" },
    { id: "TB-B02/SEP25", brand: "Pure Serving", name: "Omega-3 Fish Oil", date: "04 Mar 2026", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500&h=500&fit=crop", state: "pass", text: "None Detected" },
    { id: "FDC-ORS-827", brand: "FDC Limited", name: "Electral ORS Powder", date: "10 Mar 2026", img: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=500&h=500&fit=crop", state: "fail", text: "WARNING: Low Sodium" },
    { id: "DB-HNY-102", brand: "Dabur", name: "Pure Honey (500g)", date: "18 Mar 2026", img: "https://images.unsplash.com/photo-1587049352847-8d4c0b8b1025?w=500&h=500&fit=crop", state: "fail", text: "WARNING: Sugar Syrup" }
];

function generateGrid(products) {
    const grid = document.getElementById('reports-grid');
    grid.innerHTML = '';
    products.forEach(p => {
        const badge = p.state === 'fail' ? `<span class="badge-fail">Fail</span><div class="stamp-fail">FAILED</div>` : `<span class="badge-pass">Pass</span>`;
        const reportState = p.state === 'fail' ? 'tampered' : 'verified';
        grid.innerHTML += `
            <div class="product-card bento-card flex flex-col relative group cursor-pointer" onclick="viewReport('${reportState}', '${p.name}', '${p.id}', '${p.text}', '${p.img}')">
                <div class="h-48 bg-slate-50 flex items-center justify-center relative p-4 border-b border-slate-100 overflow-hidden rounded-t-3xl">
                    ${badge}
                    <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110">
                </div>
                <div class="p-5 flex-grow flex flex-col justify-between">
                    <div>
                        <h3 class="font-extrabold text-slate-900 text-lg mb-3">${p.brand}</h3>
                        <ul class="text-xs text-slate-500 space-y-2 mb-4 font-medium">
                            <li><span class="text-slate-800 font-bold">Product:</span> ${p.name}</li>
                            <li><span class="text-slate-800 font-bold">Batch:</span> <span class="font-mono">${p.id}</span></li>
                            <li><span class="text-slate-800 font-bold">Date:</span> ${p.date}</li>
                        </ul>
                    </div>
                    <div class="mt-2 text-emerald-500 text-xs font-bold uppercase tracking-widest group-hover:text-emerald-600 transition-colors flex items-center justify-between">
                        View Blockchain Proof <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </div>
                </div>
            </div>`;
    });
}
generateGrid(initialProducts);

function switchTab(tabId) {
    const tabs = ['home', 'admin', 'consumer'];
    tabs.forEach(id => {
        const el = document.getElementById(`tab-${id}`);
        const btn = document.getElementById(`btn-${id}`);
        if (id === tabId) {
            el.classList.remove('hidden'); el.classList.add('block');
            btn.classList.replace('inactive-nav', 'active-nav');
            if(id === 'consumer') btn.classList.remove('hidden');
        } else {
            el.classList.remove('block'); el.classList.add('hidden');
            btn.classList.replace('active-nav', 'inactive-nav');
            if(id === 'consumer') btn.classList.add('hidden'); // Hide scanner tab if not active
        }
    });
}

function viewReport(state, productName, batchId, adulterantTextData, imageUrl) {
    switchTab('consumer');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const card = document.getElementById('passport-card');
    const overlay = document.getElementById('scanner-overlay');
    
    card.classList.add('hidden', 'opacity-0');
    document.getElementById('dynamic-nutrition').classList.remove('show-bars');
    
    overlay.classList.remove('hidden');
    overlay.classList.add('flex');

    document.getElementById('display-name').innerText = productName;
    document.getElementById('display-batch').innerText = batchId;
    document.getElementById('display-image').src = imageUrl;

    const data = productDB[batchId] || productDB["MDC-4091A"]; // fallback
    
    // Inject the raw FSSAI-style tabular data
    document.getElementById('dynamic-tabular-data').innerHTML = data.tabular;
    // Inject the animated bars
    document.getElementById('dynamic-nutrition').innerHTML = data.nutrition;

    const m = data.metric;
    document.getElementById('metric-category').innerText = m.category;
    document.getElementById('metric-limit-val').innerText = m.limitVal;
    document.getElementById('metric-limit-unit').innerText = m.limitUnit;
    document.getElementById('metric-found-val').innerText = m.foundVal;
    document.getElementById('metric-found-unit').innerText = m.foundUnit;
    document.getElementById('metric-reason').innerText = m.reason;

    const fCircle = document.getElementById('metric-found-circle');
    const fVal = document.getElementById('metric-found-val');
    const fUnit = document.getElementById('metric-found-unit');
    const sGlow = document.getElementById('status-glow');
    
    if (state === 'tampered' || state === 'fail') {
        fCircle.className = "w-24 h-24 rounded-full border-[6px] border-red-500 flex flex-col justify-center items-center bg-white z-10 shadow-[0_0_20px_rgba(239,68,68,0.3)] transform scale-110";
        fVal.className = "text-2xl font-extrabold text-red-600 leading-none mt-1";
        fUnit.className = "text-[9px] text-red-500 font-bold uppercase tracking-widest";
        sGlow.className = "absolute top-0 left-0 w-full h-32 blur-3xl opacity-30 bg-red-400";
    } else {
        fCircle.className = "w-24 h-24 rounded-full border-[6px] border-emerald-500 flex flex-col justify-center items-center bg-white z-10 shadow-[0_0_20px_rgba(16,185,129,0.3)] transform scale-110";
        fVal.className = "text-2xl font-extrabold text-emerald-600 leading-none mt-1";
        fUnit.className = "text-[9px] text-emerald-500 font-bold uppercase tracking-widest";
        sGlow.className = "absolute top-0 left-0 w-full h-32 blur-3xl opacity-30 bg-emerald-400";
    }

    setTimeout(() => {
        overlay.classList.add('hidden');
        overlay.classList.remove('flex');
        
        setupCardState(state);
        
        card.classList.remove('hidden');
        setTimeout(() => { 
            card.classList.remove('opacity-0'); 
            // Trigger CSS Progress Bars
            setTimeout(() => document.getElementById('dynamic-nutrition').classList.add('show-bars'), 100);
        }, 50);
    }, 2000); 
}

function setupCardState(state) {
    const sBox = document.getElementById('status-box');
    const sTitle = document.getElementById('status-title');
    const sIcon = document.getElementById('status-icon');

    const vIcon = `<div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-2 shadow-inner"><svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div>`;
    const tIcon = `<div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-2 shadow-inner animate-pulse"><svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg></div>`;

    if (state === 'verified') {
        sBox.className = 'w-full rounded-2xl p-6 flex flex-col items-center justify-center border-2 border-emerald-500 bg-emerald-50 shadow-[0_0_30px_rgba(16,185,129,0.2)] mt-auto relative z-10';
        sTitle.className = 'font-extrabold text-xl uppercase tracking-widest text-emerald-700';
        sTitle.innerText = 'VERIFIED SAFE';
        sIcon.innerHTML = vIcon;
    } else {
        sBox.className = 'w-full rounded-2xl p-6 flex flex-col items-center justify-center border-2 border-red-500 bg-red-50 shadow-[0_0_30px_rgba(239,68,68,0.2)] mt-auto relative z-10';
        sTitle.className = 'font-extrabold text-xl uppercase tracking-widest text-red-700';
        sTitle.innerText = 'FAILED / TAMPERED';
        sIcon.innerHTML = tIcon;
    }
}

function handleFormSubmit(event) {
    event.preventDefault(); 
    
    const batchId = document.getElementById('inputId').value;
    const product = document.getElementById('inputProduct').value;
    const brand = document.getElementById('inputBrand').value;
    
    const adulterant = document.getElementById('inputAdulterant').value;
    const inputFat = parseFloat(document.getElementById('inputFat').value);
    const inputSNF = parseFloat(document.getElementById('inputSNF').value);

    let isFail = adulterant !== 'none' || inputFat < 6.0 || inputSNF < 9.0;
    
    productDB[batchId] = {
        tabular: `
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Fat %</td><td class="p-3 text-right border-l border-slate-200 font-bold ${inputFat < 6.0 ? 'text-red-600' : 'text-emerald-600'}">${inputFat.toFixed(1)}</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">SNF %</td><td class="p-3 text-right border-l border-slate-200 font-bold ${inputSNF < 9.0 ? 'text-red-600' : 'text-emerald-600'}">${inputSNF.toFixed(1)}</td></tr>
            <tr class="hover:bg-slate-50 transition-colors"><td class="p-3">Adulterant Check</td><td class="p-3 text-right border-l border-slate-200 font-bold ${adulterant !== 'none' ? 'text-red-600' : 'text-emerald-600'}">${adulterant !== 'none' ? 'FAILED' : 'PASS'}</td></tr>
        `,
        nutrition: `
            <div>
                <div class="flex justify-between text-xs font-bold text-slate-600 mb-1"><span>Fat %</span> <span class="${inputFat < 6.0 ? 'text-red-600' : 'text-emerald-600'}">${inputFat.toFixed(1)}%</span></div>
                <div class="progress-track"><div class="progress-fill ${inputFat < 6.0 ? 'bg-red-500' : 'bg-emerald-500'}" style="--target-width: ${Math.min(inputFat*10, 100)}%;"></div></div>
            </div>
            <div>
                <div class="flex justify-between text-xs font-bold text-slate-600 mb-1"><span>SNF %</span> <span class="${inputSNF < 9.0 ? 'text-red-600' : 'text-emerald-600'}">${inputSNF.toFixed(1)}%</span></div>
                <div class="progress-track"><div class="progress-fill ${inputSNF < 9.0 ? 'bg-red-500' : 'bg-emerald-500'}" style="--target-width: ${Math.min(inputSNF*5, 100)}%;"></div></div>
            </div>
        `,
        metric: {
            category: "CUSTOM LIVE METRIC", limitVal: "6.0", limitUnit: "Fat %", foundVal: inputFat.toFixed(1), foundUnit: "%",
            reason: isFail ? "Failed system telemetry checks." : "Passed all custom node checks."
        }
    };

    const newImage = `https://placehold.co/400x400/e2e8f0/475569?text=${encodeURIComponent(product)}`;
    
    initialProducts.unshift({
        id: batchId, brand: brand, name: product, date: "Just Now", img: newImage, state: isFail ? 'fail' : 'pass', text: "Custom Entry"
    });
    
    generateGrid(initialProducts);

    const toast = document.getElementById('toast');
    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => { toast.classList.add('translate-y-20', 'opacity-0'); }, 3000);

    event.target.reset(); 
    switchTab('home');
}