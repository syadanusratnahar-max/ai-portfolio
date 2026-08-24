# StudyMate

## Overview

StudyMate is a personal AI assignment-planning agent designed to help university students understand assignment instructions and organize their work into clear, manageable steps.

Students can give StudyMate an assignment brief, and the agent helps them understand what the assignment requires without inventing missing information. It identifies the required deliverables, breaks the work into smaller steps, creates a checklist, and highlights important requirements such as deadlines, files, screenshots, references, and formatting.

StudyMate is designed primarily for university students who may feel overwhelmed by long or complicated assignment instructions.

---

## What StudyMate Does

When a user provides an assignment, StudyMate:

1. Reads the assignment instructions carefully.
2. Explains the assignment in simple language.
3. Identifies the main things the student needs to submit.
4. Breaks the assignment into smaller, manageable steps.
5. Creates a practical checklist.
6. Highlights important requirements such as deadlines, files, screenshots, references, and formatting.
7. Identifies information that is missing or unclear.
8. Avoids inventing requirements, deadlines, sources, or facts.
9. Uses web search only when the user specifically requests research or when external information is required.
10. Clearly distinguishes assignment information from information obtained through web research.

StudyMate does not submit assignments, send messages, or perform irreversible actions. The user remains responsible for reviewing the final work.

---

## Who Is It For?

StudyMate is intended for:

* University students
* Beginner students who need help understanding assignment instructions
* Students who want to organize large assignments into smaller tasks
* Students who want a simple checklist before starting their work

---

## Setup

StudyMate was created as a custom AI project in ChatGPT.

To reproduce the project:

1. Open ChatGPT.
2. Create a new project or custom AI workspace.
3. Name the project **StudyMate**.
4. Add the project instructions describing StudyMate's role and behavior.
5. Save the instructions.
6. Start a new conversation inside the StudyMate project.
7. Paste an assignment brief and ask StudyMate to help organize it.

The core instructions define StudyMate as an assignment-planning agent that explains assignments, identifies deliverables, creates step-by-step plans, and highlights important requirements.

---

## How to Use StudyMate

### Example Input

A student can paste an assignment instruction such as:

> I need to prepare a presentation about artificial intelligence in education. The presentation should include benefits, challenges, real-world examples, and references.

### Example Usage

The student asks StudyMate to analyze the assignment.

StudyMate then provides:

* The main goal of the assignment
* What needs to be completed
* A step-by-step plan
* A checklist
* Important requirements
* Any missing or unclear information

### Example Output Structure

## Assignment Goal

Explain the main purpose of the assignment in simple language.

## What I Need to Do

1. Understand the assignment topic.
2. Identify the required sections.
3. Gather the necessary information.
4. Prepare the required deliverable.
5. Review the requirements before submission.

## Checklist

* [ ] Read the assignment instructions
* [ ] Identify the required deliverables
* [ ] Complete each section
* [ ] Check references and formatting
* [ ] Review the final work before submission

## Important

StudyMate highlights deadlines, required files, screenshots, references, formatting requirements, and information that is missing or unclear.

---

## Simple Architecture

```text
                ┌─────────────────────┐
                │   Student/User      │
                │ Pastes Assignment   │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │      StudyMate      │
                │   AI Instructions   │
                └──────────┬──────────┘
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
   Understand         Organize Work     Identify
   Assignment         into Steps        Requirements
          │                │                │
          └────────────────┼────────────────┘
                           ▼
                ┌─────────────────────┐
                │ Structured Response │
                │ • Goal              │
                │ • Steps             │
                │ • Checklist         │
                │ • Important Notes   │
                └─────────────────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │ User Reviews Final  │
                │ Plan and Work       │
                └─────────────────────┘
```

---

## V2 Evaluation Results

StudyMate was tested using assignment examples to evaluate whether it followed its intended instructions.

The evaluation focused on the following areas:

| Evaluation Area          | Expected Behavior                                                                | Result |
| ------------------------ | -------------------------------------------------------------------------------- | ------ |
| Assignment understanding | Correctly identify the purpose of the assignment                                 | Passed |
| Deliverables             | Identify the main items that need to be submitted                                | Passed |
| Step-by-step planning    | Break the work into manageable steps                                             | Passed |
| Checklist creation       | Create a clear and practical checklist                                           | Passed |
| Important requirements   | Identify deadlines, files, references, screenshots, and formatting when provided | Passed |
| Missing information      | Point out unclear or missing details instead of guessing                         | Passed |
| Hallucination prevention | Avoid inventing deadlines, requirements, sources, or facts                       | Passed |
| User control             | Avoid submitting work or performing irreversible actions                         | Passed |

### Evaluation Summary

The v2 evaluation showed that StudyMate generally performed its main planning tasks successfully. It was able to transform assignment instructions into a clearer structure and provide beginner-friendly guidance.

The evaluation also confirmed the importance of explicit instructions telling the agent not to invent information. When an assignment did not include a deadline or another required detail, StudyMate was expected to identify the missing information rather than make an assumption.

---

## Design Decision

One important design decision was to keep StudyMate focused on **one main purpose: assignment understanding and planning**.

Instead of trying to perform every possible academic task, StudyMate concentrates on helping students understand what they need to do and organizing the work before they begin.

This makes the agent's purpose clearer and helps produce more consistent responses.

Another important decision was to require StudyMate to clearly identify missing or unclear information rather than guessing. This reduces the risk of students relying on invented deadlines or requirements.

---

## Limitations

StudyMate has several limitations:

1. It depends on the information provided by the user. If the assignment instructions are incomplete, StudyMate cannot know the missing requirements.
2. It may not perfectly understand poorly written or highly ambiguous assignment instructions.
3. It does not replace the student's instructor or official course guidelines.
4. It does not automatically know course-specific requirements unless they are provided.
5. It should not be trusted blindly. Users should review the original assignment instructions and final work themselves.
6. Web-based information should be checked separately from the original assignment requirements.

---

## AI Transparency

StudyMate was built with the assistance of AI tools. AI was used as a thinking and development partner while designing the agent instructions, refining the project structure, generating test ideas, and improving the documentation.

I reviewed the agent's purpose, instructions, behavior, testing, and final project materials myself. The final project instructions were chosen and checked to make sure StudyMate stays focused on assignment planning and does not invent missing requirements.

---

## Future Improvements

A future version of StudyMate could include:

* Assignment priority based on deadlines
* Estimated time for each task
* Multi-assignment planning
* A weekly study schedule
* Progress tracking
* Support for different assignment types
* Improved handling of complex or ambiguous assignment instructions

---

## Creator

StudyMate was created as a personal AI Fluency capstone project.

The goal of the project is to demonstrate how a focused AI agent can help students organize their academic work while maintaining user control and being transparent about its limitations.
