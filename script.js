/**
 * Davi Matheus | Portfólio
 * script.js
 *
 * Efeitos visuais opcionais:
 *  - Glow跟随 o cursor (CSS variables)
 *  - Tilt 3D em cards com [data-tilt]
 *
 * Tudo respeita prefers-reduced-motion e é desativado
 * automaticamente quando o usuário pede menos movimento.
 */
(function () {
    "use strict";

    const root = document.documentElement;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerFineQuery = window.matchMedia("(pointer: fine)");

    let motionEnabled = !motionQuery.matches;
    let pointerFine = pointerFineQuery.matches;

    // Reagir a mudanças de preferência em tempo real
    motionQuery.addEventListener("change", (event) => {
        motionEnabled = !event.matches;
        if (!motionEnabled) {
            cleanupTilt();
        } else {
            setupTilt();
        }
    });

    pointerFineQuery.addEventListener("change", (event) => {
        pointerFine = event.matches;
    });

    /* =============================================================
       GLOW跟随 (mouse follow)
       ============================================================= */
    let glowFrame = 0;
    let lastGlowX = 50;
    let lastGlowY = 20;

    const handlePointerMove = (event) => {
        if (!motionEnabled) return;
        if (glowFrame) return;

        const event_ = event;
        glowFrame = window.requestAnimationFrame(() => {
            const x = (event_.clientX / window.innerWidth) * 100;
            const y = (event_.clientY / window.innerHeight) * 100;

            // Evita updates redundantes quando o cursor mal se moveu
            if (Math.abs(x - lastGlowX) < 0.1 && Math.abs(y - lastGlowY) < 0.1) {
                glowFrame = 0;
                return;
            }

            lastGlowX = x;
            lastGlowY = y;
            root.style.setProperty("--glow-x", `${x}%`);
            root.style.setProperty("--glow-y", `${y}%`);
            glowFrame = 0;
        });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    /* =============================================================
       TILT 3D nos cards
       ============================================================= */
    const tiltElements = Array.from(document.querySelectorAll("[data-tilt]"));
    const tiltHandlers = new WeakMap();

    const setupTilt = () => {
        if (!motionEnabled || !pointerFine) {
            cleanupTilt();
            return;
        }

        tiltElements.forEach((element) => {
            if (tiltHandlers.has(element)) return;

            const onMove = (event) => {
                if (!motionEnabled) return;
                if (element.tiltFrame) return;

                const ev = event;
                element.tiltFrame = window.requestAnimationFrame(() => {
                    const rect = element.getBoundingClientRect();
                    if (rect.width === 0 || rect.height === 0) {
                        element.tiltFrame = 0;
                        return;
                    }
                    const offsetX = ev.clientX - rect.left;
                    const offsetY = ev.clientY - rect.top;
                    const rotateY = (offsetX / rect.width - 0.5) * 10;
                    const rotateX = (0.5 - offsetY / rect.height) * 10;
                    element.style.transform =
                        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
                    element.tiltFrame = 0;
                });
            };

            const onLeave = () => {
                if (element.tiltFrame) {
                    window.cancelAnimationFrame(element.tiltFrame);
                    element.tiltFrame = 0;
                }
                element.style.transform = "";
            };

            element.addEventListener("pointermove", onMove, { passive: true });
            element.addEventListener("pointerleave", onLeave, { passive: true });
            element.addEventListener("blur", onLeave, { passive: true });

            tiltHandlers.set(element, { onMove, onLeave });
        });
    };

    const cleanupTilt = () => {
        tiltElements.forEach((element) => {
            const handlers = tiltHandlers.get(element);
            if (!handlers) return;
            element.removeEventListener("pointermove", handlers.onMove);
            element.removeEventListener("pointerleave", handlers.onLeave);
            element.removeEventListener("blur", handlers.onLeave);
            if (element.tiltFrame) {
                window.cancelAnimationFrame(element.tiltFrame);
                element.tiltFrame = 0;
            }
            element.style.transform = "";
            tiltHandlers.delete(element);
        });
    };

    if (motionEnabled && pointerFine) {
        setupTilt();
    }

    /* =============================================================
       Ano corrente no footer
       ============================================================= */
    const yearEl = document.getElementById("current-year");
    if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
    }

    /* =============================================================
       Suaviza scroll para links âncora (offset para sticky nav)
       ============================================================= */
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const href = anchor.getAttribute("href");
            if (!href || href === "#") return;
            const target = document.querySelector(href);
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({ behavior: motionEnabled ? "smooth" : "auto", block: "start" });
            // Move o foco para acessibilidade
            target.setAttribute("tabindex", "-1");
            target.focus({ preventScroll: true });
        });
    });

    /* =============================================================
       Log de erro amigável em desenvolvimento
       ============================================================= */
    window.addEventListener("error", (event) => {
        // Não fazer barulho em produção; só registrar
        if (window.console && typeof console.error === "function") {
            console.error("[portfolio] erro:", event.message);
        }
    });
})();
