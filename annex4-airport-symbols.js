(() => {
    const annex4Url = "https://www.bazl.admin.ch/dam/en/sd-web/CcuOn5AWypLl/icao_annex_4_aeronauticalcharts.pdf";
    const annex4ListingUrl = "https://store.icao.int/en/annex-4-aeronautical-charts";
    const amendment63Url = "https://store.icao.int/en/annex-4-aeronautical-charts-amendment-no-63-dated-3-8-26";
    const doc8697Url = "https://store.icao.int/en/aeronautical-chart-manual-doc-8697";
    const doc8697AmendmentUrl = "https://store.icao.int/en/aeronautical-chart-manual-doc-8697-amendment-no-1-dated-11-12-20";
    const chartInk = "#20242b";
    const aerodromePlate = "Symbols for Aerodrome/Heliport Charts";
    const obstaclePlate = "Symbols for Aerodrome Obstacle Charts — Types A, B and C";
    const versionNote = "Annex 4, 11th Edition (July 2009); accessible FOCA copy is marked as an in-progress consolidation and its amendment record indicates Amendment 62. ICAO lists Amendments 57–63; Amendment 63 text was not independently inspected.";
    const limitation = "Simplified study redrawing, not approved chart artwork. The accessible base copy is not a current consolidated edition; Amendment 63 and the full Doc 8697 text were not checked. Not for operational use.";

    const entries = [
        {
            number: 145,
            name: "Hard surface runway",
            plate: aerodromePlate,
            section: "13.6.1(d)",
            ink: chartInk,
            note: "The filled runway plan symbol identifies a hard-surface runway.",
            art: `<rect x="35" y="35" width="90" height="30" rx="1" fill="${chartInk}"/>`
        },
        {
            number: 146,
            name: "Pierced steel plank or steel mesh runway",
            plate: aerodromePlate,
            section: "13.6.1(d)",
            ink: chartInk,
            note: "A patterned runway symbol distinguishes pierced-steel or mesh construction.",
            art: `<rect x="35" y="35" width="90" height="30" fill="none" stroke="${chartInk}" stroke-width="3"/><path d="M35 42h90m-90 8h90m-90 8h90M45 35v30m12-30v30m12-30v30m12-30v30m12-30v30m12-30v30m12-30v30" stroke="${chartInk}" stroke-width="1.5"/>`
        },
        {
            number: 147,
            name: "Unpaved runway",
            plate: aerodromePlate,
            section: "13.6.1(d)",
            ink: chartInk,
            note: "A stippled runway symbol distinguishes an unpaved runway.",
            art: `<defs><pattern id="unpaved-runway-dots" width="7" height="6" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.1" fill="${chartInk}"/><circle cx="5" cy="5" r="1" fill="${chartInk}"/></pattern></defs><rect x="35" y="35" width="90" height="30" fill="url(#unpaved-runway-dots)"/>`
        },
        {
            number: 148,
            name: "Stopway",
            plate: aerodromePlate,
            section: "13.6.1(d)",
            ink: chartInk,
            note: "The stopway symbol is labelled SWY and shown as an outlined area at the runway end.",
            art: `<text x="25" y="55" font-family="Arial,sans-serif" font-size="12" fill="${chartInk}">SWY</text><path d="M61 37h67v26H61z" fill="none" stroke="${chartInk}" stroke-width="2"/><path d="M111 37h17v26h-17z" fill="${chartInk}"/>`
        },
        {
            number: 149,
            name: "Taxiways and parking areas",
            plate: aerodromePlate,
            section: "13.6.1(e), (g)",
            ink: chartInk,
            note: "The outlined taxiway pattern and hatched parking area distinguish movement and parking surfaces.",
            art: `<path d="M28 35h75v15H28zM65 50v13h62V50" fill="none" stroke="${chartInk}" stroke-width="2"/><path d="M69 54h54v14H69z" fill="#d1d5db" stroke="${chartInk}" stroke-width="1"/><path d="m70 66 12-12m0 12 12-12m0 12 12-12m0 12 12-12" stroke="${chartInk}" stroke-width="1"/>`
        },
        {
            number: 150,
            name: "Helicopter alighting area on an aerodrome",
            plate: aerodromePlate,
            section: "13.6.3(b)",
            ink: chartInk,
            note: "The H within a circle identifies a helicopter alighting area.",
            art: `<circle cx="80" cy="50" r="28" fill="none" stroke="${chartInk}" stroke-width="3"/><text x="80" y="59" text-anchor="middle" font-family="Arial,sans-serif" font-size="28" font-weight="700" fill="${chartInk}">H</text>`
        },
        {
            number: 151,
            name: "Aerodrome reference point",
            plate: aerodromePlate,
            section: "13.6.1(a)",
            ink: chartInk,
            note: "The point symbol marks the aerodrome reference point (ARP).",
            art: `<circle cx="80" cy="50" r="8" fill="none" stroke="${chartInk}" stroke-width="2"/><path d="M80 27v15m0 16v15M57 50h15m16 0h15" stroke="${chartInk}" stroke-width="2"/><circle cx="80" cy="50" r="2.5" fill="${chartInk}"/>`
        },
        {
            number: 152,
            name: "VOR check-point",
            plate: aerodromePlate,
            section: "13.6.1(r)",
            ink: chartInk,
            note: "A chart symbol identifies the designated VOR checkpoint.",
            art: `<path d="M49 50h49m-49 0 11-7m-11 7 11 7" fill="none" stroke="${chartInk}" stroke-width="2.5"/><circle cx="106" cy="50" r="8" fill="none" stroke="${chartInk}" stroke-width="2"/><circle cx="106" cy="50" r="2" fill="${chartInk}"/>`
        },
        {
            number: 153,
            name: "Runway visual range (RVR) observation site",
            plate: aerodromePlate,
            section: "13.6.1(l)",
            ink: chartInk,
            note: "The outlined triangle marks the runway visual range observation site.",
            art: `<path d="M57 35 112 50 57 65z" fill="none" stroke="${chartInk}" stroke-width="2.5"/>`
        },
        {
            number: 154,
            name: "Point light",
            plate: aerodromePlate,
            section: "13.6.1(m)",
            ink: chartInk,
            note: "A filled dot represents an individual point light.",
            art: `<circle cx="80" cy="50" r="6" fill="${chartInk}"/>`
        },
        {
            number: 155,
            name: "Obstacle light",
            plate: aerodromePlate,
            section: "13.6.1(q)",
            ink: chartInk,
            note: "The starburst symbol identifies an obstacle light.",
            art: `<path d="M80 30v40m-20-20h40m-34-14 28 28m0-28L66 64" stroke="${chartInk}" stroke-width="2"/><circle cx="80" cy="50" r="2.5" fill="${chartInk}"/>`
        },
        {
            number: 156,
            name: "Landing direction indicator (lighted)",
            plate: aerodromePlate,
            section: "13.6.1(m)",
            ink: chartInk,
            note: "The T-shaped indicator with rays identifies a lighted landing direction indicator.",
            art: `<path d="M80 35v40M67 48h26" stroke="${chartInk}" stroke-width="3"/><path d="M70 31l-5-5m25 5 5-5m-15 5V18m-15 11-7-2m37 2 7-2" stroke="${chartInk}" stroke-width="2"/><circle cx="80" cy="34" r="3" fill="${chartInk}"/>`
        },
        {
            number: 157,
            name: "Landing direction indicator (unlighted)",
            plate: aerodromePlate,
            section: "13.6.1(m)",
            ink: chartInk,
            note: "A simple T-shaped symbol identifies an unlighted landing direction indicator.",
            art: `<path d="M80 32v44M66 45h28" stroke="${chartInk}" stroke-width="3"/>`
        },
        {
            number: 158,
            name: "Stop bar",
            plate: aerodromePlate,
            section: "13.6.1(g)",
            ink: chartInk,
            note: "Three dots represent a stop bar.",
            art: `<circle cx="64" cy="50" r="3" fill="${chartInk}"/><circle cx="80" cy="50" r="3" fill="${chartInk}"/><circle cx="96" cy="50" r="3" fill="${chartInk}"/>`
        },
        {
            number: 159,
            name: "Runway-holding position",
            plate: aerodromePlate,
            section: "13.6.1(g)",
            ink: chartInk,
            note: "Patterns A and B identify runway-holding positions.",
            art: `<text x="25" y="43" font-family="Arial,sans-serif" font-size="10" fill="${chartInk}">A</text><path d="M45 37h74m-74 5h74m-74 5h74m-74 5h74" stroke="${chartInk}" stroke-width="1.5"/><text x="25" y="69" font-family="Arial,sans-serif" font-size="10" fill="${chartInk}">B</text><path d="M45 65h74m-74 5h74m-61-8v11m48-11v11" stroke="${chartInk}" stroke-width="1.5"/>`
        },
        {
            number: 160,
            name: "Intermediate holding position",
            plate: aerodromePlate,
            section: "13.6.1(g)",
            ink: chartInk,
            note: "The dashed line marks an intermediate holding position.",
            art: `<path d="M40 50h80" stroke="${chartInk}" stroke-width="2" stroke-dasharray="7 5"/>`
        },
        {
            number: 161,
            name: "Hot spot",
            plate: aerodromePlate,
            section: "13.6.1(h)",
            note: "An unfilled circle marks a designated aerodrome hot spot.",
            art: `<circle cx="80" cy="50" r="19" fill="none" stroke="${chartInk}" stroke-width="2"/>`
        },
        {
            number: 162,
            name: "Tree or shrub",
            plate: obstaclePlate,
            section: "3.8.4.1(e), 4.9",
            ink: chartInk,
            note: "The asterisk-like plan symbol represents a tree or shrub.",
            art: `<path d="M80 36v28m-14-14h28m-24-10 20 20m0-20L70 60" stroke="${chartInk}" stroke-width="2"/>`
        },
        {
            number: 163,
            name: "Pole, tower, spire, antenna, etc.",
            plate: obstaclePlate,
            section: "3.8.4.1(e), 4.9",
            ink: chartInk,
            note: "A small circle represents a pole, tower, spire, antenna, or similar structure.",
            art: `<circle cx="80" cy="50" r="5" fill="none" stroke="${chartInk}" stroke-width="2"/><circle cx="80" cy="50" r="1.5" fill="${chartInk}"/>`
        },
        {
            number: 164,
            name: "Building or large structure",
            plate: obstaclePlate,
            section: "3.8.4.1(e), 4.9",
            ink: chartInk,
            note: "A filled rectangle represents a building or large structure.",
            art: `<rect x="72" y="42" width="16" height="16" fill="${chartInk}"/>`
        },
        {
            number: 165,
            name: "Railroad",
            plate: obstaclePlate,
            section: "3.8.4.1(e), 4.9",
            ink: chartInk,
            note: "A rail line with crossbars represents a railroad.",
            art: `<path d="M38 50h84m-58-5v10m28-5v10m28-10v10" stroke="${chartInk}" stroke-width="2"/>`
        },
        {
            number: 166,
            name: "Transmission line or overhead cable",
            plate: obstaclePlate,
            section: "3.8.4.1(e), 4.9",
            ink: chartInk,
            note: "Repeated T-shaped supports represent a transmission line or overhead cable.",
            art: `<path d="M37 50h86M58 39v22m-8-16h16m27-6v22m-8-16h16" stroke="${chartInk}" stroke-width="2"/>`
        },
        {
            number: 167,
            name: "Terrain penetrating obstacle plane",
            plate: obstaclePlate,
            section: "3.8.4.1(e)",
            ink: chartInk,
            note: "Plan and profile symbols show terrain penetrating the obstacle plane.",
            art: `<path d="M24 50c8-16 20-10 28-17 9-7 19 2 26 1 11-2 14 9 20 12 10 4 11 13 3 20-10 9-23 4-32 8-12 5-24-1-32-5-10-5-20-8-13-19z" fill="none" stroke="${chartInk}" stroke-width="2"/><path d="M105 69h36m-35-2q8-2 11-10t9-1q6 4 8-5t8-3" fill="none" stroke="${chartInk}" stroke-width="2"/><path d="M107 63h34" stroke="${chartInk}" stroke-width="1.5" stroke-dasharray="3 2"/>`
        },
        {
            number: 168,
            name: "Escarpment",
            plate: obstaclePlate,
            section: "3.8.4.1(e), 4.9",
            ink: chartInk,
            note: "A row of short vertical hachures represents an escarpment.",
            art: `<path d="M42 44v14m9-14v14m9-14v14m9-14v14m9-14v14m9-14v14m9-14v14m9-14v14m9-14v14m9-14v14" stroke="${chartInk}" stroke-width="2"/>`
        },
        {
            number: 170,
            name: "Clearway",
            plate: obstaclePlate,
            section: "3.8.4.1(b)",
            ink: chartInk,
            note: "A dashed rectangular outline identifies the clearway beyond the runway end.",
            art: `<path d="M43 31v38m0-29h87m-87 20h87m0-20v20" fill="none" stroke="${chartInk}" stroke-width="2.5" stroke-dasharray="7 4"/><path d="M43 31v38m0-29h12m-12 20h12" stroke="${chartInk}" stroke-width="2.5"/>`
        }
    ];

    function makeCard(entry) {
        const pageUrl = `${annex4Url}#page=154`;
        const chapterCitation = `Annex 4 ${entry.section}`;
        const references = [
            {
                document: "ICAO Annex 4 — Appendix 2 symbol plate",
                url: pageUrl,
                version: versionNote,
                citation: `Symbol ${entry.number}: ${entry.name}; Appendix 2, APP 2-20, ${entry.plate}`,
                comment: `The symbol number and name are listed on the referenced plate. The SVG is a simplified study redraw.`
            },
            {
                document: "ICAO Annex 4 — official listing",
                url: annex4ListingUrl,
                version: "ICAO catalogue metadata; Amendment 63 is dated 3 August 2026",
                citation: "Publication listing; current consolidated Annex 4 text not inspected",
                comment: "The Amendment 63 text was not independently inspected, so current conformity is not established."
            },
            {
                document: "ICAO Annex 4 — Amendment 63 listing",
                url: amendment63Url,
                version: "Amendment 63 dated 3 August 2026; catalogue metadata",
                citation: "Publication metadata only",
                comment: "Amendment text was not independently inspected."
            },
            {
                document: "ICAO Doc 8697 — Aeronautical Chart Manual",
                url: doc8697Url,
                version: "3rd Edition (2016), Corrigendum 1; Amendment 1 dated 11 December 2020",
                citation: "Official publication listing; full manual text not independently inspected",
                comment: "No provision-level Doc 8697 conformity claim is made."
            },
            {
                document: "ICAO Doc 8697 — Amendment 1 listing",
                url: doc8697AmendmentUrl,
                version: "Amendment 1 dated 11 December 2020; catalogue metadata",
                citation: "Publication metadata only",
                comment: "Amendment text was not independently inspected."
            }
        ];

        return {
            id: `ICAO-APP2-${entry.number}`,
            name: entry.name,
            category: "aerodromeChart",
            code: `APP2-${entry.number}`,
            svg: `<svg viewBox="0 0 160 100" class="w-64 h-36" role="img" aria-label="${entry.name}; ICAO Annex 4 Appendix 2 symbol ${entry.number}"><rect x="3" y="3" width="154" height="94" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><g color="${entry.ink}" fill="none" stroke="${entry.ink}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${entry.art}</g></svg>`,
            def: entry.name,
            limits: `Annex 4 Appendix 2 symbol ${entry.number}; APP 2-20`,
            convention: `${entry.plate}; monochrome black symbol as shown on the source plate.`,
            sop: `Study note: ${entry.note}`,
            references,
            complianceComment: `Found in ICAO Annex 4 Appendix 2, APP 2-20 (PDF page 154), symbol ${entry.number}, under “${entry.plate}”. Chart context: ${chapterCitation}. ${limitation}`
        };
    }

    window.symbolCards = (window.symbolCards || []).concat(entries.map(makeCard));
})();
