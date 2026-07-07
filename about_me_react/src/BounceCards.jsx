import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import "./BounceCards.css";

const defaultTransformStyles = [
  "rotate(5deg) translate(-92px)",
  "rotate(0deg) translate(-46px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(46px)",
  "rotate(-5deg) translate(92px)"
];

function toCssSize(value) {
  return typeof value === "number" ? `${value}px` : value;
}

export default function BounceCards({
  className = "",
  images = [],
  alt = "Превью проекта",
  containerWidth = "100%",
  containerHeight = 222,
  animationDelay = 0,
  animationStagger = 0.08,
  easeType = "elastic.out(1, 0.5)",
  transformStyles = defaultTransformStyles,
  enableHover = true
}) {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const previewImages = images.length > 0 ? images : ["/images/profile.jpg"];
  const portalRoot = typeof document === "undefined" ? null : document.body;

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);

    gsap.set(cards, {
      opacity: 0,
      scale: 0.72,
      transform: "none",
      pointerEvents: "none",
      zIndex: (index) => index + 2
    });
  }, [previewImages.length]);

  useEffect(() => {
    if (!isOpen) return undefined;

    function closeOnOutsidePointer(event) {
      if (!containerRef.current || containerRef.current.contains(event.target)) {
        return;
      }

      hideCards();
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePointer);
  }, [isOpen]);

  useEffect(() => {
    if (lightboxIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event) {
      if (event.key === "Escape") {
        setLightboxIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setLightboxIndex((currentIndex) => (
          currentIndex === null
            ? currentIndex
            : (currentIndex - 1 + previewImages.length) % previewImages.length
        ));
      }

      if (event.key === "ArrowRight") {
        setLightboxIndex((currentIndex) => (
          currentIndex === null
            ? currentIndex
            : (currentIndex + 1) % previewImages.length
        ));
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, previewImages.length]);

  function revealCards() {
    const cards = cardRefs.current.filter(Boolean);

    setIsOpen(true);
    gsap.killTweensOf(cards);
    gsap.to(cards, {
      opacity: 1,
      scale: 1,
      transform: (index) => transformStyles[index] ?? "none",
      pointerEvents: "auto",
      zIndex: (index) => index + 2,
      duration: 0.62,
      delay: animationDelay,
      stagger: animationStagger,
      ease: easeType,
      overwrite: "auto"
    });
  }

  function hideCards() {
    const cards = cardRefs.current.filter(Boolean);

    setIsOpen(false);
    setSelectedIndex(0);
    gsap.killTweensOf(cards);
    gsap.to(cards, {
      opacity: 0,
      scale: 0.72,
      transform: "none",
      pointerEvents: "none",
      zIndex: (index) => index + 2,
      duration: 0.24,
      ease: "power2.out",
      overwrite: "auto"
    });
  }

  function selectCard(index) {
    const cards = cardRefs.current.filter(Boolean);

    setSelectedIndex(index);

    if (!isOpen) {
      revealCards();
      return;
    }

    cards.forEach((card, cardIndex) => {
      const baseTransform = transformStyles[cardIndex] ?? "none";
      const selectedTransform = `${baseTransform} scale(1.22) translateY(-10px)`;

      gsap.to(card, {
        transform: cardIndex === index ? selectedTransform : baseTransform,
        zIndex: cardIndex === index ? previewImages.length + 10 : cardIndex + 2,
        duration: 0.28,
        ease: "back.out(1.6)",
        overwrite: "auto"
      });
    });
  }

  function openLightbox(index, event) {
    event.stopPropagation();
    setSelectedIndex(index);
    setLightboxIndex(index);
  }

  function showPrevImage(event) {
    event.stopPropagation();
    setLightboxIndex((currentIndex) => (
      currentIndex === null
        ? currentIndex
        : (currentIndex - 1 + previewImages.length) % previewImages.length
    ));
  }

  function showNextImage(event) {
    event.stopPropagation();
    setLightboxIndex((currentIndex) => (
      currentIndex === null
        ? currentIndex
        : (currentIndex + 1) % previewImages.length
    ));
  }

  function handleTouchToggle(event) {
    if (event.pointerType !== "touch") return;

    event.preventDefault();
    event.stopPropagation();

    if (isOpen) {
      return;
    }

    revealCards();
  }

  function handleClick(event) {
    event.stopPropagation();
  }

  return (
    <div
      className={`bounceCardsContainer ${className}${isOpen ? " is-open" : ""}`}
      ref={containerRef}
      style={{
        width: toCssSize(containerWidth),
        height: toCssSize(containerHeight)
      }}
      onMouseEnter={revealCards}
      onMouseLeave={hideCards}
      onFocus={revealCards}
      onBlur={hideCards}
      onPointerDown={handleTouchToggle}
      onClick={handleClick}
    >
      <div className="bounce-main-frame">
        <img className="bounce-main-image" src={previewImages[0]} alt={alt} />
      </div>

      <div className="bounce-preview-cards" aria-hidden={!isOpen}>
        {previewImages.map((src, index) => (
          <button
            key={`${src}-${index}`}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
            className={`bounce-card${selectedIndex === index ? " is-selected" : ""}`}
            type="button"
            onMouseEnter={() => enableHover && selectCard(index)}
            onFocus={() => selectCard(index)}
            onPointerDown={(event) => {
              event.stopPropagation();
              selectCard(index);
            }}
            onClick={(event) => openLightbox(index, event)}
          >
            <img className="bounce-card-image" src={src} alt="" />
          </button>
        ))}
      </div>

      {portalRoot && lightboxIndex !== null && createPortal(
        <div
          className="bounce-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр изображения проекта"
          onClick={(event) => {
            event.stopPropagation();
            setLightboxIndex(null);
          }}
        >
          <button
            type="button"
            className="bounce-lightbox-close"
            aria-label="Закрыть просмотр"
            onClick={(event) => {
              event.stopPropagation();
              setLightboxIndex(null);
            }}
          ></button>

          <button
            type="button"
            className="bounce-lightbox-arrow bounce-lightbox-arrow-prev"
            aria-label="Предыдущее изображение"
            onClick={showPrevImage}
          >
            ‹
          </button>

          <figure className="bounce-lightbox-frame" onClick={(event) => event.stopPropagation()}>
            <img
              src={previewImages[lightboxIndex]}
              alt={`${alt}: изображение ${lightboxIndex + 1}`}
              className="bounce-lightbox-image"
            />
            <figcaption className="bounce-lightbox-count">
              {lightboxIndex + 1} / {previewImages.length}
            </figcaption>
          </figure>

          <button
            type="button"
            className="bounce-lightbox-arrow bounce-lightbox-arrow-next"
            aria-label="Следующее изображение"
            onClick={showNextImage}
          >
            ›
          </button>
        </div>,
        portalRoot
      )}
    </div>
  );
}
