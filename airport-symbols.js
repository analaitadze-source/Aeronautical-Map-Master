(() => {
    const annex14Url = "https://store.icao.int/en/annex-14-aerodromes";
    const annex14SourceUrl = "https://www.bazl.admin.ch/dam/de/sd-web/PzvzqQpFptul/icao_annex_14_aerodromesvolumei-aerodromedesignandoperations.pdf";
    const surface = "#3f4750";

    const entries = [
        {
            name: "Runway designation marking",
            section: "5.2.2",
            group: "Runway marking",
            colour: "White",
            note: "Runway numbers identify the magnetic direction of the runway.",
            art: `<rect x="17" y="23" width="126" height="54" rx="8" fill="${surface}"/><text x="80" y="60" text-anchor="middle" font-size="29" font-weight="700" fill="#ffffff">09</text>`
        },
        {
            name: "Runway centre line marking",
            section: "5.2.3",
            group: "Runway marking",
            colour: "White",
            note: "A broken white line marks the runway centre.",
            art: `<rect x="17" y="23" width="126" height="54" rx="8" fill="${surface}"/><path d="M27 50h20m12 0h20m12 0h20m12 0h20" stroke="#ffffff" stroke-width="4"/>`
        },
        {
            name: "Runway threshold marking",
            section: "5.2.4",
            group: "Runway marking",
            colour: "White",
            note: "Longitudinal white bars identify the runway threshold.",
            art: `<rect x="17" y="23" width="126" height="54" rx="8" fill="${surface}"/><path d="M36 31v38m10-38v38m10-38v38m10-38v38m10-38v38m10-38v38m10-38v38m10-38v38m10-38v38" stroke="#ffffff" stroke-width="4"/>`
        },
        {
            name: "Runway aiming point marking",
            section: "5.2.5",
            group: "Runway marking",
            colour: "White",
            note: "Paired broad white rectangles provide the aiming point.",
            art: `<rect x="17" y="23" width="126" height="54" rx="8" fill="${surface}"/><rect x="37" y="34" width="13" height="32" fill="#ffffff"/><rect x="110" y="34" width="13" height="32" fill="#ffffff"/>`
        },
        {
            name: "Touchdown zone marking",
            section: "5.2.6",
            group: "Runway marking",
            colour: "White",
            note: "Paired white bars mark touchdown zone distances.",
            art: `<rect x="17" y="23" width="126" height="54" rx="8" fill="${surface}"/><path d="M34 33h12v10H34zm0 20h12v10H34zm68-20h12v10h-12zm0 20h12v10h-12z" fill="#ffffff"/><path d="M53 40h10v16H53zm44 0h10v16H97z" fill="#ffffff"/>`
        },
        {
            name: "Runway side stripe marking",
            section: "5.2.7",
            group: "Runway marking",
            colour: "White",
            note: "Continuous white side stripes delineate runway edges.",
            art: `<rect x="17" y="23" width="126" height="54" rx="8" fill="${surface}"/><path d="M25 31h110M25 69h110" stroke="#ffffff" stroke-width="3"/>`
        },
        {
            name: "Taxiway centre line marking",
            section: "5.2.8",
            group: "Taxiway marking",
            colour: "Yellow",
            note: "A continuous yellow line guides aircraft along a taxiway.",
            art: `<path d="M22 75V51Q22 27 47 27h66q25 0 25 24v24" fill="none" stroke="${surface}" stroke-width="22"/><path d="M22 75V51Q22 27 47 27h66q25 0 25 24v24" fill="none" stroke="#ffdc00" stroke-width="3"/>`
        },
        {
            name: "Runway turn pad marking",
            section: "5.2.9",
            group: "Runway marking",
            colour: "Yellow",
            note: "The yellow turn-pad centre line guides a 180-degree runway turn.",
            art: `<rect x="17" y="23" width="126" height="54" rx="8" fill="${surface}"/><path d="M34 63h70q20 0 20-16t-20-16H49m0 0 9-8m-9 8 9 8" fill="none" stroke="#ffdc00" stroke-width="3"/>`
        },
        {
            name: "Taxiway edge marking",
            section: "Not specified as an Annex 14 surface marking",
            group: "Taxiway marking",
            colour: "Yellow",
            note: "Excluded from the selected deck: Annex 14 specifies taxiway edge lights and markers, but not this surface-marking symbol.",
            art: `<rect x="17" y="23" width="126" height="54" rx="8" fill="${surface}"/><path d="M28 34h104v32H28z" fill="none" stroke="#ffdc00" stroke-width="3"/>`
        },
        {
            name: "Runway-holding position marking",
            section: "5.2.10",
            group: "Holding marking",
            colour: "Yellow",
            note: "The four-line pattern identifies a runway-holding position.",
            art: `<rect x="17" y="23" width="126" height="54" rx="8" fill="${surface}"/><path d="M36 31v38m7-38v38" stroke="#ffdc00" stroke-width="3"/><path d="M103 31v38m7-38v38" stroke="#ffdc00" stroke-width="3" stroke-dasharray="4 4"/>`
        },
        {
            name: "Intermediate holding position marking",
            section: "5.2.11",
            group: "Holding marking",
            colour: "Yellow",
            note: "A broken yellow line marks an intermediate holding position.",
            art: `<rect x="17" y="23" width="126" height="54" rx="8" fill="${surface}"/><path d="M29 50h18m8 0h18m8 0h18m8 0h18" stroke="#ffdc00" stroke-width="4" stroke-dasharray="7 4"/>`
        },
        {
            name: "VOR aerodrome checkpoint marking",
            section: "5.2.13",
            group: "Aerodrome marking",
            colour: "Yellow",
            note: "A yellow checkpoint marking identifies the VOR check position.",
            art: `<rect x="17" y="23" width="126" height="54" rx="8" fill="${surface}"/><circle cx="80" cy="50" r="20" fill="none" stroke="#ffdc00" stroke-width="3"/><path d="M80 27v46M57 50h46" stroke="#ffdc00" stroke-width="2"/><text x="80" y="54" text-anchor="middle" font-size="9" font-weight="700" fill="#ffffff">VOR</text>`
        },
        {
            name: "Aircraft stand lead-in line",
            section: "5.2.13",
            group: "Apron marking",
            colour: "Yellow",
            note: "A yellow lead-in line guides an aircraft to its stand.",
            art: `<rect x="17" y="23" width="126" height="54" rx="8" fill="${surface}"/><path d="M30 68V50Q30 34 48 34h44q18 0 18 16v14m0 0-7-8m7 8 7-8" fill="none" stroke="#ffdc00" stroke-width="3"/>`
        },
        {
            name: "Aircraft stand identification marking",
            section: "5.2.14",
            group: "Apron marking",
            colour: "Yellow",
            note: "A yellow stand number identifies the aircraft parking position.",
            art: `<rect x="17" y="23" width="126" height="54" rx="8" fill="${surface}"/><path d="M40 68V48h80v20" fill="none" stroke="#ffdc00" stroke-width="3"/><text x="80" y="43" text-anchor="middle" font-size="18" font-weight="700" fill="#ffdc00">12</text>`
        },
        {
            name: "Road-holding position marking",
            section: "5.2.15",
            group: "Road marking",
            colour: "White",
            note: "A white stop line and road legend identify the holding position.",
            art: `<rect x="17" y="23" width="126" height="54" rx="8" fill="#555d66"/><path d="M30 64h100" stroke="#ffffff" stroke-width="4"/><text x="80" y="52" text-anchor="middle" font-size="16" font-weight="700" fill="#ffffff">STOP</text>`
        },
        {
            name: "Mandatory instruction surface marking",
            section: "5.2.16",
            group: "Surface marking",
            colour: "White legend on red",
            note: "A red marking with white legend denotes a mandatory instruction.",
            art: `<rect x="25" y="31" width="110" height="38" rx="2" fill="#c62828"/><text x="80" y="55" text-anchor="middle" font-size="13" font-weight="700" fill="#ffffff">RWY 09-27</text>`
        },
        {
            name: "Information surface marking",
            section: "5.2.17",
            group: "Surface marking",
            colour: "Black legend on yellow",
            note: "A yellow marking with black legend provides taxiway information.",
            art: `<rect x="25" y="31" width="110" height="38" rx="2" fill="#ffdc00"/><text x="80" y="55" text-anchor="middle" font-size="14" font-weight="700" fill="#111111">A1  →</text>`
        },
        {
            name: "Runway closure marking",
            section: "5.2 (runway markings)",
            group: "Runway marking",
            colour: "White",
            note: "A white cross marks a closed runway.",
            art: `<rect x="17" y="23" width="126" height="54" rx="8" fill="${surface}"/><path d="m51 33 58 34m0-34L51 67" stroke="#ffffff" stroke-width="8"/>`
        },
        {
            name: "Taxiway closure marking",
            section: "5.2 (taxiway markings)",
            group: "Taxiway marking",
            colour: "Yellow",
            note: "A yellow cross marks a closed taxiway.",
            art: `<rect x="17" y="23" width="126" height="54" rx="8" fill="${surface}"/><path d="m51 33 58 34m0-34L51 67" stroke="#ffdc00" stroke-width="8"/>`
        },
        {
            name: "Runway-holding position sign",
            section: "5.4.2",
            group: "Mandatory instruction sign",
            colour: "White legend on red",
            note: "The red sign with white runway designators indicates a mandatory hold.",
            art: `<rect x="19" y="30" width="122" height="40" rx="2" fill="#c62828"/><text x="80" y="56" text-anchor="middle" font-size="17" font-weight="700" fill="#ffffff">09-27</text>`
        },
        {
            name: "No-entry sign",
            section: "5.4.2",
            group: "Mandatory instruction sign",
            colour: "White legend on red",
            note: "The red mandatory-instruction sign carries the white NO ENTRY legend.",
            art: `<rect x="18" y="30" width="124" height="40" rx="2" fill="#c62828"/><text x="80" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#ffffff">NO ENTRY</text>`
        },
        {
            name: "ILS critical-area holding sign",
            section: "5.4.2",
            group: "Mandatory instruction sign",
            colour: "White legend on red",
            note: "Red and white mandatory sign text identifies an ILS critical-area hold.",
            art: `<rect x="18" y="29" width="124" height="42" rx="2" fill="#c62828"/><text x="80" y="47" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">ILS</text><text x="80" y="61" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">CAT II/III</text>`
        },
        {
            name: "Runway designation sign",
            section: "5.4.2",
            group: "Mandatory instruction sign",
            colour: "White legend on red",
            note: "The red runway designation sign uses white runway numbers.",
            art: `<rect x="28" y="28" width="104" height="44" rx="2" fill="#c62828"/><text x="80" y="58" text-anchor="middle" font-size="23" font-weight="700" fill="#ffffff">27</text>`
        },
        {
            name: "Taxiway location sign",
            section: "5.4.3",
            group: "Location sign",
            colour: "Yellow legend on black",
            note: "A black sign with yellow taxiway designation identifies the current taxiway.",
            art: `<rect x="38" y="27" width="84" height="46" rx="2" fill="#111111"/><text x="80" y="58" text-anchor="middle" font-size="25" font-weight="700" fill="#ffdc00">B</text>`
        },
        {
            name: "Runway location sign",
            section: "5.4.3",
            group: "Location sign",
            colour: "Yellow legend on black",
            note: "A black sign with yellow designators identifies the runway occupied or entered.",
            art: `<rect x="19" y="30" width="122" height="40" rx="2" fill="#111111"/><text x="80" y="56" text-anchor="middle" font-size="16" font-weight="700" fill="#ffdc00">09-27</text>`
        },
        {
            name: "Taxiway direction sign",
            section: "5.4.3",
            group: "Direction sign",
            colour: "Black legend on yellow",
            note: "A yellow sign with black arrow and taxiway letter indicates direction.",
            art: `<rect x="22" y="30" width="116" height="40" rx="2" fill="#ffdc00"/><path d="M43 50h45m0 0-9-8m9 8-9 8" stroke="#111111" stroke-width="3"/><text x="112" y="57" text-anchor="middle" font-size="17" font-weight="700" fill="#111111">A</text>`
        },
        {
            name: "Taxiway destination sign",
            section: "5.4.3",
            group: "Destination sign",
            colour: "Black legend on yellow",
            note: "A yellow destination sign uses black legend and directional arrow.",
            art: `<rect x="17" y="30" width="126" height="40" rx="2" fill="#ffdc00"/><text x="76" y="55" text-anchor="middle" font-size="13" font-weight="700" fill="#111111">GATES</text><path d="M104 50h23m0 0-8-7m8 7-8 7" stroke="#111111" stroke-width="3"/>`
        },
        {
            name: "Runway exit sign",
            section: "5.4.3",
            group: "Direction sign",
            colour: "Black legend on yellow",
            note: "The yellow sign and black arrow identify a runway exit taxiway.",
            art: `<rect x="22" y="30" width="116" height="40" rx="2" fill="#ffdc00"/><path d="M48 50h36m-36 0 9-8m-9 8 9 8" fill="none" stroke="#111111" stroke-width="3"/><text x="109" y="56" text-anchor="middle" font-size="17" font-weight="700" fill="#111111">A</text>`
        },
        {
            name: "Taxiway intersection direction sign",
            section: "5.4.3",
            group: "Direction sign",
            colour: "Black legend on yellow",
            note: "Arrows and taxiway letters on yellow indicate routes at an intersection.",
            art: `<rect x="19" y="28" width="122" height="44" rx="2" fill="#ffdc00"/><text x="51" y="56" text-anchor="middle" font-size="13" font-weight="700" fill="#111111">← A</text><text x="108" y="56" text-anchor="middle" font-size="13" font-weight="700" fill="#111111">B →</text><path d="M80 35v25m0 0-7-7m7 7 7-7" stroke="#111111" stroke-width="2"/>`
        },
        {
            name: "Runway vacated sign",
            section: "5.4.3",
            group: "Information sign",
            colour: "Yellow legend on black",
            note: "A black location sign with yellow legend marks the runway-vacated point.",
            art: `<rect x="21" y="30" width="118" height="40" rx="2" fill="#111111"/><text x="80" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#ffdc00">RWY VACATED</text>`
        },
        {
            name: "Aircraft stand identification sign",
            section: "5.4.3",
            group: "Location sign",
            colour: "Yellow legend on black",
            note: "A black location sign with yellow stand number identifies a parking stand.",
            art: `<rect x="28" y="28" width="104" height="44" rx="2" fill="#111111"/><text x="80" y="57" text-anchor="middle" font-size="19" font-weight="700" fill="#ffdc00">STAND 12</text>`
        },
        {
            name: "Road-holding position sign",
            section: "5.4.6",
            group: "Road-holding sign",
            colour: "White legend on red",
            note: "A red and white road-holding sign warns vehicle traffic at an operational area.",
            art: `<rect x="21" y="30" width="118" height="40" rx="2" fill="#c62828"/><text x="80" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#ffffff">RWY</text>`
        },
        {
            name: "Runway distance-remaining sign",
            section: "5.4.3",
            group: "Information sign",
            colour: "White legend on black",
            note: "A black sign with white numeral indicates thousands of metres remaining.",
            art: `<rect x="37" y="27" width="86" height="46" rx="2" fill="#111111"/><text x="80" y="59" text-anchor="middle" font-size="27" font-weight="700" fill="#ffffff">3</text>`
        },
        {
            name: "VOR aerodrome checkpoint sign",
            section: "5.4.3",
            group: "Information sign",
            colour: "Black legend on yellow",
            note: "A yellow sign with black VOR legend identifies the VOR checkpoint marking.",
            art: `<rect x="30" y="28" width="100" height="44" rx="2" fill="#ffdc00"/><text x="80" y="57" text-anchor="middle" font-size="18" font-weight="700" fill="#111111">VOR</text>`
        },
        {
            name: "Approach lighting system",
            section: "5.3.4",
            group: "Aerodrome lighting",
            colour: "White",
            note: "A simplified white centre-line and crossbar example represents an approach-lighting system.",
            art: `<path d="M23 50h114" stroke="#9ca3af" stroke-width="2"/><path d="M32 46v8m15-8v8m15-8v8m15-8v8m15-8v8m15-8v8m15-8v8" stroke="#ffffff" stroke-width="4"/><path d="M77 37v26" stroke="#ffffff" stroke-width="3"/><path d="M28 50h100" stroke="#ffffff" stroke-width="1" stroke-dasharray="2 5"/>`
        },
        {
            name: "Runway edge lights",
            section: "5.3.9",
            group: "Aerodrome lighting",
            colour: "White, with yellow caution-zone lights where applicable",
            note: "Runway edge lights are white, with yellow in the applicable caution zone.",
            art: `<rect x="20" y="28" width="120" height="44" rx="8" fill="${surface}"/><path d="M27 32h106m-106 36h106" stroke="#ffffff" stroke-width="3"/><circle cx="111" cy="32" r="4" fill="#ffdc00"/><circle cx="123" cy="32" r="4" fill="#ffdc00"/><circle cx="111" cy="68" r="4" fill="#ffdc00"/><circle cx="123" cy="68" r="4" fill="#ffdc00"/>`
        },
        {
            name: "Runway threshold lights",
            section: "5.3.10",
            group: "Aerodrome lighting",
            colour: "Green in the approach direction",
            note: "Green threshold lights identify the runway threshold to arriving aircraft.",
            art: `<rect x="23" y="30" width="114" height="40" rx="8" fill="${surface}"/><circle cx="39" cy="50" r="5" fill="#00b050"/><circle cx="55" cy="50" r="5" fill="#00b050"/><circle cx="71" cy="50" r="5" fill="#00b050"/><circle cx="87" cy="50" r="5" fill="#00b050"/><circle cx="103" cy="50" r="5" fill="#00b050"/><circle cx="119" cy="50" r="5" fill="#00b050"/>`
        },
        {
            name: "Runway end lights",
            section: "5.3.11",
            group: "Aerodrome lighting",
            colour: "Red",
            note: "Red runway-end lights identify the end of the usable runway.",
            art: `<rect x="23" y="30" width="114" height="40" rx="8" fill="${surface}"/><circle cx="39" cy="50" r="5" fill="#e32636"/><circle cx="55" cy="50" r="5" fill="#e32636"/><circle cx="71" cy="50" r="5" fill="#e32636"/><circle cx="87" cy="50" r="5" fill="#e32636"/><circle cx="103" cy="50" r="5" fill="#e32636"/><circle cx="119" cy="50" r="5" fill="#e32636"/>`
        },
        {
            name: "Runway centre line lights",
            section: "5.3.12",
            group: "Aerodrome lighting",
            colour: "White, changing to red and white, then red near the end",
            note: "Centreline lights use white, then alternating red and white, then red near the runway end.",
            art: `<rect x="18" y="33" width="124" height="34" rx="7" fill="${surface}"/><circle cx="34" cy="50" r="5" fill="#ffffff"/><circle cx="54" cy="50" r="5" fill="#ffffff"/><circle cx="74" cy="50" r="5" fill="#ffffff"/><circle cx="94" cy="50" r="5" fill="#e32636"/><circle cx="110" cy="50" r="5" fill="#ffffff"/><circle cx="126" cy="50" r="5" fill="#e32636"/>`
        },
        {
            name: "Touchdown zone lights",
            section: "5.3.13",
            group: "Aerodrome lighting",
            colour: "White",
            note: "Paired white light bars identify the touchdown zone.",
            art: `<rect x="18" y="28" width="124" height="44" rx="7" fill="${surface}"/><path d="M35 38v10m0 4v10m20-24v10m0 4v10m50-24v10m0 4v10m20-24v10m0 4v10" stroke="#ffffff" stroke-width="5"/>`
        },
        {
            name: "Taxiway centre line lights",
            section: "5.3.17",
            group: "Aerodrome lighting",
            colour: "Green",
            note: "Green lights delineate the taxiway centre line.",
            art: `<path d="M23 70V50Q23 30 43 30h74q20 0 20 20v20" fill="none" stroke="${surface}" stroke-width="16"/><path d="M23 70V50Q23 30 43 30h74q20 0 20 20v20" fill="none" stroke="#00b050" stroke-width="5" stroke-dasharray="1 9" stroke-linecap="round"/>`
        },
        {
            name: "Taxiway edge lights",
            section: "5.3.18",
            group: "Aerodrome lighting",
            colour: "Blue",
            note: "Blue lights delineate taxiway edges.",
            art: `<rect x="21" y="28" width="118" height="44" rx="8" fill="${surface}"/><path d="M29 34h102v32H29z" fill="none" stroke="#1683ff" stroke-width="4" stroke-dasharray="1 9" stroke-linecap="round"/>`
        },
        {
            name: "Stop bar lights",
            section: "5.3.20",
            group: "Aerodrome lighting",
            colour: "Red",
            note: "A transverse row of red lights forms a stop bar.",
            art: `<rect x="20" y="28" width="120" height="44" rx="8" fill="${surface}"/><circle cx="52" cy="50" r="5" fill="#e32636"/><circle cx="66" cy="50" r="5" fill="#e32636"/><circle cx="80" cy="50" r="5" fill="#e32636"/><circle cx="94" cy="50" r="5" fill="#e32636"/><circle cx="108" cy="50" r="5" fill="#e32636"/>`
        },
        {
            name: "Runway guard lights",
            section: "5.3 (runway guard lights)",
            group: "Aerodrome lighting",
            colour: "Yellow",
            note: "Elevated or inset yellow lights warn of a runway-holding position.",
            art: `<path d="M28 72V51h104v21" fill="none" stroke="${surface}" stroke-width="10"/><circle cx="48" cy="43" r="8" fill="#ffdc00"/><circle cx="70" cy="43" r="8" fill="#ffdc00"/><circle cx="90" cy="43" r="8" fill="#ffdc00"/><circle cx="112" cy="43" r="8" fill="#ffdc00"/>`
        },
        {
            name: "Rapid exit taxiway indicator lights",
            section: "5.3 (rapid exit taxiway indicator lights)",
            group: "Aerodrome lighting",
            colour: "Yellow",
            note: "A sequence of yellow lights provides rapid-exit taxiway guidance.",
            art: `<rect x="18" y="32" width="124" height="36" rx="7" fill="${surface}"/><circle cx="35" cy="50" r="5" fill="#ffdc00"/><circle cx="54" cy="50" r="5" fill="#ffdc00"/><circle cx="73" cy="50" r="5" fill="#ffdc00"/><circle cx="92" cy="50" r="5" fill="#ffdc00"/><circle cx="111" cy="50" r="5" fill="#ffdc00"/><circle cx="130" cy="50" r="5" fill="#ffdc00"/>`
        },
        {
            name: "Precision approach path indicator (PAPI)",
            section: "5.3.5",
            group: "Aerodrome lighting",
            colour: "Red and white",
            note: "Four PAPI units show red and white indications relative to approach slope.",
            art: `<path d="M28 72h104" stroke="${surface}" stroke-width="5"/><rect x="36" y="43" width="16" height="19" rx="4" fill="#ffffff"/><rect x="61" y="43" width="16" height="19" rx="4" fill="#ffffff"/><rect x="86" y="43" width="16" height="19" rx="4" fill="#e32636"/><rect x="111" y="43" width="16" height="19" rx="4" fill="#e32636"/><rect x="137" y="31" width="8" height="40" rx="3" fill="${surface}"/>`
        },
        {
            name: "Aerodrome beacon",
            section: "5.3 (aeronautical beacons)",
            group: "Aerodrome lighting",
            colour: "White and green flashes",
            note: "The beacon symbol indicates an aerodrome identification light.",
            art: `<path d="M80 50 42 27m38 23 38-23M80 50l-38 23m38-23 38 23" stroke="#9ca3af" stroke-width="2"/><circle cx="80" cy="50" r="13" fill="#00a050" stroke="#ffffff" stroke-width="3"/><path d="M66 50a14 14 0 0 1 28 0" fill="none" stroke="#ffffff" stroke-width="4"/>`
        },
        {
            name: "Aerodrome obstacle light",
            section: "6.2 (visual aids for denoting obstacles)",
            group: "Aerodrome lighting",
            colour: "Red",
            note: "Red obstruction lights mark an obstacle requiring visual warning.",
            art: `<path d="M80 72V37m-17 35 17-35 17 35" fill="none" stroke="#333333" stroke-width="4"/><circle cx="80" cy="32" r="9" fill="#e32636"/><path d="M80 17v-6m-15 11-5-5m35 5 5-5" stroke="#e32636" stroke-width="3"/>`
        },
        {
            name: "Apron floodlighting",
            section: "5.3 (apron floodlighting)",
            group: "Aerodrome lighting",
            colour: "White light",
            note: "Floodlights illuminate aircraft stands and apron work areas.",
            art: `<path d="M40 31v33m80-33v33" stroke="#4b5563" stroke-width="5"/><path d="M33 31h14m66 0h14" stroke="#ffffff" stroke-width="7"/><path d="M40 40 22 70m18-30 18 30m62-30L102 70m18-30 18 30" stroke="#d1d5db" stroke-width="2"/>`
        }
    ];

    const visualAudit = {
        "Runway designation marking": "Checked against 5.2.2.4–5.2.2.6 and Figures 5-2/5-3: a white two-digit runway number is shown; the actual designator, suffix, and dimensions are site-specific.",
        "Runway centre line marking": "Checked against 5.2.3.3–5.2.3.4 and Figure 5-2: broken white centre-line stripes are shown; stripe/gap lengths and widths are schematic.",
        "Runway threshold marking": "Checked against 5.2.4.4–5.2.4.5 and Figure 5-2: longitudinal white bars are shown symmetrically; count, spacing, and dimensions vary with runway width.",
        "Runway aiming point marking": "Checked against 5.2.5.4, Table 5-1, and Figure 5-5: paired white stripes are shown; their position and dimensions depend on landing distance and runway configuration.",
        "Touchdown zone marking": "Checked against 5.2.6.3–5.2.6.4 and Figure 5-5: paired white rectangles are shown symmetrically; pair count and pattern vary with landing distance.",
        "Runway side stripe marking": "Checked against 5.2.7.3–5.2.7.5 and Figure 5-5: two white edge stripes are shown; placement and width are schematic.",
        "Taxiway centre line marking": "Checked against 5.2.1.5, 5.2.8.6, and Figure 5-6: a continuous yellow taxiway centre line is shown; curve geometry and enhanced variants are omitted.",
        "Runway turn pad marking": "Checked against 5.2.1.5 and 5.2.9.1–5.2.9.7: a continuous yellow line guides a 180-degree turn and runway alignment; curve, extension, and clearance are schematic.",
        "Runway-holding position marking": "Checked against 5.2.10.2–5.2.10.7 and Figures 5-6/5-8: yellow solid-solid and broken-broken lines show pattern A; dimensions and local orientation are schematic.",
        "Intermediate holding position marking": "Checked against 5.2.11.3–5.2.11.5 and Figure 5-6: one broken yellow line is shown; placement and dimensions are schematic.",
        "Aircraft stand lead-in line": "Checked against 5.2.1.5 and 5.2.13.3–5.2.13.9: a yellow lead-in line with a directional arrow is shown; stand-specific turns, identifiers, and stopping guidance vary.",
        "Mandatory instruction surface marking": "Checked against 5.2.16.1 and 5.2.16.6–5.2.16.10/Figure 5-10: white legend on a red field is correct; this sample text is illustrative.",
        "Runway-holding position sign": "Checked against 5.4.2.2, 5.4.2.12, and Figure 5-30: white runway legend on a red rectangular sign is shown; exact inscription depends on the holding position.",
        "No-entry sign": "Checked against 5.4.2.7, 5.4.2.10, and 5.4.2.12/Figure 5-30: the red rectangular sign with white NO ENTRY legend matches the prescribed sign form.",
        "Taxiway location sign": "Checked against 5.4.3.26 and 5.4.3.32/Figure 5-31: a yellow taxiway identifier on black is shown without an arrow; the sample letter is illustrative.",
        "Taxiway direction sign": "Checked against 5.4.3.25 and 5.4.3.31/Figure 5-31: a black arrow and taxiway identifier on yellow are shown; layout is schematic.",
        "Runway exit sign": "Checked against 5.4.3.25 and 5.4.3.27/Figure 5-31: one black exit arrow and designator on yellow are shown; the arrow indicates the intended exit direction.",
        "Approach lighting system": "Checked against 5.3.4.2–5.3.4.7: the simplified white layout now includes a centre line and crossbar; actual configuration depends on runway type and approach category.",
        "Runway edge lights": "Checked against 5.3.9.3–5.3.9.7: parallel rows are shown, with white lights and an example yellow caution zone; displaced-threshold red and spacing details are omitted.",
        "Runway threshold lights": "Checked against 5.3.10.2 and 5.3.10.9: a green row at the threshold is shown in the approach direction; count and spacing depend on runway category.",
        "Runway end lights": "Checked against 5.3.11.2–5.3.11.4: a red row is shown in the runway direction; count and spacing are schematic.",
        "Runway centre line lights": "Checked against 5.3.12.5 and 5.3.12.7: the illustration proceeds from white to alternating red/white and red at the runway end; transition distances are not to scale.",
        "Touchdown zone lights": "Checked against 5.3.13.2–5.3.13.5: paired white barrettes are shown symmetrically; spacing and extent are schematic.",
        "Taxiway centre line lights": "Checked against 5.3.17.6–5.3.17.8 and Figure 5-26: green lights depict an ordinary taxiway; exit and runway-proximity colour changes are not shown.",
        "Taxiway edge lights": "Checked against 5.3.18.6–5.3.18.7 and Figure 5-26: blue lights delineate the taxiway edge; spacing is schematic.",
        "Stop bar lights": "Checked against 5.3.20.4–5.3.20.7: a transverse row of red lights is shown facing approaching traffic; spacing is schematic.",
        "Precision approach path indicator (PAPI)": "Checked against 5.3.5.24 and 5.3.5.26: four units are shown with two white outboard and two red nearer the runway on the on-slope indication; beam angles are not represented."
    };

    function makeCard(entry, index) {
        const referenceVersion = "Annex 14, Volume I, 9th Edition (July 2022); public Swiss FOCA-hosted copy with visible Amendment 18 and Corrigendum 3 markings (8 June 2026).";
        const referenceCitation = `${entry.section}: ${entry.name}`;
        const visualCheck = visualAudit[entry.name];
        const limitation = `Review scope: this educational SVG was checked against the cited Annex 14 provision in the public source copy. It is not ICAO source artwork or a dimensional/installation drawing; site-specific applicability, State differences, and aerodrome certification were not assessed.`;

        return {
            id: `ICAO-AD-${String(index + 1).padStart(2, "0")}`,
            name: entry.name,
            category: "airport",
            code: `AD-${String(index + 1).padStart(2, "0")}`,
            svg: `<svg viewBox="0 0 160 100" class="w-64 h-36" role="img" aria-label="${entry.name}; ICAO Annex 14 Vol I ${entry.section}"><rect x="3" y="3" width="154" height="94" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><g stroke-linecap="round" stroke-linejoin="round">${entry.art}</g></svg>`,
            def: entry.name,
            limits: `Annex 14 Vol I ${entry.section}`,
            convention: `${entry.group}; standard colour: ${entry.colour}.`,
            sop: `Study note: ${entry.note}`,
            references: [
                {
                    document: "ICAO Annex 14, Volume I — public 9th Edition copy hosted by Swiss FOCA",
                    url: annex14SourceUrl,
                    version: referenceVersion,
                    citation: referenceCitation,
                    comment: `${visualCheck} Card colour label: ${entry.colour}.`
                },
                {
                    document: "ICAO Annex 14, Volume I — official catalogue",
                    url: annex14Url,
                    version: "9th Edition, July 2022; includes Amendment 18",
                    citation: referenceCitation,
                    comment: limitation
                }
            ],
            complianceComment: `Individual source check: ${visualCheck} Review limitation: ${limitation} These are physical aerodrome features, not Annex 4 chart symbols.`
        };
    }

    const retainedNames = new Set([
        "Runway designation marking",
        "Runway centre line marking",
        "Runway threshold marking",
        "Runway aiming point marking",
        "Touchdown zone marking",
        "Runway side stripe marking",
        "Taxiway centre line marking",
        "Runway turn pad marking",
        "Runway-holding position marking",
        "Intermediate holding position marking",
        "Aircraft stand lead-in line",
        "Mandatory instruction surface marking",
        "Runway-holding position sign",
        "No-entry sign",
        "Taxiway location sign",
        "Taxiway direction sign",
        "Runway exit sign",
        "Approach lighting system",
        "Runway edge lights",
        "Runway threshold lights",
        "Runway end lights",
        "Taxiway centre line lights",
        "Taxiway edge lights",
        "Stop bar lights",
        "Precision approach path indicator (PAPI)"
    ]);

    const physicalCards = entries.filter(entry => retainedNames.has(entry.name));
    window.symbolCards = (window.symbolCards || []).concat(
        physicalCards.map(entry => makeCard(entry, entries.indexOf(entry)))
    );
})();
