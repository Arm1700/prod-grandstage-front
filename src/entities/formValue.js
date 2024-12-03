export const formValue = {
    input: [{
        name: "studentName", label: "Student’s Name", type: "text", placeholder: "Student’s Name", required: true
    }, {
        name: "dob",
        label: "Date of Birth (MM/DD/YYYY)",
        type: "date",
        placeholder: "Date of Birth (MM/DD/YYYY)",
        required: true
    }, {name: "address", label: "Mailing Address", type: "text", placeholder: "Mailing Address", required: true}, {
        name: "primaryPhone",
        label: "Primary Phone",
        type: "tel",
        placeholder: "Primary Phone",
        required: true,
        pattern: /^\+?\d+$/
    }, {
        name: "secondaryPhone",
        label: "Secondary Phone (optional)",
        type: "tel",
        placeholder: "Secondary Phone (optional)",
        required: false
    }, {
        name: "parentName", label: "Parent’s Full Name", type: "text", placeholder: "Parent’s Full Name", required: true
    }, {
        name: "email",
        label: "Primary Email Address",
        type: "email",
        placeholder: "Primary Email Address",
        required: true
    }, {
        name: "emergencyContact",
        label: "Emergency Contact",
        type: "text",
        placeholder: "Emergency Contact",
        required: true
    }, {
        name: "minorName", label: "Name of Minor", type: "text", placeholder: "Name of Minor", required: true
    }, {
        name: "minorAge", label: "Age of Minor", type: "number", placeholder: "Age of Minor", required: true
    }, {
        name: "signature",
        label: "Signature of Parent/Guardian/Registrant",
        type: "text",
        placeholder: "Signature",
        required: true
    }, {
        name: "date", label: "Date", type: "date", placeholder: "Date", required: true
    }, {
        name: "Zelle",
        label: "Pay with Zelle",
        type: "text",
        placeholder: "Pay with Zelle",
        value: '747-236-888',
        disabled: true,
        required: false,
        bold:'font-bold',
        bgColor:'bg-zelle',
        color:'text-white',
        size:'text-xl'
    }], check: {
        name: "policies",
        label: "Policy Acceptance (please initial)",
        type: "checkbox",
        options: ["I/we understand the Studio Policies", "I/we understand my billing obligations", "I/we understand the risks related to dance", "I/we understand my responsibilities for my property", "I/we understand the dress code", "I/we understand the schedule", "I/we give media use rights permission", "I/we understand the attendance policy",],
        required: true
    },

    // Отказ от ответственности
    waiver: {
        name: "waiver",
        label: "Waiver and Release",
        type: "textarea",
        value: "Waiver, Release, Insurance and Assurances\n\nThe Enrollee does understand that these Activities involve certain inherent risks and dangers of physical injury to the participant. The Enrollee also understands that there are potential risks and dangers that may presently be unknown to the parties. The Enrollee acknowledges that the participant voluntarily elects to partake in these Activities with knowledge of the potential risks and dangers involved, and hereby knowingly and voluntarily agrees to accept and assume forever any and all risks and potential dangers of personal injury, property damage, or wrongful death.\n\nRelease of Liability. In consideration for being allowed to voluntarily participate in the above-referenced Activities, the Enrollee, his/her personal representatives, family members, heirs, assigns, beneficiaries, successors of interest, administrators, and executors (herein singly and collectively referred to as “Releasers”), do hereby voluntarily agree to: (a) release, waive, discharge GRAND STAGE, its heirs, executors, administrators, successors, or assigns (herein singly and collectively referred as “Releases”) from any and all liability for the participant’s death, disability, personal injury, property damages, property theft or claims of any nature which may hereafter accrue to the participant, and the participant’s estate as a direct or indirect result of participation in the Activities; and (b) defend, indemnify, and hold harmless Releases from and against any and all claims of any nature including all costs, expenses and attorneys’ fees, which in any manner result from participant’s actions during these Activities.\n\nAssurance of Good Health. The Enrollee certifies and attests that the participant is in good physical condition to take part in the above-referenced Activities and that he/she has been examined by a licensed physician and determined to be in good physical condition for such participation.\n\nMedical Treatment. The Enrollee does hereby authorize GRAND STAGE to procure medical treatment for participant in emergency situations, regardless of whether prior authorizations for such treatment are procured. As such, consent is given for the participant to receive medical treatment, which may be deemed advisable in the event of injury, accident or illness during the Activities.\n\nInsurance and Medical Expenses. The Enrollee shall be responsible for any medical expenses. The Enrollee understands that GRAND STAGE does not insure participants in the above-described Activities; that any coverage would be through personal insurance. This release, indemnification, and waiver shall be construed broadly to provide a release, indemnification, and waiver to the maximum extent permissible under applicable law.\n\nI, THE ENROLLEE, AFFIRM THAT I AM FREELY SIGNING THIS AGREEMENT. I HAVE READ THIS FORM AND FULLY UNDERSTAND THAT BY SIGNING THIS FORM I AM GIVING UP LEGAL RIGHTS AND/OR REMEDIES WHICH MAY OTHERWISE BE AVAILABLE TO MYSELF, THE MINOR PARTICIPANT REGARDING ANY LOSSES THE PARTICIPANT MAY SUSTAIN AS A RESULT OF PARTICIPATION IN THE ACTIVITIES. I AGREE THAT IF ANY PORTION IS HELD INVALID, THE REMAINDER WILL CONTINUE IN FULL LEGAL FORCE AND EFFECT.",
        required: true
    }
};
