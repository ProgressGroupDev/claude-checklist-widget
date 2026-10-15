/* claude-checklist-widget v1.0.0 – erzeugt von publish-widget.js aus ClaudeKnowledgePLC. Nicht von Hand ändern. */
(function(){
var DEFS={"projektvorbereitung@1.1":{"t":"Projektvorbereitung SPS","s":[["Anleitung",[["A1","Git-Repository clonen"],["A2","SPS-Projekt öffnen"]]],["Voraussetzungen",[["V1","Projektordner auf P:/Kunden erstellen","Auftrennung, falls mehrere PCs vorhanden"],["V2","Notwendige Dokumentation (Sicherheitsplan, Layouts, Ablaufbeschreibung) mit Datum im Projektverzeichnis ablegen"],["V3","Aktuelle Elektropläne ins Projektverzeichnis kopieren"],["V4","GitHub-Repository erstellen oder clonen"],["V5","Benötigte Laufzeitsysteme vom Standardprojekt ins Kundenprojekt kopieren"],["V6","Alle Libraries/Tools (Sysdiag, Achsmanager) auf aktuellstem Stand"],["V7","Projekt in Maschinenliste eintragen"],["V8","Alle notwendigen Dateien für Skripte holen"],["V9","Sicherheitstabelle.txt"],["V10","SPS Karten Anordnung PJ-******.asc"],["V11","SPS Verbindungsliste PJ-******.asc"]]],["Safety",[["SA1","Sicherheitstabelle erstellen"]]],["System Manager",[["SM1","System Manager erstellen"],["SM2","System Manager prüfen: alles erstellt und Reihenfolge des Busses ok"],["SM3","Signalaustausch im System Manager konfigurieren (wenn vorhanden)"],["SM4","Umrichter einfügen"],["SM5","Schweißinverter einfügen (wenn vorhanden)"],["SM6","Sync Units richtig zuweisen"],["SM7","CU2508 einstellen (wenn vorhanden)","Virtual Port Count, Virtual Ethernet Switch enabled, Connect to TCP/IP-Stack enabled, Adapter ausgewählt"],["SM8","„Use as potential reference clock“ setzen","Beim CU25-Port oder bei der ersten Klemme pro EtherCAT-Master"],["SM9","NOV-RAM einfügen"],["SM10","IO-Link-Slaves einfügen"],["SM11","AmsNetId bei jedem EtherCAT-Master verknüpfen"],["SM12","Mailbox SI6"]]],["TwinSafe",[["TS1","Neueste TwinSafe-Lib installieren"],["TS2","TwinSafe-Gruppen erstellen (nach Schaltschrank auftrennen)"],["TS3","Alias Devices zu den Gruppen hinzufügen"],["TS4","Einstellungen an den Alias Devices durchführen","FSoE-Adresse, Mappings aktivieren, Watchdog 1000 ms, Module-Fault deaktivieren"],["TS5","Sensortest bei OSSD-Eingängen (z. B. Lichtschranken) deaktivieren"],["TS6","Eingänge der Alias Devices laut E-Plan benennen"],["TS7","Alle NA und ST/LS erstellen, auch optionale","Optionale nicht in SB-Auswertung bzw. AND_NA verknüpfen"],["TS8","Sicherheitsbereiche und Anlaufsperren nach Sicherheitsplan erstellen"],["TS9","Verify Safety Project fehler- und meldungsfrei"]]],["SPS-Projekt",[["SP1","Adressierung importieren"],["SP2","Variablen ohne Adresse adressieren und in den EPlan rückpflegen"],["SP3","Adressierung exportieren"],["SP4","Alle Libraries auf „Set to effective version“ setzen"],["SP5","Anzahl Sicherungsklemmen & Ströme einstellen"],["SP6","Alle Motorschutzschalter & Überwachungen der Einspeisemodule richtig auswerten"],["SP7","Alle Einstellungen/CF_Variablen, die ohne Maschine möglich sind, richtig initialisieren"],["SP8","TwinSafe-Auswertung im Hauptlaufzeitsystem erstellen"],["SP9","Namen der elektrischen Komponenten als String im PLC-Programm eingeben"],["SP10","Safetyprogramm-FBs und Con-Info verknüpfen"],["SP11","Istbewertungen aller Achsen kontrollieren, max. Geschwindigkeiten ggf. anpassen"],["SP12","Verknüpfungen erstellen"]]],["Inverter",[["IN1","Neueste Firmware DriveControlSuite installieren"],["IN2","Frequenzumformer-Datensätze vorbereiten"],["IN3","Alle Datensätze auf neuesten Firmware-Stand bringen"]]],["PC-Programm",[["PC1","PC-Programm mit PCP-Abteilung einrichten","Für ProControl immer die Standardparameter verwenden"],["PC2","Allgemeine Parameter aller verwendeten Module kontrollieren"],["PC3","Oberflächen für manuelle Bedienung anpassen"],["PC4","Sicherheitsübersicht anpassen"],["PC5","KeyStates anpassen"],["PC6","Fehlerconfig anpassen (bei neuen Fehlerklassen/Achsen)"],["PC7","Änderungen am Standardprojekt PC-Programm zurücksichern (nur ProControl)"],["PC8","Projekt durchsimuliert und vollständig vorbereitet"],["PC9","Fehler-Konfiguration exportieren"]]]]}};
var CL_CSS=".cl-card{background:var(--surface-2);border:0.5px solid var(--border);border-radius:12px;padding:1rem 1.25rem;margin:0.5rem 0}.cl-top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}.cl-tt{margin:0;font-size:16px;font-weight:500;color:var(--text-primary)}.cl-tt i{font-size:18px;vertical-align:-2px;margin-right:6px;color:var(--text-accent)}.cl-st{margin:2px 0 0;font-size:13px;color:var(--text-secondary)}.cl-pct{margin:0;font-size:24px;font-weight:500;color:var(--text-primary);white-space:nowrap}.cl-bar{display:flex;height:8px;background:var(--surface-1);border:0.5px solid var(--border);border-radius:4px;margin:8px 0 6px;overflow:hidden}.cl-bar div{height:100%}.cl-meta{margin:0 0 4px;font-size:13px;color:var(--text-secondary)}.cl-h{display:flex;justify-content:space-between;align-items:center;margin:12px 0 0;padding:4px 0;cursor:pointer;user-select:none}.cl-h p{margin:0}.cl-ht{font-size:14px;font-weight:500;color:var(--text-primary)}.cl-hc{font-size:12px;color:var(--text-muted)}.cl-ch{font-size:16px;color:var(--text-secondary);margin-right:6px;vertical-align:-2px;display:inline-block;transition:transform .15s}.cl-ok{font-size:14px;color:var(--text-success);margin-left:6px;vertical-align:-1px}.cl-hr{display:flex;align-items:center;gap:8px}.cl-pb{display:flex;width:72px;height:5px;background:var(--surface-1);border:0.5px solid var(--border);border-radius:3px;overflow:hidden}.cl-pb span{height:100%;background:var(--fill-accent)}.cl-pb .h{background:var(--fill-warning)}.cl-pb.full span{background:var(--fill-success)}.cl-r{display:flex;align-items:flex-start;gap:10px;padding:8px 0;border-top:0.5px solid var(--border)}.cl-r.nx{padding:8px;background:var(--bg-accent-muted);border-radius:var(--radius)}.cl-r>i{font-size:20px;padding-top:1px;color:var(--text-muted)}.cl-r.nx>i{color:var(--text-accent)}.cl-r.done>i{color:var(--text-success)}.cl-r.part>i{color:var(--text-warning)}.cl-x{flex:1;min-width:0}.cl-x p{margin:0;font-size:14px;line-height:1.5;color:var(--text-primary)}.cl-r.done .cl-x p,.cl-r.na .cl-x p{color:var(--text-secondary)}.cl-r.na .cl-x p{text-decoration:line-through}.cl-x small{display:block;margin-top:2px;font-size:12px;color:var(--text-muted)}.cl-w{color:var(--text-warning)}.cl-nx{font-size:12px;color:var(--text-accent);margin-right:6px}.cl-b{display:flex;gap:6px}.cl-b button{font-size:12px;padding:2px 10px;white-space:nowrap}";
var FOX_CSS="#fox-stage{position:relative;height:84px;margin:10px 0 0;overflow:hidden;border-bottom:0.5px solid var(--border)}#fox{position:absolute;bottom:0;left:0;width:96px;height:64px;cursor:pointer;z-index:2}#fox-svg{display:block;overflow:visible}#fox .curl,#fox-zz,#fox .eyeh,#fox .mouth{visibility:hidden}#fox.s-sleep .curl,#fox.s-sleep #fox-zz,#fox.s-happy .eyeh,#fox.s-wake .mouth{visibility:visible}#fox.s-sleep .stand,#fox.s-happy .eye{visibility:hidden}#fox .leg,#fox .shin{transform-box:view-box;transition:transform .35s}#fox .ear,#fox .eye{transform-box:fill-box}#fox .ear{transform-origin:50% 100%;animation:fxEar 7s infinite}#fox .eye{transform-origin:50% 50%;animation:fxBlink 4.3s infinite}#fox .tail{transform-box:fill-box;transform-origin:100% 75%;transition:transform .35s}#fox .head{transform-box:fill-box;transform-origin:15% 85%;transition:transform .35s}#fox .stand-inner{transform-box:fill-box;transform-origin:20% 100%;transition:transform .35s}#fox.sneak .stand-inner{transform:translateY(4px)}#fox.sneak .head{transform:rotate(9deg) translate(1px,1px)}#fox.sneak .tail{transform:rotate(-14deg)}#fox.sneak .hind{transform:rotate(-26deg)}#fox.sneak .hind .shin{transform:rotate(58deg)}#fox.sneak .front{transform:rotate(24deg)}#fox.sneak .front .shin{transform:rotate(-46deg)}#fox.s-walk .hind{animation:fxHU .9s ease-in-out infinite}#fox.s-walk .hind .shin{animation:fxHL .9s ease-in-out infinite}#fox.s-walk .front{animation:fxFU .9s ease-in-out infinite}#fox.s-walk .front .shin{animation:fxFL .9s ease-in-out infinite}#fox.s-walk .leg.b,#fox.s-walk .leg.b .shin{animation-delay:-.45s}#fox.s-walk .bodyg{animation:fxBob .45s ease-in-out infinite alternate}#fox.s-walk .tail{animation:fxTailS 1.8s ease-in-out infinite alternate}#fox.s-happy .tail{animation:fxTail .14s linear infinite alternate}#fox.s-happy .stand-inner{animation:fxJump .42s cubic-bezier(.3,.7,.4,1) infinite alternate}#fox.s-sniff .head{animation:fxSniff .45s ease-in-out infinite alternate}#fox.s-walk .head{animation:fxPeer 3.2s ease-in-out infinite}#fox.s-look .head{animation:fxLook 2.4s ease-in-out}#fox.s-wake .stand-inner{animation:fxStretch 1.4s ease-in-out}#fox.s-squat .bodyg{transform:translateY(3px)}#fox.s-squat .tail{transform:rotate(28deg)}#fox .curl .breath{transform-box:fill-box;transform-origin:50% 100%;animation:fxBreath 2.8s ease-in-out infinite}#fox .curl .tailc{transform-box:fill-box;transform-origin:0% 60%;animation:fxTailC 5s ease-in-out infinite}.fox-z{position:absolute;top:0;font-size:11px;color:var(--text-muted);opacity:0;animation:fxZ 2.6s linear infinite}.fox-fx{position:absolute;bottom:52px;font-size:14px;opacity:0;animation:fxRise 1.7s ease-out forwards}.fox-poop{position:absolute;bottom:0;width:14px;height:20px;z-index:1;animation:fxPop .25s ease-out}.fox-poop .stink{animation:fxStink 1.8s ease-out 3 both}@keyframes fxHU{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(-42deg)}}@keyframes fxHL{0%,100%{transform:rotate(40deg)}25%{transform:rotate(84deg)}50%{transform:rotate(70deg)}}@keyframes fxFU{0%,100%{transform:rotate(40deg)}50%{transform:rotate(6deg)}}@keyframes fxFL{0%,100%{transform:rotate(-30deg)}25%{transform:rotate(-80deg)}50%{transform:rotate(-58deg)}}@keyframes fxBob{from{translate:0 0}to{translate:0 -1px}}@keyframes fxTailS{from{transform:rotate(-18deg)}to{transform:rotate(-9deg)}}@keyframes fxPeer{0%,100%{transform:rotate(9deg) translate(1px,1px)}50%{transform:rotate(6deg) translate(1.5px,1px)}}@keyframes fxTail{from{transform:rotate(-7deg)}to{transform:rotate(9deg)}}@keyframes fxJump{0%{transform:translateY(0) scaleY(.94)}100%{transform:translateY(-16px) scaleY(1.03)}}@keyframes fxSniff{from{transform:rotate(14deg)}to{transform:rotate(20deg)}}@keyframes fxLook{0%,100%{transform:rotate(0)}30%{transform:rotate(-12deg)}65%{transform:rotate(7deg)}}@keyframes fxStretch{0%,100%{transform:rotate(0)}35%,65%{transform:rotate(7deg) translateY(2px)}}@keyframes fxBlink{0%,93%,100%{transform:scaleY(1)}96%{transform:scaleY(.1)}}@keyframes fxEar{0%,88%,100%{transform:rotate(0)}91%{transform:rotate(-14deg)}95%{transform:rotate(5deg)}}@keyframes fxBreath{50%{transform:scaleY(1.045)}}@keyframes fxTailC{50%{transform:rotate(2deg)}}@keyframes fxZ{0%{opacity:0;transform:translate(0,16px)}30%{opacity:1}100%{opacity:0;transform:translate(12px,-4px)}}@keyframes fxRise{0%{opacity:0;transform:translateY(0) scale(.6)}20%{opacity:1;transform:translateY(-6px) scale(1)}100%{opacity:0;transform:translateY(-34px) scale(.9)}}@keyframes fxPop{from{transform:scale(.2)}to{transform:scale(1)}}@keyframes fxStink{0%{opacity:0;transform:translateY(2px)}40%{opacity:.7}100%{opacity:0;transform:translateY(-5px)}}";
var FOX_HTML="<div id=\"fox-stage\"><div id=\"fox\" class=\"s-sleep\" role=\"button\" aria-label=\"Fuchs\" title=\"Fuchs\"><span id=\"fox-zz\" aria-hidden=\"true\"><span class=\"fox-z\" style=\"left:0\">z</span><span class=\"fox-z\" style=\"left:7px;animation-delay:.85s\">z</span><span class=\"fox-z\" style=\"left:14px;animation-delay:1.7s\">z</span></span><svg id=\"fox-svg\" viewBox=\"0 0 120 80\" width=\"96\" height=\"64\" aria-hidden=\"true\"><g class=\"stand\"><ellipse cx=\"64\" cy=\"73\" rx=\"30\" ry=\"2.4\" fill=\"#2C2C2A\" fill-opacity=\".12\"/><g class=\"stand-inner\"><g class=\"leg hind b\" style=\"transform-origin:43.2px 47px\"><path d=\"M40.8 46 L45.8 46 L45.2 59.5 L41.4 59.5 Z\" fill=\"#993C1D\"/><g class=\"shin\" style=\"transform-origin:43.3px 58.5px\"><path d=\"M41.5 58 L45 58 L44.6 69 L42 69 Z\" fill=\"#2C2C2A\"/><ellipse cx=\"43.4\" cy=\"70\" rx=\"3.1\" ry=\"1.6\" fill=\"#2C2C2A\"/></g></g><g class=\"leg front a\" style=\"transform-origin:77.2px 46px\"><path d=\"M74.8 45 L79.8 45 L79.2 58.5 L75.4 58.5 Z\" fill=\"#993C1D\"/><g class=\"shin\" style=\"transform-origin:77.3px 57.5px\"><path d=\"M75.5 57 L79 57 L78.6 69 L76 69 Z\" fill=\"#2C2C2A\"/><ellipse cx=\"77.6\" cy=\"70\" rx=\"3.1\" ry=\"1.6\" fill=\"#2C2C2A\"/></g></g><g class=\"tail\"><path d=\"M40 40 C30 36 20 40 12 36 C4 32 4 22 12 22 C16 22 18 28 24 31 C30 34 36 34 40 36 Z\" fill=\"#D85A30\"/><path d=\"M12 22 C4 22 4 32 12 36 C9 32 8 26 12 22 Z\" fill=\"#F1EFE8\"/><path d=\"M14 25 C20 31 28 34 38 36\" stroke=\"#993C1D\" stroke-opacity=\".4\" stroke-width=\"1\" fill=\"none\"/></g><g class=\"bodyg\"><path d=\"M38 46 C36 38 44 32 56 32 L74 32 C82 32 88 36 88 42 C88 50 82 54 72 54 L50 54 C42 54 39 51 38 46 Z\" fill=\"#D85A30\"/><path d=\"M42 37 C46 33 52 32 58 32 L74 32 C80 32 84 34 86 37 C78 35 60 35 42 37 Z\" fill=\"#993C1D\" fill-opacity=\".35\"/><path d=\"M50 54 C58 56 70 56 78 53 C74 51 58 51 50 54 Z\" fill=\"#F1EFE8\"/><path d=\"M40 44 C40 38 48 36 54 40 C57 44 55 52 48 53 C43 53 40 50 40 44 Z\" fill=\"#D85A30\" stroke=\"#993C1D\" stroke-opacity=\".45\" stroke-width=\".7\"/><path d=\"M78 34 C82 30 88 30 90 34 L92 46 C88 50 82 50 80 46 Z\" fill=\"#D85A30\"/><path d=\"M84 40 C88 42 90 46 88 52 C85 53 82 50 82 46 Z\" fill=\"#F1EFE8\"/></g><g class=\"leg hind a\" style=\"transform-origin:49px 47px\"><path d=\"M46.3 46 L51.7 46 L51 59.5 L47 59.5 Z\" fill=\"#D85A30\"/><g class=\"shin\" style=\"transform-origin:49px 58.5px\"><path d=\"M47.2 58 L50.8 58 L50.4 69 L47.6 69 Z\" fill=\"#444441\"/><ellipse cx=\"49\" cy=\"70\" rx=\"3.3\" ry=\"1.8\" fill=\"#2C2C2A\"/></g></g><g class=\"leg front b\" style=\"transform-origin:82.2px 46px\"><path d=\"M79.6 45 L84.8 45 L84.2 58.5 L80.2 58.5 Z\" fill=\"#D85A30\"/><g class=\"shin\" style=\"transform-origin:82.3px 57.5px\"><path d=\"M80.4 57 L84 57 L83.6 69 L81 69 Z\" fill=\"#444441\"/><ellipse cx=\"82.6\" cy=\"70\" rx=\"3.3\" ry=\"1.8\" fill=\"#2C2C2A\"/></g></g><g class=\"head\"><g class=\"ear\"><path d=\"M88 22 L87 9 L95 19 Z\" fill=\"#993C1D\"/><path d=\"M92 20 L96 7 L101 20 Z\" fill=\"#D85A30\"/><path d=\"M94.5 19 L96.5 11 L99 19 Z\" fill=\"#2C2C2A\" fill-opacity=\".75\"/></g><path d=\"M84 30 C83 22 90 18 97 19 C102 20 105 24 110 27 L118 30 C120 31 120 33 118 34 C112 36 106 38 99 38 C90 38 85 35 84 30 Z\" fill=\"#D85A30\"/><path d=\"M96 32 C102 34 110 34 118 34 C112 37 105 39 99 39 C95 38 94 34 96 32 Z\" fill=\"#F1EFE8\"/><path d=\"M86 32 C88 36 92 38 95 37 C92 35 90 33 88 30 Z\" fill=\"#F1EFE8\"/><path class=\"mouth\" d=\"M106 35.5 Q110.5 41 115 35.5 Z\" fill=\"#791F1F\"/><g class=\"eye\"><ellipse cx=\"103\" cy=\"25.5\" rx=\"1.9\" ry=\"2.2\" fill=\"#2C2C2A\"/><circle cx=\"103.6\" cy=\"24.7\" r=\".7\" fill=\"#FFFFFF\"/></g><path class=\"eyeh\" d=\"M100.8 26.5 q2.2 -3 4.4 0\" stroke=\"#2C2C2A\" stroke-width=\"1.2\" fill=\"none\" stroke-linecap=\"round\"/><ellipse cx=\"118.6\" cy=\"31.6\" rx=\"1.8\" ry=\"1.4\" fill=\"#2C2C2A\"/><path d=\"M110 32 L116.5 28.8 M110 33 L117 33 M110 34 L116.5 36.4\" stroke=\"#888780\" stroke-width=\".35\"/></g></g></g><g class=\"curl\"><ellipse cx=\"64\" cy=\"73\" rx=\"34\" ry=\"2.4\" fill=\"#2C2C2A\" fill-opacity=\".12\"/><g class=\"breath\"><path d=\"M30 64 C28 50 44 42 62 42 C80 42 94 50 94 60 C94 68 82 72 62 72 C44 72 31 70 30 64 Z\" fill=\"#D85A30\"/><path d=\"M36 52 C42 45 54 42 64 42 C78 42 88 47 92 54 C82 48 58 46 36 52 Z\" fill=\"#993C1D\" fill-opacity=\".3\"/></g><g class=\"ear\"><path d=\"M80 49 L73 41 L85 46 Z\" fill=\"#993C1D\"/><path d=\"M84 47 L80 37 L90 45 Z\" fill=\"#D85A30\"/><path d=\"M84.5 45.5 L82 40 L87.5 45 Z\" fill=\"#2C2C2A\" fill-opacity=\".7\"/></g><path d=\"M76 58 C74 50 82 45 90 46 C96 47 100 51 104 56 L109 59 C110 60 109 62 107 62 C100 63 92 64 86 63 C80 62 77 61 76 58 Z\" fill=\"#D85A30\"/><path d=\"M78 58 C80 61 84 62 88 61 C84 59 81 57 79 54 Z\" fill=\"#F1EFE8\"/><path d=\"M92 53 q2.5 1.8 5 0\" stroke=\"#2C2C2A\" stroke-width=\"1\" fill=\"none\" stroke-linecap=\"round\"/><ellipse cx=\"108\" cy=\"60\" rx=\"1.5\" ry=\"1.1\" fill=\"#2C2C2A\"/><g class=\"tailc\"><path d=\"M30 64 C28 74 52 78 76 76 C92 75 106 70 110 64 C104 68 92 70 76 70 C56 70 38 70 30 64 Z\" fill=\"#D85A30\"/><path d=\"M110 64 C108 69 102 72 95 73.5 C99 70 104 67 110 64 Z\" fill=\"#F1EFE8\"/><path d=\"M36 70 C50 74 70 74 92 71\" stroke=\"#993C1D\" stroke-opacity=\".35\" stroke-width=\"1\" fill=\"none\"/></g></g></svg></div></div>";
function startFox(CELEBRATE){(function(){
var stage=document.getElementById('fox-stage'),fox=document.getElementById('fox'),svg=document.getElementById('fox-svg'),zz=document.getElementById('fox-zz');
var W=96,x=30,dir=1,state='sleep',target=0,until=0,awakeEnd=0,last=performance.now();
function now(){return performance.now();}
function maxX(){return Math.max(0,stage.clientWidth-W);}
function pick(){target=Math.random()*maxX();dir=target>x?1:-1;}
var SNEAK={walk:1,sniff:1,look:1,squat:1};
function set(s,ms){state=s;until=now()+ms;fox.className='s-'+s+(SNEAK[s]?' sneak':'');zz.style.left=(dir>0?70:8)+'px';}
function walk(){set('walk',1e9);pick();}
function awake(ms){awakeEnd=now()+ms;walk();}
function fx(icon,color,n){for(var i=0;i<n;i++){var h=document.createElement('i');h.className='ti '+(i%3===2?'ti-star':icon)+' fox-fx';h.setAttribute('aria-hidden','true');h.style.color=color;h.style.left=(x+20+Math.random()*50)+'px';h.style.animationDelay=(i*0.2)+'s';stage.appendChild(h);(function(el){setTimeout(function(){el.remove();},3200);})(h);}}
function place(){fox.style.left=x+'px';svg.style.transform=dir<0?'scaleX(-1)':'none';}
function poop(){var p=document.createElement('div');p.className='fox-poop';p.style.left=(dir>0?x+16:x+W-30)+'px';p.innerHTML='<svg viewBox="0 0 14 20" width="14" height="20" aria-hidden="true"><path class="stink" d="M4 9 q-1.5 -2 0 -4 q1.5 -2 0 -4" stroke="#888780" stroke-width=".8" fill="none"/><path class="stink" style="animation-delay:.5s" d="M9 9 q-1.5 -2 0 -4 q1.5 -2 0 -4" stroke="#888780" stroke-width=".8" fill="none"/><ellipse cx="7" cy="18.2" rx="6.2" ry="1.8" fill="#633806"/><ellipse cx="7" cy="15.6" rx="4.6" ry="1.7" fill="#854F0B"/><ellipse cx="7.1" cy="13.2" rx="3" ry="1.5" fill="#633806"/><path d="M7.4 12 q1.6 -0.6 0.8 -2.2" stroke="#633806" stroke-width="1.4" fill="none" stroke-linecap="round"/><ellipse cx="5.6" cy="15.2" rx="1.2" ry=".4" fill="#BA7517" fill-opacity=".6"/></svg>';stage.insertBefore(p,fox);}
window.foxHappy=function(){set('happy',2600);fx('ti-heart','var(--text-danger)',6);};
fox.addEventListener('click',function(){
if(state==='walk'||state==='sniff'||state==='look'){set('squat',1000);setTimeout(poop,450);}
else if(state==='sleep'){set('wake',1400);}
});
function tick(t){var dt=Math.min(50,t-last);last=t;
if(state==='walk'){x+=0.024*dt*dir;if((dir>0&&x>=target)||(dir<0&&x<=target)){x=target;var r=Math.random();if(r<0.25)set('sniff',1600+Math.random()*1200);else if(r<0.45)set('look',2400);else pick();}
if(t>awakeEnd)set('sleep',12000+Math.random()*14000);}
else if(t>until){
if(state==='sleep')set('wake',1400);
else if(state==='wake'||state==='happy')awake(7000+Math.random()*7000);
else walk();}
x=Math.max(0,Math.min(maxX(),x));place();requestAnimationFrame(tick);}
place();
if(CELEBRATE){set('happy',2800);fx('ti-heart','var(--text-danger)',7);}else set('sleep',3500+Math.random()*4000);
requestAnimationFrame(tick);
})();}
// Quelltext der Darstellung (wird von publish-widget.js zusammen mit Fuchs und Checklisten-Vorlagen zu w.js gebündelt
// und über jsDelivr aus dem öffentlichen Repo ProgressGroupDev/claude-checklist-widget geladen).
// Aufruf im Widget: CL({c: id, v: vorlagenversion, p: projekt, u: stand, s: "dhno…" (Status je Punkt in Vorlagen-
// reihenfolge: d erledigt, h halb, n nicht zutreffend, o offen), n: {ID: notiz}, f: 1 = Fuchs freut sich}).
/* global DEFS, CL_CSS, FOX_CSS, FOX_HTML, startFox, sendPrompt */
window.CL = function (d) {
  var root = document.getElementById(d.el || 'cl');
  var def = DEFS[d.c + '@' + d.v] || null;
  if (!def) {
    root.textContent = 'Checkliste „' + d.c + '“ v' + d.v + ' ist im Widget-Paket nicht enthalten – Widget neu veröffentlichen (publish-widget.js).';
    return;
  }
  var CLS = { d: 'done', h: 'part', n: 'na', o: 'open' };
  var ICON = { d: 'ti-circle-check', h: 'ti-circle-half-2', n: 'ti-circle-minus', o: 'ti-circle' };
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  var notes = d.n || {}, k = 0, next = null, D = 0, P = 0, N = 0, T = 0;
  var secs = def.s.map(function (sec) {
    var items = sec[1].map(function (it) {
      var st = d.s.charAt(k++) || 'o';
      if (!next && (st === 'o' || st === 'h')) next = it[0];
      T++; if (st === 'd') D++; else if (st === 'h') P++; else if (st === 'n') N++;
      return { id: it[0], t: it[1], hint: it[2], st: st };
    });
    return { t: sec[0], items: items };
  });
  var rel = T - N, pct = rel ? Math.floor((D + P / 2) / rel * 100) : 100, hw = rel ? Math.floor(P / 2 / rel * 100) : 0;
  var meta = [D + ' von ' + rel + ' erledigt'];
  if (P) meta.push(P + ' halb');
  meta.push((rel - D - P) + ' offen');
  if (N) meta.push(N + ' nicht zutreffend');
  if (d.u) meta.push('Stand ' + d.u);
  var h = [];
  h.push('<style>' + CL_CSS + FOX_CSS + '</style>');
  h.push('<h2 class="sr-only">Checkliste ' + esc(def.t) + ': ' + D + ' von ' + rel + ' Punkten erledigt (' + pct + ' Prozent)</h2>');
  h.push('<div class="cl-card"><div class="cl-top"><div style="min-width:0"><p class="cl-tt"><i class="ti ti-list-check" aria-hidden="true"></i>' + esc(def.t) + '</p>');
  h.push('<p class="cl-st">' + esc(d.p) + ' · Vorlage v' + esc(d.v) + '</p></div><p id="cl-pct" class="cl-pct">' + pct + ' %</p></div>');
  h.push(FOX_HTML);
  h.push('<div class="cl-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '"><div id="cl-bd" style="width:' + (pct - hw) + '%;background:' + (pct === 100 ? 'var(--fill-success)' : 'var(--fill-accent)') + '"></div><div id="cl-bh" style="width:' + hw + '%;background:var(--fill-warning)"></div></div>');
  h.push('<p id="cl-meta" class="cl-meta" data-stand="' + (d.u ? 'Stand ' + esc(d.u) : '') + '">' + meta.join(' · ') + '</p>');
  secs.forEach(function (sec) {
    var sd = 0, sp = 0, sn = 0, cur = false;
    sec.items.forEach(function (it) { if (it.st === 'd') sd++; else if (it.st === 'h') sp++; else if (it.st === 'n') sn++; if (it.id === next) cur = true; });
    var srel = sec.items.length - sn, full = sd + sn === sec.items.length;
    h.push('<div class="cl-h" role="button" tabindex="0" aria-expanded="true" data-c="' + (cur ? 0 : 1) + '"><p class="cl-ht"><i class="ti ti-chevron-down cl-ch" aria-hidden="true"></i>' + esc(sec.t) + (full ? '<i class="ti ti-check cl-ok" aria-hidden="true"></i>' : '') + '</p>');
    h.push('<div class="cl-hr"><p class="cl-hc">' + sd + '/' + srel + (sp ? ' · ' + sp + ' halb' : '') + '</p><span class="cl-pb' + (full ? ' full' : '') + '" aria-hidden="true"><span style="width:' + (srel ? Math.round(sd / srel * 100) : 100) + '%"></span><span class="h" style="width:' + (srel ? Math.round(sp / 2 / srel * 100) : 0) + '%"></span></span></div></div><div class="cl-body">');
    sec.items.forEach(function (it) {
      var sub = [], nx = it.id === next;
      if (it.st === 'd') sub.push('erledigt');
      if (it.st === 'h') sub.push('<span class="cl-w">halb erledigt</span>');
      if (it.st === 'n') sub.push('nicht zutreffend');
      if (notes[it.id]) sub.push(esc(notes[it.id]));
      if ((it.st === 'o' || it.st === 'h') && it.hint) sub.push(esc(it.hint));
      h.push('<div class="cl-r ' + CLS[it.st] + (nx ? ' nx' : '') + '" data-id="' + esc(it.id) + '"><i class="ti ' + ICON[it.st] + '" aria-hidden="true"></i><div class="cl-x"><p>' + (nx ? '<span class="cl-nx">Als Nächstes</span>' : '') + esc(it.t) + '</p>' + (sub.length ? '<small>' + sub.join(' · ') + '</small>' : '') + '</div>' + (it.st === 'o' || it.st === 'h' ? '<div class="cl-b"></div>' : '') + '</div>');
    });
    h.push('</div>');
  });
  h.push('</div>');
  root.innerHTML = h.join('');

  // Interaktion: auf-/zuklappen, Knöpfe; ein Klick aktualisiert das Widget sofort selbst und meldet es dann an Claude.
  function $(s, e) { return (e || root).querySelector(s); }
  function tg(hd) { var b = hd.nextElementSibling, o = b.style.display !== 'none'; b.style.display = o ? 'none' : 'block'; hd.setAttribute('aria-expanded', o ? 'false' : 'true'); $('.cl-ch', hd).style.transform = o ? 'rotate(-90deg)' : 'none'; }
  function setSub(r, html) { var x = $('.cl-x', r), s = $('small', x); if (!s) { s = document.createElement('small'); x.appendChild(s); } s.innerHTML = html; }
  function setNext() {
    var o = $('.cl-r.nx'); if (o) { o.classList.remove('nx'); var n = $('.cl-nx', o); if (n) n.remove(); }
    var r = $('.cl-r.open,.cl-r.part'); if (!r) return;
    r.classList.add('nx'); var p = $('.cl-x p', r), s = document.createElement('span'); s.className = 'cl-nx'; s.textContent = 'Als Nächstes'; p.insertBefore(s, p.firstChild);
    var b = r.parentNode; if (b.style.display === 'none') tg(b.previousElementSibling);
  }
  function recalc() {
    var D = 0, P = 0, N = 0, T = 0;
    root.querySelectorAll('.cl-h').forEach(function (hd) {
      var b = hd.nextElementSibling, d = b.querySelectorAll('.cl-r.done').length, p = b.querySelectorAll('.cl-r.part').length, n = b.querySelectorAll('.cl-r.na').length, t = b.querySelectorAll('.cl-r').length, rl = t - n;
      D += d; P += p; N += n; T += t;
      $('.cl-hc', hd).textContent = d + '/' + rl + (p ? ' · ' + p + ' halb' : '');
      var pb = $('.cl-pb', hd); pb.children[0].style.width = (rl ? Math.round(d / rl * 100) : 100) + '%'; pb.children[1].style.width = (rl ? Math.round(p / 2 / rl * 100) : 0) + '%'; pb.classList.toggle('full', d + n === t);
      var ht = $('.cl-ht', hd); if (d + n === t && !$('.cl-ok', ht)) { var i = document.createElement('i'); i.className = 'ti ti-check cl-ok'; ht.appendChild(i); }
    });
    var rl = T - N, pc = rl ? Math.floor((D + P / 2) / rl * 100) : 100, w = rl ? Math.floor(P / 2 / rl * 100) : 0, bd = $('#cl-bd');
    $('#cl-pct').textContent = pc + ' %'; bd.style.width = (pc - w) + '%'; bd.style.background = pc === 100 ? 'var(--fill-success)' : 'var(--fill-accent)'; $('#cl-bh').style.width = w + '%';
    var m = [D + ' von ' + rl + ' erledigt']; if (P) m.push(P + ' halb'); m.push((rl - D - P) + ' offen'); if (N) m.push(N + ' nicht zutreffend');
    var mt = $('#cl-meta'), st = mt.getAttribute('data-stand'); if (st) m.push(st); mt.textContent = m.join(' · ');
  }
  function mark(r, s) {
    r.classList.remove('open', 'part'); r.classList.add(s);
    $('i', r).className = 'ti ' + (s === 'done' ? 'ti-circle-check' : 'ti-circle-half-2');
    setSub(r, (s === 'done' ? 'erledigt' : '<span class="cl-w">halb erledigt</span>') + ' · wird gespeichert …');
    $('.cl-b', r).innerHTML = ''; if (s === 'part') btns(r);
    setNext(); recalc(); if (window.foxHappy) window.foxHappy();
  }
  function btns(r) {
    var p = $('.cl-x p', r).cloneNode(true), n = $('.cl-nx', p); if (n) n.remove();
    var t = p.textContent.trim(), box = $('.cl-b', r);
    function btn(l, w, s) { var b = document.createElement('button'); b.textContent = l + ' ↗'; b.onclick = function () { mark(r, s); sendPrompt('Checkliste ' + d.c + ': Punkt ' + r.getAttribute('data-id') + ' „' + t + '“ ist ' + w + '.'); }; box.appendChild(b); }
    if (r.classList.contains('open')) btn('Halb', 'halb erledigt', 'part');
    btn('Erledigt', 'erledigt', 'done');
  }
  root.querySelectorAll('.cl-h').forEach(function (hd) {
    hd.addEventListener('click', function () { tg(hd); });
    hd.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tg(hd); } });
    if (hd.getAttribute('data-c') === '1') tg(hd);
  });
  root.querySelectorAll('.cl-r.open,.cl-r.part').forEach(btns);
  startFox(!!d.f);
};

})();
