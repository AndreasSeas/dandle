// ─── DANDLE CASE LIBRARY ────────────────────────────────────────────────────
// Organized by ABNS/CNS subspecialty domains.
// Each case includes: diagnosis, aliases, domain, tier, clues (5 tiers),
// teaching point, guideline source, and Anki tags.
//
// Tiers: "core" | "intermediate" | "advanced"
// Domains: see DOMAINS constant below
// ─────────────────────────────────────────────────────────────────────────────

const DOMAINS = {
  trauma:       { label: "Neurotrauma",         icon: "🪖", color: "#f87171" },
  vascular:     { label: "Cerebrovascular",     icon: "🩸", color: "#fb923c" },
  oncology:     { label: "Neuro-oncology",      icon: "🔬", color: "#a78bfa" },
  skullbase:    { label: "Skull Base",          icon: "💀", color: "#38bdf8" },
  spine_degen:  { label: "Spine — Degenerative",icon: "🦴", color: "#34d399" },
  spine_path:   { label: "Spine — Pathological",icon: "🧬", color: "#4ade80" },
  functional:   { label: "Functional",          icon: "⚡", color: "#fbbf24" },
  pediatric:    { label: "Pediatric",           icon: "🧒", color: "#f472b6" },
  csf:          { label: "Hydrocephalus & CSF", icon: "💧", color: "#67e8f9" },
  neurocrit:    { label: "Neurocritical Care",  icon: "🚨", color: "#ff6b6b" },
};

const CASES = [

  // ── DOMAIN: NEUROTRAUMA ───────────────────────────────────────────────────

  {
    id: 1,
    answer: "Epidural Hematoma",
    aliases: ["EDH", "Extradural hematoma", "Epidural haematoma", "Extradural haematoma"],
    domain: "trauma",
    tier: "core",
    clues: [
      { type: "History",   icon: "🧾", text: "A 19-year-old male is brought to the ED after a motorcycle collision. He had a brief loss of consciousness at the scene, walked to the ambulance talking (GCS 15), but his GCS dropped to 8 en route to hospital." },
      { type: "Exam",      icon: "🔬", text: "Right pupil fixed and dilated (6 mm), left pupil 3 mm and reactive. Left-sided hemiplegia. Cushing's triad (hypertension, bradycardia, irregular respirations) is developing." },
      { type: "Imaging",   icon: "🧠", text: "Non-contrast CT head: biconvex (lenticular) hyperdense collection over the right temporal–parietal convexity. 4 mm midline shift. Linear fracture through the right temporal bone on bone windows." },
      { type: "Labs",      icon: "🧪", text: "INR 1.0. Blood alcohol 0.04. Platelet count 210. No anticoagulants." },
      { type: "Intraop",   icon: "⚕️", text: "Emergency right temporal craniotomy: arterial bleeding from a lacerated middle meningeal artery beneath the temporal bone fracture. Hematoma evacuated; excellent decompression." }
    ],
    explanation: "The 'talk and die' lucid interval is the hallmark of EDH. The biconvex (lenticular) shape on CT reflects the epidural space — blood cannot cross suture lines. Source is almost always the middle meningeal artery (pterion is the thinnest skull point). Treat within 1 hour of herniation — outcomes are excellent with rapid decompression.",
    guideline: "BTF TBI Guidelines 4th ed. | AANS/CNS Joint Neurotrauma Section",
    ankiTags: ["Neuro::Trauma::EDH", "Neuro::CT::Biconvex", "Neuro::MiddleMeningeal", "Neuro::LucidInterval"]
  },

  {
    id: 2,
    answer: "Acute Subdural Hematoma",
    aliases: ["Acute SDH", "aSDH", "Acute subdural"],
    domain: "trauma",
    tier: "core",
    clues: [
      { type: "History",   icon: "🧾", text: "An 82-year-old woman on warfarin for atrial fibrillation is brought to the ED after a ground-level fall. She was unresponsive at the scene. GCS 6 on arrival." },
      { type: "Exam",      icon: "🔬", text: "Left pupil 5 mm sluggishly reactive, right pupil 3 mm. Right hemiplegia. Extensor posturing to pain. No scalp laceration." },
      { type: "Imaging",   icon: "🧠", text: "CT head: hyperdense crescent-shaped collection layering over the entire left hemisphere convexity, 15 mm thickness. 10 mm midline shift. Effacement of the left lateral ventricle. No skull fracture." },
      { type: "Labs",      icon: "🧪", text: "INR 3.8. Platelets 180. Hemoglobin 11.2. Urgent reversal with 4-factor PCC and Vitamin K initiated." },
      { type: "Intraop",   icon: "⚕️", text: "After INR reversal to 1.3: left hemicraniectomy and evacuation of mixed liquid/clotted subdural blood. Bridging veins torn at the frontal pole." }
    ],
    explanation: "Acute SDH: crescentic shape, crosses suture lines (unlike EDH). In the elderly on anticoagulation, even low-energy trauma causes massive SDH due to bridging vein fragility and cortical atrophy (stretches bridging veins further). Mortality is high (~60%); outcomes depend on GCS at presentation and rapidity of reversal/decompression.",
    guideline: "BTF TBI Guidelines 4th ed. | AANS SDH Management Guidelines",
    ankiTags: ["Neuro::Trauma::SDH::Acute", "Neuro::CT::Crescent", "Neuro::Anticoagulation::Reversal", "Neuro::BridgingVeins"]
  },

  {
    id: 3,
    answer: "Chronic Subdural Hematoma",
    aliases: ["Chronic SDH", "cSDH", "Chronic subdural"],
    domain: "trauma",
    tier: "core",
    clues: [
      { type: "History",   icon: "🧾", text: "A 76-year-old man on aspirin presents with 3 weeks of progressive confusion, mild left arm weakness, and two episodes of word-finding difficulty. His wife recalls a minor head bump 6 weeks ago." },
      { type: "Exam",      icon: "🔬", text: "Mild left-sided pronator drift. Brisk left arm reflexes. MMSE 24/30. Gait is mildly unsteady. No papilledema." },
      { type: "Imaging",   icon: "🧠", text: "CT head: right hemispheric hypodense (mixed density) crescent-shaped collection, 18 mm maximal thickness. 7 mm midline shift. Sulcal effacement on the right." },
      { type: "Labs",      icon: "🧪", text: "INR 1.1 (aspirin held). Platelets 195. No other coagulopathy. MRI confirms T1/T2 heterogeneous subdural fluid consistent with rebleeding into chronic collection." },
      { type: "Intraop",   icon: "⚕️", text: "Two burr hole drainage under local anaesthesia: dark 'motor oil' fluid drains. Drain left in situ for 48h. Brain re-expands on post-op CT." }
    ],
    explanation: "Chronic SDH: 3–4 weeks after low-energy trauma (often forgotten). Hypodense/mixed density on CT. Mechanism: osmotic expansion + repeated microbleeds into original haematoma. Burr-hole drainage is first line; recurrence ~10–20%. Risk factors: elderly, antiplatelet/anticoagulation, brain atrophy, alcoholism.",
    guideline: "Neurosurgery 2021 cSDH Guidelines | BTF TBI Guidelines",
    ankiTags: ["Neuro::Trauma::SDH::Chronic", "Neuro::CT::Hypodense", "Neuro::BurrHole", "Neuro::MotorOil"]
  },

  {
    id: 4,
    answer: "Diffuse Axonal Injury",
    aliases: ["DAI", "Traumatic axonal injury", "Shear injury"],
    domain: "trauma",
    tier: "intermediate",
    clues: [
      { type: "History",   icon: "🧾", text: "A 24-year-old man is a restrained driver in a high-speed MVA with significant rotational deceleration. He had immediate loss of consciousness and remains in a coma (GCS 6) 48 hours post-injury." },
      { type: "Exam",      icon: "🔬", text: "No focal motor asymmetry. Bilateral extensor posturing. No papilledema. Pupils equal and reactive. CT head appears near normal with only subtle petechial hemorrhages." },
      { type: "Imaging",   icon: "🧠", text: "MRI brain (SWI/GRE sequences): multiple microhemorrhagic foci at the grey–white matter junction, corpus callosum (splenium), and dorsolateral brainstem — classic Adams Grade III distribution." },
      { type: "Labs",      icon: "🧪", text: "Serum GFAP and UCH-L1 markedly elevated. ICP monitoring placed: ICP 18 mmHg. CPP maintained >60 mmHg." },
      { type: "Pathology", icon: "⚕️", text: "Neuropathology (hypothetical): axonal retraction balls (beta-APP immunostaining positive) at grey–white junctions. No large contusion or hematoma." }
    ],
    explanation: "DAI results from rotational acceleration-deceleration shearing axons at grey–white interfaces. CT is often surprisingly normal — MRI SWI/GRE is the key sequence. Adams grading: I = grey–white junction only; II = + corpus callosum; III = + brainstem (worst prognosis). Management is supportive ICP/CPP optimization — no surgical target.",
    guideline: "BTF TBI Guidelines 4th ed. | Adams DAI Grading System",
    ankiTags: ["Neuro::Trauma::DAI", "Neuro::MRI::SWI", "Neuro::CorpusCallosum", "Neuro::Adams::Grading"]
  },

  {
    id: 5,
    answer: "Cauda Equina Syndrome",
    aliases: ["CES", "Cauda equina compression"],
    domain: "trauma",
    tier: "core",
    clues: [
      { type: "History",   icon: "🧾", text: "A 42-year-old man with sudden onset of severe low back pain radiating bilaterally into both legs after lifting a heavy object. Over 12 hours he develops saddle anaesthesia and difficulty voiding." },
      { type: "Exam",      icon: "🔬", text: "Bilateral leg weakness (4/5 hip flexion, 3/5 ankle dorsiflexion). Saddle anaesthesia (S2-S4 distribution). Lax anal sphincter on digital rectal exam. Post-void residual 450 mL on bladder scan." },
      { type: "Imaging",   icon: "🧠", text: "MRI lumbar spine: large L4/5 central disc herniation with near-complete occlusion of the spinal canal and compression of the cauda equina nerve roots. Epidural fat effaced." },
      { type: "Labs",      icon: "🧪", text: "Urinalysis normal. ESR/CRP normal (no infection). No anticoagulants. INR 1.0." },
      { type: "Intraop",   icon: "⚕️", text: "Emergency L4/5 microdiscectomy within 24 hours: large extruded disc fragment removed. Cauda equina roots decompressed. Cerebrospinal fluid pulsating well post-decompression." }
    ],
    explanation: "CES is a surgical emergency — delay beyond 24–48h worsens outcomes for bladder/bowel/sexual function. The triad: bilateral leg weakness + saddle anaesthesia + bladder/bowel dysfunction. MRI is mandatory (CT myelogram if MRI contraindicated). NASS guidelines recommend early surgery; debate remains on exact timing window.",
    guideline: "NASS Clinical Practice Guidelines: Cauda Equina Syndrome | AANS Spine Guidelines",
    ankiTags: ["Neuro::Spine::CaudaEquina", "Neuro::Emergency::Surgical", "Neuro::SaddleAnaesthesia", "Neuro::Microdiscectomy"]
  },

  // ── DOMAIN: CEREBROVASCULAR ───────────────────────────────────────────────

  {
    id: 6,
    answer: "Subarachnoid Hemorrhage",
    aliases: ["SAH", "Aneurysmal SAH", "Subarachnoid bleed"],
    domain: "vascular",
    tier: "core",
    clues: [
      { type: "History",   icon: "🧾", text: "A 52-year-old woman describes 'the worst headache of my life' with sudden onset during exercise. She briefly lost consciousness and has been vomiting." },
      { type: "Exam",      icon: "🔬", text: "Nuchal rigidity. Photophobia. GCS 13 (confused). No focal deficits. Bilateral subhyaloid (preretinal) haemorrhages on fundoscopy (Terson syndrome)." },
      { type: "Imaging",   icon: "🧠", text: "Non-contrast CT: hyperdensity filling the basal cisterns and sylvian fissures (star sign). CT angiogram: 7 mm saccular aneurysm at the left posterior communicating artery origin." },
      { type: "Labs",      icon: "🧪", text: "If CT negative: LP shows xanthochromia on spectrophotometry (not just visual inspection). Na 138, trending down — watching for SIADH vs cerebral salt wasting. Troponin mildly elevated." },
      { type: "Intraop",   icon: "⚕️", text: "Left pterional craniotomy: left Pcomm aneurysm clipped. Intraoperative angiogram confirms complete obliteration. No perforator injury." }
    ],
    explanation: "Thunderclap headache = SAH until proven otherwise. CT sensitivity >98% within 6h (falls to ~90% at 24h). LP xanthochromia remains gold standard if CT negative. Aneurysmal SAH management: secure aneurysm early (clip or coil), nimodipine for vasospasm prevention, watch D4–14 for DCI, external ventricular drain if hydrocephalus.",
    guideline: "AHA/ASA Aneurysmal SAH Guidelines 2023 | Neurocritical Care Society",
    ankiTags: ["Neuro::Vascular::SAH", "Neuro::Aneurysm::Pcomm", "Neuro::Vasospasm", "Neuro::Nimodipine", "Neuro::ThunderclapHeadache"]
  },

  {
    id: 7,
    answer: "Brain Arteriovenous Malformation",
    aliases: ["AVM", "Brain AVM", "Cerebral AVM", "Arteriovenous malformation"],
    domain: "vascular",
    tier: "intermediate",
    clues: [
      { type: "History",   icon: "🧾", text: "A 28-year-old software developer presents with a first-ever seizure followed by a severe headache. No prior history. Family history negative for vascular lesions." },
      { type: "Exam",      icon: "🔬", text: "Post-ictal state on arrival; now GCS 15. No focal neurological deficits. Mild left-sided headache. No papilledema. No cutaneous AVM stigmata (no HHT features)." },
      { type: "Imaging",   icon: "🧠", text: "CT: small right parietal intraparenchymal haemorrhage. MRI: serpiginous flow voids in the right parietal lobe with surrounding haemosiderin. DSA: compact AVM nidus (2.5 cm), single arterial feeder from MCA, single superficial cortical draining vein. Spetzler–Martin Grade II." },
      { type: "Labs",      icon: "🧪", text: "Genetics: HHT gene panel sent (ENG, ACVRL1). Normal coagulation. Seizure controlled with levetiracetam." },
      { type: "Intraop",   icon: "⚕️", text: "Microsurgical resection (Grade II AVM): feeders coagulated and divided, nidus dissected en bloc, draining vein taken last. Intraoperative ICG angiography confirms complete resection." }
    ],
    explanation: "AVM annual haemorrhage risk ~2–4% per year (cumulative lifetime risk = 105 minus patient age). Spetzler-Martin grading predicts surgical risk (size + eloquence + deep venous drainage). Grade I-II: surgery preferred. Grade III: multidisciplinary. Grade IV-V: radiosurgery or conservative. The ARUBA trial controversy: unruptured AVMs may do better conservatively.",
    guideline: "ARISE I AVM Consensus 2024 | Spetzler-Martin Grading | AHA/ASA Stroke Guidelines",
    ankiTags: ["Neuro::Vascular::AVM", "Neuro::SpetzlerMartin", "Neuro::DSA", "Neuro::ARUBA", "Neuro::ICG"]
  },

  {
    id: 8,
    answer: "Cavernous Malformation",
    aliases: ["Cavernoma", "Cavernous hemangioma", "Cerebral cavernous malformation", "CCM"],
    domain: "vascular",
    tier: "intermediate",
    clues: [
      { type: "History",   icon: "🧾", text: "A 35-year-old woman presents with recurrent episodes of right arm tingling and twitching over 6 months, each lasting 2–3 minutes. She now has a persistent mild right arm weakness." },
      { type: "Exam",      icon: "🔬", text: "Right arm 4/5 strength. Brisk right arm reflexes. No papilledema. NIHSS 1. Family history: her mother had a 'brain bleed' in her 40s." },
      { type: "Imaging",   icon: "🧠", text: "MRI brain: left parietal lesion with a 'popcorn' appearance — mixed signal core (blood products of different ages) with a complete hypointense haemosiderin rim on T2*/GRE/SWI. No surrounding oedema. No arterial feeder on MRA." },
      { type: "Labs",      icon: "🧪", text: "Genetic testing: CCM1 (KRIT1) gene mutation identified — familial cavernous malformation syndrome. Brain MRI reveals 3 additional small asymptomatic lesions." },
      { type: "Intraop",   icon: "⚕️", text: "Left parietal craniotomy guided by neuronavigation and cortical mapping: cavernoma with surrounding haemosiderin rim excised. No arteriovenous shunting on intraop DSA." }
    ],
    explanation: "'Popcorn' or 'mulberry' lesion with complete haemosiderin rim on MRI is pathognomonic. Cavernomas are angiographically occult (unlike AVMs). Familial form (CCM1/2/3 mutations) causes multiple lesions. Annual haemorrhage risk: ~0.5% (sporadic, unbled) to 4–5% (previously bled, brainstem location). Surgery indicated for accessible, symptomatic, or repeatedly bleeding lesions.",
    guideline: "Cavernoma Alliance UK / AANS-CNS CCM Guidelines 2017 | Neurosurgery 80:665",
    ankiTags: ["Neuro::Vascular::Cavernoma", "Neuro::MRI::Popcorn", "Neuro::CCM1::KRIT1", "Neuro::Haemosiderin"]
  },

  // ── DOMAIN: NEURO-ONCOLOGY ────────────────────────────────────────────────

  {
    id: 9,
    answer: "Glioblastoma",
    aliases: ["GBM", "Glioblastoma multiforme", "Grade IV glioma", "IDH-wildtype GBM"],
    domain: "oncology",
    tier: "core",
    clues: [
      { type: "History",   icon: "🧾", text: "A 58-year-old man presents with 3 weeks of progressive morning headaches and a witnessed seizure. His wife notes personality changes and word-finding difficulty over the same period." },
      { type: "Exam",      icon: "🔬", text: "Left-sided pronator drift. Mild expressive aphasia. GCS 14. No papilledema. MMSE 24/30." },
      { type: "Imaging",   icon: "🧠", text: "MRI brain with contrast: irregular ring-enhancing right frontal mass with central necrosis, extensive perilesional vasogenic oedema, and 6 mm midline shift. Perfusion: elevated rCBV. Spectroscopy: elevated Cho/NAA ratio." },
      { type: "Labs",      icon: "🧪", text: "Molecular: IDH1/2 wild-type. MGMT promoter methylated (favourable prognostic marker). TERT promoter mutation. EGFR amplified. 10q/10p deletion." },
      { type: "Pathology", icon: "⚕️", text: "Stereotactic biopsy: hypercellular glial tumour with microvascular proliferation, pseudopalisading necrosis, nuclear atypia. Ki-67 35%. IDH-wt Grade 4 per WHO CNS5 2021." }
    ],
    explanation: "GBM: most common primary malignant brain tumour. WHO 2021: IDH-wildtype Grade 4 glioblastoma. Classic MRI: ring-enhancing with central necrosis ± butterfly pattern across corpus callosum. Standard of care: maximal safe resection → Stupp protocol (concurrent TMZ + RT → adjuvant TMZ). MGMT methylation predicts TMZ response. Median survival ~15 months.",
    guideline: "WHO CNS5 2021 | Stupp Protocol (EORTC 26981) | NCCN CNS Tumours Guidelines",
    ankiTags: ["Neuro::Oncology::GBM", "Neuro::WHO::CNS5", "Neuro::MGMT", "Neuro::Stupp", "Neuro::IDH::Wildtype"]
  },

  {
    id: 10,
    answer: "Meningioma",
    aliases: ["Intracranial meningioma", "Convexity meningioma", "Sphenoid wing meningioma"],
    domain: "oncology",
    tier: "core",
    clues: [
      { type: "History",   icon: "🧾", text: "A 55-year-old woman is referred after an incidental MRI for headaches reveals a lesion. She now mentions that over 2 years she has had mild left leg weakness and occasional focal seizures with left leg jerking." },
      { type: "Exam",      icon: "🔬", text: "Left leg 4+/5 strength. Mildly brisk left knee jerk. No papilledema. Otherwise intact." },
      { type: "Imaging",   icon: "🧠", text: "MRI brain: 3.5 cm extra-axial, homogeneously enhancing, dural-based mass over the right parasagittal cortex. Broad dural tail. Hyperostosis of the adjacent inner table. No surrounding oedema. Abutting the superior sagittal sinus." },
      { type: "Labs",      icon: "🧪", text: "NF2 mutation testing: negative. Progesterone receptor status: positive (favourable). Pre-op angiogram: tumour blush from right MMA branches." },
      { type: "Intraop",   icon: "⚕️", text: "Right parasagittal craniotomy: tumour dissected from the brain surface (no invasion), dural attachment coagulated (Simpson Grade II). Sinus preserved. Pathology: WHO Grade 1 meningioma, meningothelial type." }
    ],
    explanation: "Meningioma is the most common intracranial tumour overall. Classic MRI: extra-axial, homogeneous enhancement, dural tail, hyperostosis. Simpson grading predicts recurrence (Grade I = dura + bone excised; Grade V = decompression only). WHO Grade 1 (~80%): benign, low recurrence. Watch-and-wait appropriate for small asymptomatic lesions. Radiosurgery for residual/recurrent.",
    guideline: "AANS/CNS Meningioma Guidelines | WHO CNS5 2021 | Simpson Grading",
    ankiTags: ["Neuro::Oncology::Meningioma", "Neuro::MRI::DuralTail", "Neuro::Simpson::Grade", "Neuro::ExtraAxial", "Neuro::NF2"]
  },

  {
    id: 11,
    answer: "Pituitary Macroadenoma",
    aliases: ["Pituitary adenoma", "Macroadenoma", "Non-functioning pituitary adenoma", "NFPA"],
    domain: "oncology",
    tier: "core",
    clues: [
      { type: "History",   icon: "🧾", text: "A 45-year-old man presents with a 6-month history of progressively worsening peripheral vision loss — he has been bumping into door frames. He also reports fatigue, decreased libido, and morning headaches." },
      { type: "Exam",      icon: "🔬", text: "Formal visual field testing: bitemporal hemianopia. Visual acuity preserved. No acromegaly features. No Cushingoid features. No galactorrhoea." },
      { type: "Imaging",   icon: "🧠", text: "MRI pituitary with contrast: 2.8 cm sellar/suprasellar mass with upward extension compressing the optic chiasm. Cavernous sinus invasion on the left (Knosp Grade 3). No carotid encasement." },
      { type: "Labs",      icon: "🧪", text: "Pituitary panel: prolactin 45 (mildly elevated — stalk effect). IGF-1 normal. Morning cortisol low — secondary adrenal insufficiency. LH/FSH low. Free T4 low. Hydrocortisone replacement started immediately." },
      { type: "Intraop",   icon: "⚕️", text: "Endoscopic endonasal transsphenoidal resection: tumour debulked from sellar and suprasellar compartment. Optic chiasm decompressed. Post-op MRI: significant decompression; residual in left cavernous sinus." }
    ],
    explanation: "Bitemporal hemianopia from optic chiasm compression is the classic presentation of a pituitary macroadenoma (>1 cm). First step: measure prolactin — if >200, likely prolactinoma (medical treatment with dopamine agonists). Non-functioning adenomas: surgical decompression via transsphenoidal route. Cavernous sinus invasion (Knosp 3-4) limits gross total resection.",
    guideline: "AANS/CNS Pituitary Tumour Guidelines | Endocrine Society Pituitary Guidelines 2011",
    ankiTags: ["Neuro::Oncology::Pituitary", "Neuro::BiTemporalHemianopia", "Neuro::Knosp", "Neuro::Transsphenoidal", "Neuro::StalkEffect"]
  },

  {
    id: 12,
    answer: "Low-Grade Glioma",
    aliases: ["LGG", "IDH-mutant glioma", "Grade 2 glioma", "Diffuse astrocytoma", "Oligodendroglioma"],
    domain: "oncology",
    tier: "intermediate",
    clues: [
      { type: "History",   icon: "🧾", text: "A 34-year-old teacher presents after a first seizure. She reports subtle word-finding difficulty for the past year, which she attributed to stress. No other symptoms. No family history of brain tumours." },
      { type: "Exam",      icon: "🔬", text: "Mild expressive aphasia on formal testing. No motor deficit. No papilledema. MoCA 26/30." },
      { type: "Imaging",   icon: "🧠", text: "MRI brain: T2/FLAIR hyperintense non-enhancing mass in the left frontal lobe, involving Broca's area, with associated cortical expansion and no surrounding oedema. T1 hypointense, no contrast enhancement, no necrosis." },
      { type: "Labs",      icon: "🧪", text: "Molecular profile: IDH1 R132H mutated (positive immunostaining). 1p/19q co-deletion present — oligodendroglioma lineage. MGMT methylated. TERT promoter mutated." },
      { type: "Pathology", icon: "⚕️", text: "Biopsy: oligodendroglioma, IDH-mutant, 1p/19q co-deleted, WHO Grade 2. 'Fried egg' cells with perinuclear halos and chicken-wire vasculature pattern." }
    ],
    explanation: "WHO 2021 paradigm shift: LGG is now molecularly defined. IDH-mutant + 1p/19q co-deleted = oligodendroglioma (best prognosis). IDH-mutant + intact 1p/19q = astrocytoma. Management: maximal safe resection (awake craniotomy if eloquent) → adjuvant RT + PCV or temozolomide. 10-year survival >70% for Grade 2 oligodendroglioma.",
    guideline: "WHO CNS5 2021 | RTOG 9802 | EORTC 22033 | NCCN CNS Tumours",
    ankiTags: ["Neuro::Oncology::LGG", "Neuro::IDH::Mutant", "Neuro::1p19q::Codeletion", "Neuro::Oligodendroglioma", "Neuro::FriedEgg", "Neuro::AwakerCraniotomy"]
  },

  // ── DOMAIN: SKULL BASE ────────────────────────────────────────────────────

  {
    id: 13,
    answer: "Acoustic Neuroma",
    aliases: ["Vestibular schwannoma", "CN VIII schwannoma", "Acoustic neurinoma"],
    domain: "skullbase",
    tier: "core",
    clues: [
      { type: "History",   icon: "🧾", text: "A 47-year-old man reports 2 years of progressive right-sided hearing loss and constant tinnitus. More recently he notices imbalance when walking in the dark and has had one fall." },
      { type: "Exam",      icon: "🔬", text: "Right sensorineural hearing loss on Weber/Rinne (Weber lateralises left). Decreased right corneal reflex. No facial weakness. Mild right-sided appendicular ataxia. No papilledema." },
      { type: "Imaging",   icon: "🧠", text: "MRI with gadolinium: avidly enhancing mass centred on the right internal auditory canal, extending into the CPA cistern — 'ice-cream cone' appearance. 2.3 cm diameter. No brain compression." },
      { type: "Labs",      icon: "🧪", text: "Formal audiogram: right-sided sensorineural hearing loss, poor speech discrimination (SDS 48%). ABR: prolonged I–III interpeak latency right side. NF2 mutation panel: negative (sporadic tumour)." },
      { type: "Pathology", icon: "⚕️", text: "Post-resection pathology: Antoni A (dense hypercellular) and Antoni B (loose myxoid) areas. Verocay bodies. S-100 and SOX10 positive. EMA negative." }
    ],
    explanation: "Vestibular schwannoma: 80% of CPA angle tumours. Unilateral sensorineural hearing loss is the hallmark. 'Ice-cream cone' sign on MRI (IAC + CPA components). Bilateral vestibular schwannomas = NF2 (diagnostic criterion). Management: observe (small/elderly), stereotactic radiosurgery (Gamma Knife, <3 cm), or microsurgical resection (translabyrinthine/retrosigmoid/middle fossa approaches).",
    guideline: "AAO-HNS Vestibular Schwannoma Guidelines | North American Skull Base Society",
    ankiTags: ["Neuro::SkullBase::Schwannoma", "Neuro::CPA::Tumours", "Neuro::IceCreamCone", "Neuro::GammaKnife", "Neuro::NF2"]
  },

  {
    id: 14,
    answer: "Pituitary Apoplexy",
    aliases: ["Pituitary apoplexia", "Pituitary haemorrhage", "Haemorrhagic pituitary adenoma"],
    domain: "skullbase",
    tier: "intermediate",
    clues: [
      { type: "History",   icon: "🧾", text: "A 50-year-old man presents with sudden-onset severe headache, visual blurring, and diplopia. He later reveals he has been told he has 'a pituitary lesion on a previous scan' but never followed up." },
      { type: "Exam",      icon: "🔬", text: "Right CN III palsy (ptosis, eye deviated down and out, pupil spared — compressive). Bitemporal visual field defect. GCS 14. Nuchal rigidity absent." },
      { type: "Imaging",   icon: "🧠", text: "CT: hyperdense sellar mass. MRI T1: heterogeneous high-signal within the pituitary adenoma consistent with acute haemorrhage. Significant suprasellar extension compressing the optic chiasm." },
      { type: "Labs",      icon: "🧪", text: "Cortisol: critically low (<50 nmol/L). Immediate IV hydrocortisone 200 mg bolus started. All other pituitary hormones low. Blood glucose normal." },
      { type: "Intraop",   icon: "⚕️", text: "Emergency endoscopic transsphenoidal decompression within 24 hours: haemorrhagic necrotic tumour evacuated. Optic chiasm decompression achieved. Visual fields begin improving post-op day 2." }
    ],
    explanation: "Pituitary apoplexy = acute haemorrhage/infarction within a pituitary adenoma. Triad: sudden headache + visual loss/diplopia + hypopituitarism. Cortisol deficiency is life-threatening — give IV hydrocortisone IMMEDIATELY before imaging. Urgent surgical decompression for visual compromise. CN III palsy often recovers post-decompression.",
    guideline: "Pituitary Apoplexy Guidelines — Endocrine Society 2015 | AANS/CNS Pituitary Section",
    ankiTags: ["Neuro::SkullBase::PituitaryApoplexy", "Neuro::CN3::Palsy", "Neuro::Hydrocortisone::Emergency", "Neuro::HypopituitarismAcute"]
  },

  // ── DOMAIN: SPINE — DEGENERATIVE ──────────────────────────────────────────

  {
    id: 15,
    answer: "Cervical Myelopathy",
    aliases: ["CSM", "Cervical spondylotic myelopathy", "Degenerative cervical myelopathy", "DCM"],
    domain: "spine_degen",
    tier: "core",
    clues: [
      { type: "History",   icon: "🧾", text: "A 62-year-old retired carpenter reports 18 months of worsening hand clumsiness (difficulty with buttons, typing), bilateral leg stiffness, and an unsteady 'drunk' gait. He also has bilateral arm and hand numbness." },
      { type: "Exam",      icon: "🔬", text: "Hoffman sign bilateral (positive). Hyperreflexia in all four limbs. Lhermitte's sign present (electric shock down spine on neck flexion). Nurick Grade 3 — walks with difficulty. mJOA score 12/18." },
      { type: "Imaging",   icon: "🧠", text: "MRI cervical spine: multilevel cervical spondylosis C3–C6 with disc-osteophyte complexes causing cord compression at C4/5 and C5/6. T2 intramedullary signal change (myelomalacia) at C5/6. Canal diameter 8 mm at C5." },
      { type: "Labs",      icon: "🧪", text: "B12 normal (exclude subacute combined degeneration). Blood glucose normal (exclude diabetic myelopathy). EMG/NCS: chronic denervation C5-C6 myotomes." },
      { type: "Intraop",   icon: "⚕️", text: "Anterior cervical discectomy and fusion C4–C6 (ACDF) with cage and plate: cord decompression confirmed intraoperatively by ultrasound. Neuromonitoring (SSEP/MEP) stable throughout." }
    ],
    explanation: "Cervical myelopathy is the most common cause of spinal cord dysfunction in adults over 55. Key signs: Hoffman's, Lhermitte's, hyperreflexia, myelopathic gait. mJOA <12 = moderate-severe, warrants surgery. Surgical options: ACDF (anterior, 1–3 levels), laminectomy ± fusion, or laminoplasty (posterior, multilevel). Early surgery prevents progression; recovery from established myelomalacia is limited.",
    guideline: "AO Spine DCM Guidelines 2017 | NASS Cervical Myelopathy Guidelines | AOSpine GUIDE-CSM",
    ankiTags: ["Neuro::Spine::Myelopathy", "Neuro::Hoffman", "Neuro::Lhermitte", "Neuro::mJOA", "Neuro::ACDF", "Neuro::Myelomalacia"]
  },

  {
    id: 16,
    answer: "Lumbar Disc Herniation",
    aliases: ["LDH", "Lumbar disc prolapse", "L4/5 disc herniation", "L5/S1 disc herniation", "Sciatica"],
    domain: "spine_degen",
    tier: "core",
    clues: [
      { type: "History",   icon: "🧾", text: "A 38-year-old nurse presents with 6 weeks of right-sided low back pain radiating down the right leg to the lateral foot, worse with sitting. She has had similar but milder episodes before that resolved spontaneously." },
      { type: "Exam",      icon: "🔬", text: "Positive right straight leg raise at 40°. Right ankle plantarflexion weakness (S1). Diminished right Achilles reflex. Decreased sensation in right S1 dermatome (lateral foot). No saddle anaesthesia." },
      { type: "Imaging",   icon: "🧠", text: "MRI lumbar spine: right paracentral L5/S1 disc herniation with compression of the traversing right S1 nerve root. Moderate disc desiccation L4/5 and L5/S1." },
      { type: "Labs",      icon: "🧪", text: "ESR/CRP normal. No red flag features (no fever, no weight loss, no prior cancer, no urinary symptoms). Failed 6 weeks conservative management (physio, NSAIDs)." },
      { type: "Intraop",   icon: "⚕️", text: "Right L5/S1 microdiscectomy via a 2 cm paramedian incision: extruded disc fragment removed from axilla of S1 root. Root mobilises freely at end. Immediate post-op: radicular pain resolved." }
    ],
    explanation: "80% of lumbar disc herniations resolve with conservative management within 6–12 weeks. Surgery (microdiscectomy) is indicated for: failure of conservative management, progressive neurological deficit, or CES. L4/5 affects the L5 root (foot dorsiflexion, big toe extension); L5/S1 affects S1 (plantarflexion, Achilles reflex). SLR is sensitive but not specific.",
    guideline: "NASS Clinical Practice Guideline: Lumbar Disc Herniation 2012 | Microdiscectomy Evidence Review",
    ankiTags: ["Neuro::Spine::LumbarDisc", "Neuro::S1::Root", "Neuro::StraightLegRaise", "Neuro::Microdiscectomy", "Neuro::Sciatica"]
  },

  {
    id: 17,
    answer: "Spinal Epidural Abscess",
    aliases: ["SEA", "Spinal abscess", "Epidural abscess spine"],
    domain: "spine_path",
    tier: "intermediate",
    clues: [
      { type: "History",   icon: "🧾", text: "A 55-year-old man with poorly controlled diabetes and a recent dental procedure presents with 10 days of worsening thoracic back pain, fever, and 3 days of bilateral leg weakness and urinary retention." },
      { type: "Exam",      icon: "🔬", text: "Fever 38.8°C. Point tenderness over T6-T8 spinous processes. Lower limb power 3/5 bilateral. Bilateral Babinski positive. Reduced sensation below T8 dermatomal level. Bladder palpable." },
      { type: "Imaging",   icon: "🧠", text: "MRI spine with gadolinium: T4–T9 posterior epidural rim-enhancing collection with cord compression at T6-T8. T2 cord signal change (myelitis). Discitis/osteomyelitis at T6/7 with disc space narrowing and endplate destruction." },
      { type: "Labs",      icon: "🧪", text: "WBC 18.4 (neutrophilia). CRP 285. ESR 98. Blood cultures: Staphylococcus aureus (MSSA). HbA1c 11.2%. LP deferred (cord compression contraindication)." },
      { type: "Intraop",   icon: "⚕️", text: "Emergency T5–T9 laminectomy and drainage: thick purulent epidural collection evacuated. Pus sent for MC&S (S. aureus). 8 weeks IV flucloxacillin commenced. Power begins recovering by day 3 post-op." }
    ],
    explanation: "Spinal epidural abscess: triad of back pain + fever + neurological deficit. Risk factors: diabetes, IV drug use, immunosuppression, recent instrumentation/dental work. MRI is diagnostic. S. aureus is the most common organism (~60%). Surgical decompression + drainage + 6–8 weeks antibiotics. Outcomes depend on duration of deficit before surgery — hours matter.",
    guideline: "Infectious Diseases Society of America (IDSA) SEA Guidelines | AANS/CNS Spine Infection Guidelines",
    ankiTags: ["Neuro::Spine::EpiduralAbscess", "Neuro::Infection::Staph", "Neuro::Discitis", "Neuro::Diabetes::Spine", "Neuro::Emergency::Surgical"]
  },

  {
    id: 18,
    answer: "Spinal Cord Compression from Metastasis",
    aliases: ["MESCC", "Metastatic epidural spinal cord compression", "Spinal metastasis", "Cord compression"],
    domain: "spine_path",
    tier: "intermediate",
    clues: [
      { type: "History",   icon: "🧾", text: "A 67-year-old woman with known metastatic breast cancer (ER+, bone mets) presents with 3 weeks of worsening mid-thoracic back pain now radiating bilaterally around her chest. Over the last 48 hours she has developed bilateral leg weakness and difficulty walking." },
      { type: "Exam",      icon: "🔬", text: "Bilateral lower limb weakness 3/5. Hyperreflexia. Bilateral Babinski. Band-like pain T6 level. Reduced sensation below T6. Retention of urine (post-void residual 300 mL)." },
      { type: "Imaging",   icon: "🧠", text: "MRI whole spine: T6 vertebral body collapse with posterior epidural extension causing significant cord compression. ESCC Grade 2 (cord displaced, CSF obliterated). Multiple other vertebral mets (T3, T9, L2)." },
      { type: "Labs",      icon: "🧪", text: "Ca2+ 2.95 mmol/L (hypercalcaemia). ALP elevated. ECOG performance status 2. Tumour board review: ER+ breast cancer — radiosensitive." },
      { type: "Intraop",   icon: "⚕️", text: "After MDT review and dexamethasone 16 mg loading: T5–T7 posterior decompression and stabilisation (pedicle screws T4, T5, T7, T8). Followed by radiotherapy. Neurological improvement to 4/5 bilateral by discharge." }
    ],
    explanation: "MESCC: oncological emergency. Back pain is the earliest symptom — weakness and bladder involvement are late. High-dose dexamethasone immediately (10–16 mg loading). Surgery (decompression + stabilisation) vs RT depends on: Tokuhashi/Bilsky scoring, radiosensitivity, performance status, spinal stability (SINS score). Patchell trial: surgery + RT superior to RT alone for ambulatory outcomes.",
    guideline: "AANS/CNS Spine Oncology Guidelines | Patchell Trial 2005 | SINS Scoring System | Tokuhashi Score",
    ankiTags: ["Neuro::Spine::MESCC", "Neuro::Dexamethasone::Emergency", "Neuro::SINS::Score", "Neuro::Tokuhashi", "Neuro::Patchell"]
  },

  // ── DOMAIN: FUNCTIONAL ────────────────────────────────────────────────────

  {
    id: 19,
    answer: "Trigeminal Neuralgia",
    aliases: ["TN", "Tic douloureux", "Trigeminal neuralgia type 1"],
    domain: "functional",
    tier: "core",
    clues: [
      { type: "History",   icon: "🧾", text: "A 65-year-old woman presents with 18 months of recurrent lancinating electric-shock pain in her right cheek and jaw, lasting 1–2 seconds, triggered by chewing, talking, and cold air. Pain-free between attacks." },
      { type: "Exam",      icon: "🔬", text: "No sensory deficit in the trigeminal distribution. Intact corneal reflex bilateral. No facial weakness. Trigger point at right upper lip. Otherwise normal cranial nerve exam." },
      { type: "Imaging",   icon: "🧠", text: "MRI brain with FIESTA/CISS sequences: close contact between the superior cerebellar artery (SCA) and the right trigeminal nerve root entry zone with focal nerve distortion — neurovascular conflict confirmed." },
      { type: "Labs",      icon: "🧪", text: "Carbamazepine trial: initial complete pain relief at 200 mg BD (diagnostic response). Oxcarbazepine switched after carbamazepine side effects. Na 128 on sodium monitoring — dose reduced." },
      { type: "Intraop",   icon: "⚕️", text: "Right retrosigmoid craniotomy for microvascular decompression (Jannetta procedure): SCA found compressing the right trigeminal nerve at the REZ; Teflon pledget interposed. Immediate complete pain relief." }
    ],
    explanation: "TN Type 1 (classical): electric-shock lancinating pain, V2/V3 > V1 distribution, triggered, pain-free interval. First line: carbamazepine/oxcarbazepine. Surgical options: MVD (Jannetta — best long-term results, especially <70yo), gamma knife radiosurgery, or percutaneous rhizotomy (glycerol, balloon, RF). MRI FIESTA/CISS identifies neurovascular conflict.",
    guideline: "AANS/CNS Trigeminal Neuralgia Guidelines 2019 | European Academy of Neurology TN Guidelines",
    ankiTags: ["Neuro::Functional::TN", "Neuro::Jannetta::MVD", "Neuro::Carbamazepine", "Neuro::SCA::Compression", "Neuro::REZ"]
  },

  {
    id: 20,
    answer: "Parkinson's Disease — DBS Candidate",
    aliases: ["PD DBS", "Parkinson's disease surgical", "Deep brain stimulation Parkinson's", "STN DBS"],
    domain: "functional",
    tier: "intermediate",
    clues: [
      { type: "History",   icon: "🧾", text: "A 62-year-old man with 10-year history of Parkinson's disease presents for surgical evaluation. Despite optimised levodopa (1200 mg/day), he has disabling motor fluctuations ('on-off' phenomenon), peak-dose dyskinesias, and wearing-off — 4 hours of 'off' time per day." },
      { type: "Exam",      icon: "🔬", text: "In 'off' state: UPDRS-III 42. Rest tremor right > left. Rigidity. Bradykinesia. Shuffling gait. In 'on' state: UPDRS-III 18, moderate choreiform dyskinesias. Cognitive screen MoCA 27/30. No dementia, no major psychosis." },
      { type: "Imaging",   icon: "🧠", text: "MRI brain: no significant atrophy, no lacunar infarcts, no cerebellar atrophy (important — atypical Parkinsonism excluded). DaTSCAN (if obtained): bilateral reduced striatal dopamine transporter uptake." },
      { type: "Labs",      icon: "🧪", text: "Levodopa challenge test: 33% improvement in UPDRS-III (>30% = positive, predicts DBS response). Neuropsychological assessment: no frontal executive dysfunction, no depression. Cardiac screening clear." },
      { type: "Intraop",   icon: "⚕️", text: "Bilateral STN DBS (subthalamic nucleus) under microelectrode recording guidance: characteristic STN firing pattern confirmed (high-frequency, irregular bursting). Macrostimulation: tremor abolished, no side effects. IPG implanted under general anaesthesia." }
    ],
    explanation: "DBS indications for PD: motor fluctuations/dyskinesias not controlled by medication, good levodopa response (>30% UPDRS improvement), no significant cognitive impairment, no atypical Parkinsonism. STN target = most common (allows medication reduction). GPi target = better for dyskinesias. DBS halves 'off' time and dyskinesia severity. MDS guidelines define candidacy criteria.",
    guideline: "Movement Disorder Society DBS Guidelines | NICE DBS Technology Appraisal | MDS PD Management Guidelines",
    ankiTags: ["Neuro::Functional::DBS", "Neuro::STN::Target", "Neuro::UPDRS", "Neuro::LevodopaChallenge", "Neuro::MotorFluctuations"]
  },

  // ── DOMAIN: PEDIATRIC ─────────────────────────────────────────────────────

  {
    id: 21,
    answer: "Hydrocephalus",
    aliases: ["Infantile hydrocephalus", "Obstructive hydrocephalus", "Communicating hydrocephalus", "Aqueductal stenosis"],
    domain: "pediatric",
    tier: "core",
    clues: [
      { type: "History",   icon: "🧾", text: "A 4-month-old infant is brought by parents concerned about a rapidly enlarging head. She is irritable, feeding poorly, and has had two episodes of upward eye deviation with brief unresponsiveness." },
      { type: "Exam",      icon: "🔬", text: "Head circumference >99th percentile (crossing centiles). Tense anterior fontanelle. Dilated scalp veins. Sunset sign (downward deviation of eyes — Parinaud's sign). Increased limb tone. Brisk DTRs." },
      { type: "Imaging",   icon: "🧠", text: "MRI brain: marked dilatation of bilateral lateral ventricles and third ventricle. Stenosis of the cerebral aqueduct (aqueductal stenosis). Fourth ventricle normal in size. Transependymal oedema at the frontal/occipital horns." },
      { type: "Labs",      icon: "🧪", text: "Head US (bedside): bilateral marked ventriculomegaly — Evans' index 0.42. No blood products. No obvious mass. Thyroid function, metabolic screen normal." },
      { type: "Intraop",   icon: "⚕️", text: "Endoscopic third ventriculostomy (ETV): endoscope navigated to floor of third ventricle, fenestration created allowing CSF to bypass the aqueduct. Choroid plexus cauterisation performed. ETV success score (ETV-SS) 70% — good candidate." }
    ],
    explanation: "Hydrocephalus in infants: enlarging OFC, full fontanelle, sunset sign, irritability. Aqueductal stenosis is the most common cause of congenital obstructive hydrocephalus. Treatment: ETV (preferred for obstructive) or VP shunt (communicating or ETV failure). ETV success score (ETV-SS) based on age, aetiology, previous shunt predicts ETV success. Shunt complications: infection, obstruction, over-drainage.",
    guideline: "Hydrocephalus Clinical Research Network (HCRN) Guidelines | ASPN Consensus | ETV-SS Calculator",
    ankiTags: ["Neuro::Pediatric::Hydrocephalus", "Neuro::ETV", "Neuro::AqueductalStenosis", "Neuro::SunsetSign", "Neuro::EvansIndex"]
  },

  {
    id: 22,
    answer: "Medulloblastoma",
    aliases: ["PNET", "Medulloblastoma WHO Grade 4", "Posterior fossa medulloblastoma"],
    domain: "pediatric",
    tier: "intermediate",
    clues: [
      { type: "History",   icon: "🧾", text: "A 7-year-old boy presents with a 6-week history of morning vomiting, worsening headaches, and progressive ataxia. His parents note he has become increasingly clumsy and is walking as if 'drunk'." },
      { type: "Exam",      icon: "🔬", text: "Papilledema bilateral. Truncal ataxia — cannot walk tandem. Dysmetria on finger-nose-finger bilateral. Nystagmus on lateral gaze. GCS 14. Head circumference normal for age." },
      { type: "Imaging",   icon: "🧠", text: "MRI brain: midline posterior fossa mass arising from the roof of the fourth ventricle (vermis), 4 cm, heterogeneously enhancing. Hydrocephalus from fourth ventricular obstruction. Restricted diffusion (hypercellular). Spine MRI: no drop metastases." },
      { type: "Labs",      icon: "🧪", text: "LP CSF (post-op, after imaging): no malignant cells. Molecular: WNT-activated subgroup (best prognosis). No MYCC amplification. Standard risk: no metastases, residual <1.5 cm²." },
      { type: "Pathology", icon: "⚕️", text: "Post-resection pathology: small round blue cells with high N:C ratio, Homer-Wright rosettes, high mitotic index. WHO Grade 4. Synaptophysin and NeuN positive." }
    ],
    explanation: "Medulloblastoma: most common malignant paediatric brain tumour. Arises from the cerebellar vermis (midline → truncal ataxia). Four WHO 2021 molecular groups: WNT (best, 95% OS), SHH (intermediate), Group 3 (worst), Group 4 (intermediate). Standard risk: GTR + craniospinal irradiation + chemotherapy. CSF cytology post-op for staging (M staging).",
    guideline: "Children's Oncology Group (COG) ACNS0332 | WHO CNS5 2021 | SIOP/COG Medulloblastoma Guidelines",
    ankiTags: ["Neuro::Pediatric::Medulloblastoma", "Neuro::WNT::Subgroup", "Neuro::HomerWright", "Neuro::CraniospinalRT", "Neuro::PosteriorFossa"]
  },

  // ── DOMAIN: CSF / HYDROCEPHALUS ───────────────────────────────────────────

  {
    id: 23,
    answer: "Normal Pressure Hydrocephalus",
    aliases: ["NPH", "iNPH", "Idiopathic NPH", "Hakim's disease"],
    domain: "csf",
    tier: "core",
    clues: [
      { type: "History",   icon: "🧾", text: "A 74-year-old retired teacher is referred for progressive gait instability over 18 months. Her family reports worsening memory and new urinary incontinence she tries to hide." },
      { type: "Exam",      icon: "🔬", text: "Broad-based magnetic gait — short shuffling steps, difficulty initiating ('feet glued to floor'), positive pull test (retropulsion). MMSE 22/30. Urinary urgency confirmed on history. No tremor." },
      { type: "Imaging",   icon: "🧠", text: "MRI brain: ventriculomegaly with Evans' index 0.32 disproportionate to sulcal atrophy. Tight high-convexity sulci (DESH pattern). Periventricular T2 signal change. Cine CSF flow: reduced flow at aqueduct." },
      { type: "Labs",      icon: "🧪", text: "High-volume LP (30 mL removed): opening pressure 14 cmH₂O. Patient demonstrates objective gait improvement post-tap (tap test positive — timed-up-and-go improves by 20%). CSF: normal cells/glucose/protein." },
      { type: "Pathology", icon: "⚕️", text: "Post-shunt improvement: gait normalises (Nurick-equivalent improvement), continence restores, cognitive testing improves by 4 MMSE points at 3 months. Pathophysiology: impaired CSF absorption at arachnoid granulations." }
    ],
    explanation: "Hakim's triad: Wet + Wacky + Wobbly (incontinence, dementia, gait — gait improves first and most). Evans' index >0.3 + DESH pattern. Tap test predicts shunt response (sensitivity 50–60%; specificity 90%+). VP or LP shunt is definitive treatment. Gait responds best; cognitive improvement variable. Do not confuse with Alzheimer's — but overlap exists.",
    guideline: "iNPH Clinical Guidelines — Japanese Neurosurgical Society 2012 | International NPH Guidelines | AANS/CNS Hydrocephalus Section",
    ankiTags: ["Neuro::CSF::NPH", "Neuro::Hakim::Triad", "Neuro::TapTest", "Neuro::DESH", "Neuro::VPShunt", "Neuro::EvansIndex"]
  },

  {
    id: 24,
    answer: "Idiopathic Intracranial Hypertension",
    aliases: ["IIH", "Pseudotumour cerebri", "Benign intracranial hypertension", "Pseudotumor cerebri"],
    domain: "csf",
    tier: "intermediate",
    clues: [
      { type: "History",   icon: "🧾", text: "A 28-year-old obese woman presents with daily bifrontal/retro-orbital headaches for 4 months, worse in the morning and with Valsalva. She reports transient visual obscurations (seconds of vision greying) and pulsatile tinnitus." },
      { type: "Exam",      icon: "🔬", text: "BMI 38. Bilateral papilledema (Frisén Grade 3). CN VI palsy (false localising sign — right lateral rectus weakness). Visual fields: blind spot enlargement, nasal step defects on automated perimetry." },
      { type: "Imaging",   icon: "🧠", text: "MRI brain: empty sella, bilateral optic nerve sheath distension, flattening of posterior globes. MRV: bilateral transverse sinus stenosis (commonly seen in IIH). No mass, no hydrocephalus, no venous thrombosis." },
      { type: "Labs",      icon: "🧪", text: "LP: opening pressure 38 cmH₂O. CSF normal composition (no cells, normal glucose/protein). Tetracycline/minocycline use confirmed — excluded. Thyroid, cortisol normal." },
      { type: "Pathology", icon: "⚕️", text: "Management ladder: weight loss + acetazolamide 500 mg BD (first-line). Visual field deterioration: CSF-diverting shunt (LP shunt preferred) or optic nerve sheath fenestration. Dural venous sinus stenting emerging." }
    ],
    explanation: "IIH: raised ICP with no causative lesion. Predominantly obese young women. Modified Dandy criteria: symptoms of raised ICP, papilledema, normal neuroimaging (except empty sella/ON changes), elevated opening pressure (>25 cmH₂O), normal CSF. Risk of permanent visual loss if untreated. Weight loss of 15% induces remission. LP shunt vs ONSF vs dural sinus stenting for refractory cases.",
    guideline: "Revised Diagnostic Criteria for IIH (Friedman et al. 2013) | IIH UK Treatment Guidelines | AANS/CNS CSF Guidelines",
    ankiTags: ["Neuro::CSF::IIH", "Neuro::Papilledema::Frisen", "Neuro::EmptySella", "Neuro::Acetazolamide", "Neuro::CN6::FalseLocalising"]
  },

  // ── DOMAIN: NEUROCRITICAL CARE ────────────────────────────────────────────

  {
    id: 25,
    answer: "Malignant MCA Infarction",
    aliases: ["Malignant middle cerebral artery infarction", "Space-occupying MCA stroke", "Decompressive hemicraniectomy"],
    domain: "neurocrit",
    tier: "advanced",
    clues: [
      { type: "History",   icon: "🧾", text: "A 48-year-old man with atrial fibrillation (not anticoagulated) presents with sudden onset right hemiplegia and aphasia (NIHSS 22). CT angiogram at 2 hours: left ICA occlusion, unsuccessful mechanical thrombectomy." },
      { type: "Exam",      icon: "🔬", text: "GCS drops from 9 to 6 at 36 hours. Left pupil dilating (ipsilateral III nerve compression). Right hemiplegia complete. Gaze deviation left. Worsening Cushing's response." },
      { type: "Imaging",   icon: "🧠", text: "CT at 36 hours: complete left MCA territory infarction (>50% MCA territory). Significant oedema with 9 mm midline shift. Uncal herniation commencing. Effacement of basal cisterns." },
      { type: "Labs",      icon: "🧪", text: "INR 1.1. Platelets 210. No anticoagulation. ICP monitoring: ICP 38 mmHg despite maximal medical management (mannitol, hypertonic saline, 30° head elevation, normocapnia)." },
      { type: "Intraop",   icon: "⚕️", text: "Left decompressive hemicraniectomy (bone flap >12 cm): immediate ICP reduction to 12 mmHg. Brain herniates through craniectomy — allows expansion. Bone stored in bone bank. Cranioplasty planned at 3 months." }
    ],
    explanation: "Malignant MCA infarction: oedema peaks D2–5 causing fatal herniation in 80% without intervention. DESTINY/HAMLET/DECIMAL trials: hemicraniectomy within 48h in patients ≤60yo reduces mortality (78% → 29%) but increases severely disabled survivors — informed consent crucial (DESTINY-II showed benefit even >60). Timing critical: before herniation establishes.",
    guideline: "DESTINY/HAMLET/DECIMAL Trials | AHA/ASA Stroke Guidelines 2021 | Neurocritical Care Society Malignant MCA Guidelines",
    ankiTags: ["Neuro::Vascular::MalignantMCA", "Neuro::Hemicraniectomy", "Neuro::DESTINY::Trial", "Neuro::ICP::Management", "Neuro::Herniation"]
  },

  // ── DOMAIN: CSF (extra) ───────────────────────────────────────────────────

  {
    id: 26,
    answer: "Chiari I Malformation",
    aliases: ["Chiari malformation", "Chiari type 1", "Tonsillar herniation", "CM1"],
    domain: "csf",
    tier: "core",
    clues: [
      { type: "History",   icon: "🧾", text: "A 28-year-old woman reports recurring severe headaches at the suboccipital region triggered by coughing, sneezing, and Valsalva manoeuvres. She also notes progressive bilateral arm numbness and hand clumsiness over 6 months." },
      { type: "Exam",      icon: "🔬", text: "Cape-like dissociated sensory loss — bilateral upper limb pain/temperature loss with preserved light touch and proprioception. Mild lower limb hyperreflexia. Downbeat nystagmus on down-gaze." },
      { type: "Imaging",   icon: "🧠", text: "MRI brain/cervical spine: cerebellar tonsils >8 mm below the foramen magnum. Obex below C1. Associated central syrinx extending C3–C7 (10 mm diameter). No hydrocephalus. No mass." },
      { type: "Labs",      icon: "🧪", text: "Cine MRI CSF flow: restricted CSF flow at the foramen magnum in both systole and diastole. Full spine MRI: syrinx confirmed, no tethered cord." },
      { type: "Intraop",   icon: "⚕️", text: "Posterior fossa decompression: suboccipital craniectomy, C1 laminectomy, and duraplasty. Intraoperative ultrasound confirms CSF pulsation restored. Syrinx expected to collapse over 6–12 months." }
    ],
    explanation: "Chiari I: tonsillar descent ≥5 mm below FM (symptomatic threshold). Valsalva headache is classic. Syringomyelia in ~50% — cape distribution dissociated sensory loss (spinothalamic, anterior horn). Posterior fossa decompression (craniectomy ± C1 laminectomy ± duraplasty) restores CSF flow; syrinx resolves without direct treatment. Asymptomatic CM1 can be observed.",
    guideline: "AANS/CNS Chiari Malformation Guidelines | Neurosurgery 2011 Chiari Consensus | Park–Mazzola Classification",
    ankiTags: ["Neuro::CSF::Chiari1", "Neuro::Syringomyelia", "Neuro::ValsalvaHeadache", "Neuro::ForamenMagnum", "Neuro::Duraplasty"]
  },

];

// ─── HELPER: Get cases by domain ─────────────────────────────────────────────
function getCasesByDomain(domain) {
  return CASES.filter(c => c.domain === domain);
}

// ─── HELPER: Get daily case (deterministic by date) ───────────────────────────
function getDailyCase() {
  const epoch = new Date('2025-01-01');
  const today = new Date();
  const daysSince = Math.floor((today - epoch) / (1000 * 60 * 60 * 24));
  return CASES[daysSince % CASES.length];
}

// ─── HELPER: Get case by id ────────────────────────────────────────────────
function getCaseById(id) {
  return CASES.find(c => c.id === id);
}

// ─── EXPORTS (for module environments) ────────────────────────────────────
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CASES, DOMAINS, getCasesByDomain, getDailyCase, getCaseById };
}
