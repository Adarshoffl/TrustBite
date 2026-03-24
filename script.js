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

// Updated to accept an Image URL to display in the detailed view
function viewReport(state, productName, batchId, adulterantTextData, imageUrl) {
    switchTab('consumer');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const passportCard = document.getElementById('passport-card');
    const scannerOverlay = document.getElementById('scanner-overlay');
    
    // Hide passport, show scanner
    passportCard.classList.add('hidden');
    passportCard.classList.remove('flex');
    scannerOverlay.classList.remove('hidden');
    scannerOverlay.classList.add('flex');

    // Update dynamic text and image
    document.getElementById('display-name').innerText = productName;
    document.getElementById('display-batch').innerText = batchId;
    document.getElementById('display-image').src = imageUrl;

    // Artificial Delay to simulate "Reading Blockchain" (1.5 seconds)
    setTimeout(() => {
        scannerOverlay.classList.add('hidden');
        scannerOverlay.classList.remove('flex');
        
        setupCardState(state, adulterantTextData);
        
        // Reveal the card using flex instead of block for the new layout
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
    const adulterantText = document.getElementById('adulterant-result');

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
        adulterantText.innerText = adulterantTextData || "None Detected";
        adulterantText.className = "font-bold text-emerald-600";

    } else if (state === 'tampered') {
        statusBox.classList.add('bg-red-50', 'border-red-200');
        
        title.className = 'font-bold text-sm leading-tight mb-1 text-red-900';
        title.innerText = 'Data Mismatch / Failed';
        
        desc.className = 'text-[11px] leading-relaxed opacity-90 font-medium text-red-700';
        desc.innerText = 'CRITICAL: Lab results show failure or data alteration.';
        
        iconContainer.innerHTML = tamperedIcon;
        adulterantText.innerText = adulterantTextData || "WARNING: Flags Present";
        adulterantText.className = "font-bold text-red-600";
    }
}

// Dynamic Form Submission
function handleFormSubmit(event) {
    event.preventDefault(); 
    
    const batchId = document.getElementById('inputId').value;
    const product = document.getElementById('inputProduct').value;
    const brand = document.getElementById('inputBrand').value;
    const date = document.getElementById('inputDate').value;
    const adulterant = document.getElementById('inputAdulterant').value;

    const isFail = adulterant !== 'none';
    const state = isFail ? 'tampered' : 'verified';
    const badgeHtml = isFail ? '<span class="badge-fail">Fail</span>' : '<span class="badge-pass">Pass</span>';
    const stampHtml = isFail ? '<div class="stamp-fail">FAILED</div>' : '';
    const formattedAdulterant = isFail ? `Found: ${adulterant}` : 'None Detected';
    
    // Generate a placeholder image based on the product name so the tables view looks right
    const generatedImageUrl = `https://placehold.co/400x400/ffffff/333333?text=${encodeURIComponent(product)}`;

    const newCardHTML = `
        <div class="product-card bg-white border border-emerald-400 rounded-2xl overflow-hidden shadow-sm flex flex-col relative animate-fade-in shadow-glow-emerald">
            <div class="h-40 bg-slate-50 flex items-center justify-center relative p-4 border-b border-slate-100">
                ${badgeHtml}
                ${stampHtml}
                <img src="${generatedImageUrl}" alt="Product" class="h-full object-contain mix-blend-multiply opacity-50 absolute">
                <div class="text-center relative z-10 bg-white/80 p-2 rounded backdrop-blur-sm">
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