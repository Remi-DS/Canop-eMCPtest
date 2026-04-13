import React from 'react';
import './Stepper.css';

export type StepperTheme = 'Prospect' | 'Client';
export type StepperDevice = '--desk' | '--mob';
export type StepperStyle = '--default' | '--vertical';
export type StepperStatus = '--pending' | '--active' | '--completed' | '--disabled';

export interface StepperStep {
  id: string;
  label: string;
  status?: StepperStatus;
  onClick?: () => void;
}

export interface StepperProps {
  steps: StepperStep[];
  theme?: StepperTheme;
  device?: StepperDevice;
  style?: StepperStyle;
  currentStep?: number;
  className?: string;
  onStepClick?: (stepIndex: number) => void;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  theme = 'Prospect',
  device = '--desk',
  style = '--default',
  currentStep = 0,
  className = '',
  onStepClick,
}) => {
  const getStepStatus = (index: number): StepperStatus => {
    if (index < currentStep) return '--completed';
    if (index === currentStep) return '--active';
    return '--pending';
  };

  return (
    <div
      className={`stepper stepper--${theme} stepper${device} stepper${style} ${className}`}
      role="progressbar"
      aria-valuenow={currentStep}
      aria-valuemin={0}
      aria-valuemax={steps.length - 1}
    >
      <div className="stepper__container">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <button
              className={`stepper__step stepper__step--${getStepStatus(index)}`}
              onClick={() => onStepClick?.(index)}
              aria-label={`${step.label}, étape ${index + 1} sur ${steps.length}`}
              type="button"
            >
              <span className="stepper__step-number">
                {getStepStatus(index) === '--completed' ? '✓' : index + 1}
              </span>
              <span className="stepper__step-label">{step.label}</span>
            </button>
            {index < steps.length - 1 && (
              <div
                className={`stepper__connector stepper__connector--${
                  index + 1 <= currentStep ? '--completed' : '--pending'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
