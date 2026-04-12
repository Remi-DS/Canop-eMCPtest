import React, { useState } from 'react';
import './PageDevisAuto.css';

const imgLogo = "http://localhost:3845/assets/127244edcb14dd89ddb8464cca2b60fd9cc80591.svg";
const imgBankIcon = "http://localhost:3845/assets/e3054f3a6518d2a3ec0dd9c6d5ec3ad7994c817c.svg";

const RADIO_OPTIONS = ['Madame', 'Monsieur', 'Titre', 'Titre'];

export interface PageDevisAutoProps {
  currentStep?: number;
  totalSteps?: number;
  stepLabel?: string;
  pageTitle?: string;
  infoMessage?: string;
  question?: string;
  options?: string[];
  ctaLabel?: string;
}

export const PageDevisAuto: React.FC<PageDevisAutoProps> = ({
  currentStep = 1,
  totalSteps = 3,
  stepLabel = 'Étape {current} sur {total}',
  pageTitle = 'Votre besoin',
  infoMessage = 'Obtenez votre tarif en 5 minutes !',
  question = 'Qui souhaitez-vous assurer ?',
  options = RADIO_OPTIONS,
  ctaLabel = 'Suivant',
}) => {
  const [selected, setSelected] = useState<string | null>(null);

  const resolvedStepLabel = stepLabel
    .replace('{current}', String(currentStep))
    .replace('{total}', String(totalSteps));

  return (
    <div className="page-devis">
      {/* HEADER */}
      <header className="page-header">
        <div className="page-header__content">
          <img src={imgLogo} alt="AXA" className="page-header__logo" />
          <p className="page-header__title">Devis assurance auto</p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="page-devis__container">

        {/* STEPPER */}
        <section className="stepper">
          <div className="stepper__labels">
            <p className="stepper__subtitle">{resolvedStepLabel}</p>
            <h1 className="stepper__title">{pageTitle}</h1>
          </div>

          {/* Progress bars */}
          <div className="progress-bar-group">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div key={i} className="progress-bar-item">
                {i < currentStep && <div className="progress-bar-item__fill" />}
              </div>
            ))}
          </div>

          <p className="stepper__mention">
            Sauf mention contraire, tous les champs sont obligatoires.
          </p>
        </section>

        {/* INFO MESSAGE */}
        <div className="info-message">
          <img src={imgBankIcon} alt="" className="info-message__icon" />
          <p className="info-message__text">{infoMessage}</p>
        </div>

        {/* QUESTION + CARD RADIO */}
        <section className="question-section">
          <h2 className="question-section__title">{question}</h2>

          <div className="card-radio-group" role="radiogroup" aria-label={question}>
            {options.map((option) => (
              <button
                key={option}
                type="button"
                role="radio"
                aria-checked={selected === option}
                className={`card-radio${selected === option ? ' is-selected' : ''}`}
                onClick={() => setSelected(option)}
              >
                <span className="card-radio__radio">
                  <span className="card-radio__radio-dot" />
                </span>
                <span className="card-radio__label">{option}</span>
              </button>
            ))}
          </div>
        </section>

        {/* BUTTON GROUP */}
        <div className="button-group">
          <button type="button" className="btn-primary">
            {ctaLabel}
          </button>
        </div>

      </main>
    </div>
  );
};

export default PageDevisAuto;
