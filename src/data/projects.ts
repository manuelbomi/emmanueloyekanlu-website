export type Category =
  | "Agentic AI & LLM Systems"
  | "Computer Vision & Industrial AI"
  | "Data Engineering & MLOps"
  | "Enterprise & Financial AI"
  | "GPU, HPC & Infrastructure"
  | "Geospatial & Supply Chain"
  | "Healthcare & Life Sciences AI"
  | "Enterprise Architecture (Palantir Foundry)"
  | "Semantic Layer, Knowledge Graphs & APIs"
  | "Quality Assurance & Test Automation";

export type Video = {
  title: string;
  driveId: string;
  note?: string;
};

export type Project = {
  slug: string;
  title: string;
  repo: string;
  category: Category;
  description: string;
  tags: string[];
  featured?: boolean;
  videos?: Video[];
};

export const categories: Category[] = [
  "Agentic AI & LLM Systems",
  "Computer Vision & Industrial AI",
  "Data Engineering & MLOps",
  "Enterprise & Financial AI",
  "GPU, HPC & Infrastructure",
  "Geospatial & Supply Chain",
  "Healthcare & Life Sciences AI",
  "Enterprise Architecture (Palantir Foundry)",
  "Semantic Layer, Knowledge Graphs & APIs",
  "Quality Assurance & Test Automation",
];

export const projects: Project[] = [
  // --- Computer Vision & Industrial AI ---
  {
    slug: "industrial-social-distancing-monitor",
    title: "Industrial Social Distancing Monitor",
    repo: "Industrial-Social-Distancing-Monitor",
    category: "Computer Vision & Industrial AI",
    description:
      "COVID-19 social-distancing enforcement tool for industrial floors, built on YOLO with Nvidia Jetson Nano/Xavier and Raspberry Pi. GeoPandas, Fiona, and Shapely were used for floor-plan analysis and geofencing. Streamed IoT data to GCP Pub/Sub, Dataflow, and BigQuery for plant-wide analytics. Delivered at 93% lower cost than a comparable vendor solution.",
    tags: ["YOLO", "Jetson", "GeoPandas", "GCP", "Edge AI"],
    featured: true,
    videos: [
      {
        title: "Open-source beta: industrial social-distancing solution",
        driveId: "1BPpeSBEaW_udq0PmJhfh6bF2m9AIG0KV",
        note: "If playback is blocked, try opening in an incognito browser window.",
      },
    ],
  },
  {
    slug: "vial-tracking-accumulator-table",
    title: "Computer-Vision Vaccine Vial Tracking",
    repo: "Computer-Vision-based-Vial-Tracking-on-Industrial-Accumulator-Table",
    category: "Computer Vision & Industrial AI",
    description:
      "Vaccine-vial tracking system for healthcare manufacturing using Hough Transforms, image segmentation, and CUDA-accelerated OpenCV on a Linux HPC cluster with Nvidia GPUs and C++. Tracks vials reliably across the design pipeline through multiple manufacturing stages.",
    tags: ["OpenCV", "CUDA", "Hough Transforms", "C++", "Healthcare"],
    featured: true,
    videos: [
      {
        title: "Vial pre-tracking",
        driveId: "1SO8cEZXsPzSqdG1jz6MzdhkGUJ7oR-_U",
        note: "If playback is blocked, try opening in an incognito browser window.",
      },
      {
        title: "Vial tracking",
        driveId: "1-YvAQbjPmpLl1IRm3iApavPd9DzurdTY",
        note: "If playback is blocked, try opening in an incognito browser window.",
      },
    ],
  },
  {
    slug: "yolo-vision-benchmark",
    title: "YOLO vs. Vision-AI Model Benchmark",
    repo: "YOLO-vs-Vision-AI-Model-Benchmark-for-Manufacturing-Healthcare-and-Video-Analytics-Monitoring",
    category: "Computer Vision & Industrial AI",
    description:
      "Benchmarks YOLO against CNN, Transformer, and small vision-language models across manufacturing, healthcare, and video-analytics monitoring workloads — accuracy, latency, and throughput trade-offs for real deployment decisions.",
    tags: ["YOLO", "Transformers", "VLM", "Benchmarking"],
    featured: true,
  },
  {
    slug: "rtsp-yolo-video-analytics",
    title: "RTSP YOLO Video Analytics Pipeline",
    repo: "rtsp-yolo-video-analytics-pipeline",
    category: "Computer Vision & Industrial AI",
    description:
      "Real-time video analytics pipeline: RTSP ingestion, YOLOv8 detection and tracking, configurable zone rules, and MQTT/webhook event dispatch for downstream systems.",
    tags: ["RTSP", "YOLOv8", "MQTT", "Real-time"],
  },
  {
    slug: "classical-cv-inspection-toolkit",
    title: "Classical CV Inspection Toolkit",
    repo: "classical-cv-inspection-toolkit",
    category: "Computer Vision & Industrial AI",
    description:
      "Classical OpenCV toolkit — Hough transforms, contour segmentation, and tamper detection — for industrial and security inspection use cases without a neural network in the loop.",
    tags: ["OpenCV", "Classical CV", "Security"],
  },
  {
    slug: "iot-video-event-stream-analytics",
    title: "IoT Video Event Stream Analytics",
    repo: "iot-video-event-stream-analytics",
    category: "Computer Vision & Industrial AI",
    description:
      "Streaming analytics service that turns vision events into rolling statistics, Z-score anomaly alerts, and a live occupancy dashboard.",
    tags: ["Streaming", "Anomaly Detection", "Dashboards"],
  },
  {
    slug: "camera-network-discovery-toolkit",
    title: "Camera Network Discovery Toolkit",
    repo: "camera-network-discovery-toolkit",
    category: "Computer Vision & Industrial AI",
    description:
      "CLI toolkit for discovering ONVIF/RTSP cameras, checking stream and network health, and generating a site-survey report for vision-AI deployments.",
    tags: ["ONVIF", "RTSP", "CLI"],
  },
  {
    slug: "video-infrastructure-capacity-planner",
    title: "Video Infrastructure Capacity Planner",
    repo: "video-infrastructure-capacity-planner",
    category: "Computer Vision & Industrial AI",
    description:
      "Sizing calculator for camera/AI-vision deployments — bandwidth, storage, and GPU requirements — with a customer-ready report output.",
    tags: ["Capacity Planning", "GPU Sizing"],
  },

  // --- Agentic AI & LLM Systems ---
  {
    slug: "graphrag-financial-institutions",
    title: "Agentic GraphRAG for Financial Institutions",
    repo: "Agentic-GraphRAG-for-Financial-Institutions-Secure-LLM-Query-Systems-for-Financial-Systems",
    category: "Agentic AI & LLM Systems",
    description:
      "Secure, agentic GraphRAG query systems for banking, fraud detection, tax analytics, and financial reconciliation — designed for auditability and least-privilege data access.",
    tags: ["GraphRAG", "Agentic AI", "Financial Services", "Security"],
    featured: true,
  },
  {
    slug: "graphrag-fraud-investigation",
    title: "Agentic GraphRAG for Financial Fraud Investigation",
    repo: "Agentic-GraphRAG-for-Financial-Fraud-Investigation",
    category: "Agentic AI & LLM Systems",
    description:
      "Secure LLM systems for enterprise banking, compliance, and risk analysis, applying GraphRAG to fraud investigation workflows.",
    tags: ["GraphRAG", "Fraud", "Compliance"],
  },
  {
    slug: "langgraph-research-report-assistant",
    title: "LangGraph Research & Report Assistant",
    repo: "LangGraph-based-Research-Report-Assistant",
    category: "Agentic AI & LLM Systems",
    description:
      "Tutorial-grade, cyclic, human-in-the-loop research and report assistant built on LangGraph with FastAPI, Postgres checkpointing, and a React/SSE front end.",
    tags: ["LangGraph", "FastAPI", "Human-in-the-loop"],
  },
  {
    slug: "langgraph-clinical-documentation",
    title: "LangGraph Clinical Documentation Assistant",
    repo: "LangGraph-based-Clinical-Documentation-Assistant",
    category: "Agentic AI & LLM Systems",
    description:
      "Clinical documentation and discharge-summary assistant that structures clinician notes, suggests ICD-10 codes, and generates compliant summaries.",
    tags: ["LangGraph", "Healthcare", "NLP"],
  },
  {
    slug: "langgraph-invoice-receipt-audit",
    title: "LangGraph Invoice/Receipt Audit & Reconciliation Assistant",
    repo: "LangGraph-based-Invoice-Receipt-Audit-Reconciliation-Assistant",
    category: "Agentic AI & LLM Systems",
    description: "Agentic reconciliation assistant that audits invoices and receipts against source records and flags discrepancies for review.",
    tags: ["LangGraph", "Finance", "Audit"],
  },
  {
    slug: "langgraph-tax-document-intake",
    title: "LangGraph Tax Document Intake & Classification Assistant",
    repo: "LangGraph-base-Tax-Document-Intake-Classification-Assistant",
    category: "Agentic AI & LLM Systems",
    description: "Classifies and routes incoming tax documents using a LangGraph agent pipeline, reducing manual document triage.",
    tags: ["LangGraph", "Document AI", "Tax"],
  },
  {
    slug: "langgraph-prior-authorization",
    title: "LangGraph Prior Authorization & Claims Documentation Assistant",
    repo: "LangGraph-based-Prior-Authorization-Claims-Documentation-Assistant",
    category: "Agentic AI & LLM Systems",
    description: "Automates prior-authorization and claims documentation workflows for healthcare payers and providers.",
    tags: ["LangGraph", "Healthcare", "Claims"],
  },
  {
    slug: "langgraph-lng-plant-operations",
    title: "LangGraph LNG Plant Operations Copilot",
    repo: "LangGraph-based-LNG-Plant-Operations-Copilot",
    category: "Agentic AI & LLM Systems",
    description: "Operations copilot for LNG plant workflows, pairing LangGraph orchestration with plant operating procedures and telemetry context.",
    tags: ["LangGraph", "Energy", "Operations"],
  },
  {
    slug: "loan-adjudication-multi-agent",
    title: "Explainable Loan Adjudication (Multi-Agent)",
    repo: "A-LangGraph-Multi-Agent-System-for-Explainable-Loan-Adjudication",
    category: "Agentic AI & LLM Systems",
    description: "Multi-agent LangGraph system for loan adjudication that produces explainable, auditable lending decisions.",
    tags: ["LangGraph", "Explainability", "Lending"],
  },
  {
    slug: "risk-desk-debate-engine",
    title: "Risk Desk Debate Engine (AutoGen)",
    repo: "Risk-Desk-Debate-Engine-An-AutoGen-Multi-Agent-Critique-and-Refine-System-for-Market-Credit-Risk-",
    category: "Agentic AI & LLM Systems",
    description: "AutoGen-based multi-agent critique-and-refine system that debates and stress-tests market and credit risk assessments.",
    tags: ["AutoGen", "Risk", "Multi-agent"],
  },
  {
    slug: "resilient-orchestration-core",
    title: "Resilient Orchestration Core",
    repo: "Resilient-Orchestration-Core-A-Framework-Agnostic-Multi-Agent-Engine-for-Regulated-Financial-Workfl",
    category: "Agentic AI & LLM Systems",
    description: "Framework-agnostic multi-agent orchestration engine built for regulated financial workflows.",
    tags: ["Orchestration", "Financial Services", "Resilience"],
  },
  {
    slug: "mcp-enterprise-tool-gateway",
    title: "MCP Enterprise Tool Gateway",
    repo: "MCP-Enterprise-Tool-Gateway-A-Governed-Model-Context-Protocol-Server-for-Bank-Grade-Agent-Tool-Acce",
    category: "Agentic AI & LLM Systems",
    description: "Governed Model Context Protocol (MCP) server providing bank-grade, access-controlled tool access for LLM agents.",
    tags: ["MCP", "Governance", "Banking"],
    featured: true,
  },
  {
    slug: "mcp-enterprise-financial-gateway",
    title: "MCP Enterprise Financial Gateway",
    repo: "MCP-Enterprise-Financial-Gateway---A-Production-Ready-Framework-for-Regulated-Financial-Environments",
    category: "Agentic AI & LLM Systems",
    description: "A professional, production-ready MCP framework template for auditing, banking, and tax-compliance environments.",
    tags: ["MCP", "Compliance", "Banking"],
  },
  {
    slug: "wealth-advisory-copilot",
    title: "Wealth Advisory Copilot (OpenAI Assistants API)",
    repo: "Wealth-Advisory-Copilot-An-OpenAI-Assistants-API-System-for-Portfolio-Guidance-with-Compliance-Guar",
    category: "Agentic AI & LLM Systems",
    description: "Portfolio-guidance copilot built on the OpenAI Assistants API with compliance guardrails for wealth-advisory use cases.",
    tags: ["OpenAI Assistants API", "Wealth Management", "Compliance"],
  },
  {
    slug: "langchain-rag-financial-compliance",
    title: "LangChain RAG Financial Regulation Compliance Assistant",
    repo: "Langchain-RAG-Financial-Regulation-Compliance-Assistant",
    category: "Agentic AI & LLM Systems",
    description: "RAG assistant over financial-regulation corpora to answer compliance questions with grounded citations.",
    tags: ["LangChain", "RAG", "Compliance"],
  },
  {
    slug: "crewai-multi-agent-tutorial",
    title: "CrewAI Multi-Agent Orchestration Tutorial",
    repo: "CrewAI-Multi-Agent-Orchestration-A-Practical-Tutorial",
    category: "Agentic AI & LLM Systems",
    description: "A practical, hands-on tutorial for building multi-agent CrewAI systems from first principles.",
    tags: ["CrewAI", "Tutorial", "Multi-agent"],
  },
  {
    slug: "crewai-manufacturing-quality-crew",
    title: "CrewAI Manufacturing Quality Crew",
    repo: "CrewAI-Manufacturing-Quality-Crew",
    category: "Agentic AI & LLM Systems",
    description: "CrewAI agent crew for manufacturing quality workflows — inspection triage, root-cause drafting, and reporting.",
    tags: ["CrewAI", "Manufacturing", "Quality"],
  },
  {
    slug: "crewai-lng-maintenance-crew",
    title: "CrewAI LNG Maintenance Crew",
    repo: "CrewAI-LNG-Maintenance-Crew",
    category: "Agentic AI & LLM Systems",
    description: "CrewAI agent crew supporting predictive-maintenance workflows for LNG plant operations.",
    tags: ["CrewAI", "Energy", "Maintenance"],
  },
  {
    slug: "thoughtful-ai-support-assistant",
    title: "Thoughtful AI — Intelligent Support Assistant",
    repo: "Thoughtful-AI-Intelligent-Support-Assistant",
    category: "Agentic AI & LLM Systems",
    description: "An intelligent, LLM-driven support assistant designed for grounded, low-hallucination customer support.",
    tags: ["LLM", "Support Automation"],
  },

  // --- Data Engineering & MLOps ---
  {
    slug: "lakehouse-forecasting-mlops-platform",
    title: "Lakehouse Forecasting MLOps Platform",
    repo: "Lakehouse-Forecasting-MLOps-Platform_v2",
    category: "Data Engineering & MLOps",
    description:
      "End-to-end lakehouse forecasting platform — medallion-architecture ingestion, feature pipelines, model training, and MLOps tracking for demand-forecasting workloads.",
    tags: ["Lakehouse", "Forecasting", "MLOps"],
    featured: true,
  },
  {
    slug: "parcel-demand-forecasting-workbench",
    title: "Parcel Demand Forecasting Workbench",
    repo: "Parcel-Demand-Forecasting-Workbench",
    category: "Data Engineering & MLOps",
    description: "Forecasting workbench for parcel-volume demand planning, supporting scenario analysis and capacity decisions.",
    tags: ["Forecasting", "Logistics"],
  },
  {
    slug: "parcel-volume-forecasting",
    title: "Parcel Volume Forecasting",
    repo: "parcel-volume-forecasting",
    category: "Data Engineering & MLOps",
    description: "Time-series forecasting models for parcel-volume prediction to support network capacity planning.",
    tags: ["Time Series", "Logistics"],
  },
  {
    slug: "forecast-driven-capacity-optimizer",
    title: "Forecast-Driven Capacity Optimizer",
    repo: "Forecast-Driven-Capacity-Optimizer",
    category: "Data Engineering & MLOps",
    description: "Optimization engine that converts demand forecasts into capacity and staffing recommendations.",
    tags: ["Optimization", "Capacity Planning"],
  },
  {
    slug: "mlops-testing-framework",
    title: "MLOps Testing Framework",
    repo: "mlops-testing-framework",
    category: "Data Engineering & MLOps",
    description: "Testing framework for ML pipelines covering data validation, drift detection, and model-quality gates in CI/CD.",
    tags: ["MLOps", "Testing", "CI/CD"],
  },
  {
    slug: "ops-knowledge-rag-assistant",
    title: "Ops Knowledge RAG Assistant",
    repo: "ops-knowledge-rag-assistant",
    category: "Data Engineering & MLOps",
    description: "RAG assistant over operational knowledge bases for faster incident triage and runbook retrieval.",
    tags: ["RAG", "Operations"],
  },
  {
    slug: "dbt-databricks-enterprise-blueprint",
    title: "dbt + Databricks Enterprise Blueprint",
    repo: "dbt-Databricks-Enterprise-Blueprint-Unity-Catalog-Data-Quality-and-Scalable-Architecture",
    category: "Data Engineering & MLOps",
    description: "Reference blueprint for dbt on Databricks with Unity Catalog governance, data-quality testing, and scalable warehouse architecture.",
    tags: ["dbt", "Databricks", "Unity Catalog"],
  },
  {
    slug: "enterprise-dbt-databricks-accelerator",
    title: "Enterprise dbt/Databricks Accelerator",
    repo: "Enterprise-dbt-Databricks-Accelerator-Incremental-Loading-and-AI-Ready-Data-Architecture",
    category: "Data Engineering & MLOps",
    description: "Accelerator for incremental-loading pipelines and AI-ready data architecture on dbt and Databricks.",
    tags: ["dbt", "Databricks", "Incremental Loading"],
  },
  {
    slug: "enterprise-airflow-docker-setup",
    title: "Enterprise Airflow + Docker Setup",
    repo: "Enterprise-Airflow-Docker-Setup-for-Data-Engineering-and-MLOps",
    category: "Data Engineering & MLOps",
    description: "Production-style, containerized Airflow setup for orchestrating data-engineering and MLOps pipelines.",
    tags: ["Airflow", "Docker", "Orchestration"],
  },
  {
    slug: "real-time-iot-kafka-spark",
    title: "Real-Time IoT Data Engineering — Kafka & Spark Structured Streaming",
    repo: "Real-Time-IoT-Data-Engineering-with-Kafka-and-Spark-Structured-Streaming-",
    category: "Data Engineering & MLOps",
    description:
      "Solution architecture for machine and IoT data pipelines — the design pattern behind the Factory Pulse Industrial-IoT proof of concept: streaming ingestion, per-machine state, rolling FFTs, and threshold-based alerting from factory-floor devices to the cloud.",
    tags: ["Kafka", "Spark Structured Streaming", "IIoT"],
    featured: true,
    videos: [
      {
        title: "Factory Pulse — Industrial IoT data platform (conceptual PoC)",
        driveId: "1SAEhF3z0nJZ051XzhvcHlN1BecL0YGsS",
        note: "If playback is blocked, try opening in an incognito browser window.",
      },
    ],
  },
  {
    slug: "econollm-tracer",
    title: "EconoLLM-Tracer: Affordable LLM Fine-Tuning for Traceability Data",
    repo: "EconoLLM-Tracer-Affordable-LLM-Fine-Tuning-for-Enterprise-Traceability-Data",
    category: "Data Engineering & MLOps",
    description: "Cost-efficient fine-tuning approach for LLMs applied to enterprise traceability data.",
    tags: ["Fine-tuning", "LLM", "Traceability"],
  },
  {
    slug: "enterprise-open-weight-llm-finetuning",
    title: "Enterprise Open-Weight LLM Fine-Tuning & GPU Optimization",
    repo: "Enterprise-Open-Weight-LLM-Fine-Tuning-GPU-Optimization",
    category: "GPU, HPC & Infrastructure",
    description: "GPU-optimized fine-tuning workflows for open-weight LLMs in enterprise settings.",
    tags: ["Fine-tuning", "GPU", "Open-weight LLMs"],
  },
  {
    slug: "demand-ops-platform",
    title: "Demand Ops Platform",
    repo: "demand-ops-platform",
    category: "Data Engineering & MLOps",
    description: "Operational platform tying demand signals to planning and fulfillment workflows.",
    tags: ["Demand Planning", "Operations"],
  },
  {
    slug: "workforce-capacity-optimization",
    title: "Workforce Capacity Optimization",
    repo: "workforce-capacity-optimization",
    category: "Data Engineering & MLOps",
    description: "Optimization models for aligning workforce capacity with forecasted operational demand.",
    tags: ["Optimization", "Workforce Planning"],
  },
  {
    slug: "conversational-llm-finetuning-sft-dpo-lora",
    title: "Conversational LLM Fine-Tuning: SFT + DPO + LoRA",
    repo: "conversational-llm-finetuning-sft-dpo-lora",
    category: "Data Engineering & MLOps",
    description:
      "End-to-end fine-tuning pipeline — synthetic data generation, supervised fine-tuning, DPO preference optimization, and LoRA/QLoRA merge and export — that turns a base model into a conversational-signal classifier and compliant-response suggester, runnable on a CPU in minutes.",
    tags: ["Fine-tuning", "LoRA", "DPO", "SFT"],
  },
  {
    slug: "golden-dataset-eval-framework",
    title: "Golden Dataset & Evaluation Framework",
    repo: "golden-dataset-eval-framework",
    category: "Data Engineering & MLOps",
    description:
      "Turns raw conversation snippets into a golden dataset using measured inter-annotator agreement (Cohen's/Fleiss' kappa) and model-calibration metrics (Expected Calibration Error), paired with a CI-usable eval gate that blocks a model or prompt version from shipping if it regresses.",
    tags: ["Evaluation", "MLOps", "CI/CD"],
  },

  // --- Enterprise & Financial AI ---
  {
    slug: "podman-secure-financial-ai-deployment",
    title: "Podman Secure Financial Services AI Deployment Framework",
    repo: "Podman-Secure-Financial-Services-AI-Deployment-Framework",
    category: "Enterprise & Financial AI",
    description: "Enterprise-grade framework demonstrating Podman's security advantages for deploying AI-powered financial applications in regulated environments.",
    tags: ["Podman", "Containers", "Financial Services"],
  },
  {
    slug: "podman-credit-scoring-audit-platform",
    title: "Podman-Based Credit Scoring AI Audit Platform",
    repo: "Podman-based-Credit-Scoring-AI-Audit-Platform-for-Financial-Services-Applications",
    category: "Enterprise & Financial AI",
    description: "Production-ready credit-scoring AI platform demonstrating secure, containerized deployment of XGBoost models for financial services.",
    tags: ["Podman", "XGBoost", "Credit Scoring"],
    featured: true,
  },
  {
    slug: "graphrag-enterprise-financial-systems",
    title: "GraphRAG for Enterprise Financial Systems",
    repo: "GraphRAG-for-Enterprise-Financial-Systems----Querying-Banking-and-Financial-Data-Without-Moving-It",
    category: "Enterprise & Financial AI",
    description: "GraphRAG architecture for querying banking and financial data in place, without centralizing or moving sensitive records.",
    tags: ["GraphRAG", "Data Governance", "Banking"],
  },
  {
    slug: "enterprise-financial-ai-audit-anomaly",
    title: "Enterprise Financial AI — Hybrid Audit Anomaly Detection",
    repo: "Enterprise-Financial-AI----A-Hybrid-Audit-Anomaly-Detection-Framework",
    category: "Enterprise & Financial AI",
    description: "Hybrid statistical + ML anomaly-detection framework for financial audit workflows.",
    tags: ["Anomaly Detection", "Audit"],
  },
  {
    slug: "ai-driven-predictive-maintenance-gmp",
    title: "AI-Driven Predictive Maintenance for GMP Manufacturing",
    repo: "AI-Driven-Predictive-Maintenance-for-GMP-Manufacturing-with-Automated-Regulatory-Compliance",
    category: "Enterprise & Financial AI",
    description: "Predictive-maintenance system for GMP manufacturing with automated regulatory compliance covering GAMP 5, ALCOA+, FDA CFR Part 11, and EU GMP Annex 11.",
    tags: ["GMP", "Predictive Maintenance", "Compliance"],
  },
  {
    slug: "enterprise-ai-governance",
    title: "Enterprise AI Governance",
    repo: "Enterprise-AI-Governance",
    category: "Enterprise & Financial AI",
    description: "Governance framework and controls for enterprise AI adoption — policy, oversight, and audit trails.",
    tags: ["Governance", "AI Policy"],
  },
  {
    slug: "ai-governance-controls",
    title: "AI Governance Controls",
    repo: "AI-Governance-Controls",
    category: "Enterprise & Financial AI",
    description: "Implementable controls library for enforcing AI governance requirements across enterprise systems.",
    tags: ["Governance", "Controls"],
  },
  {
    slug: "ai-security-red-team-toolkit",
    title: "AI Security Red-Team Toolkit",
    repo: "AI-Security-Red-Team-Toolkit",
    category: "Enterprise & Financial AI",
    description: "Toolkit for red-teaming AI/LLM systems — prompt injection, data exfiltration, and jailbreak testing.",
    tags: ["AI Security", "Red Team"],
  },
  {
    slug: "llm-security-lab",
    title: "LLM Security Lab",
    repo: "LLM-Security-Lab",
    category: "Enterprise & Financial AI",
    description: "Hands-on lab environment for studying and mitigating LLM-specific security vulnerabilities.",
    tags: ["LLM Security", "Lab"],
  },
  {
    slug: "multi-tenant-ai-platform",
    title: "Multi-Tenant AI Platform",
    repo: "Multi-Tenant-AI-Platform",
    category: "Enterprise & Financial AI",
    description: "Reference architecture for a multi-tenant AI platform with tenant isolation and per-tenant governance.",
    tags: ["Multi-tenancy", "Platform Architecture"],
  },
  {
    slug: "enterprise-ai-platform",
    title: "Enterprise AI Platform",
    repo: "Enterprise-AI-Platform",
    category: "Enterprise & Financial AI",
    description: "Foundational platform scaffolding for standing up enterprise-grade AI services.",
    tags: ["Platform Engineering"],
  },
  {
    slug: "enterprise-ai-unified-management-platform",
    title: "Enterprise AI Unified Management Platform",
    repo: "Enterprise-AI-Unified-General-Management-Platform",
    category: "Enterprise & Financial AI",
    description: "Unified management plane for coordinating enterprise AI services, quotas, and lifecycle.",
    tags: ["Platform Engineering", "Management"],
  },
  {
    slug: "gen-ai-platform-console",
    title: "Gen AI Platform Console",
    repo: "Gen-AI-Platform-Console",
    category: "Enterprise & Financial AI",
    description: "Administrative console for managing generative-AI platform configuration and usage.",
    tags: ["GenAI", "Admin Console"],
  },
  {
    slug: "agentic-workflow-orchestrator",
    title: "Agentic Workflow Orchestrator",
    repo: "Agentic-Workflow-Orchestrator",
    category: "Enterprise & Financial AI",
    description: "Orchestration layer for coordinating agentic workflows across enterprise systems.",
    tags: ["Orchestration", "Agentic AI"],
  },
  {
    slug: "consulting-ai-studio",
    title: "Consulting AI Studio",
    repo: "Consulting-AI-Studio",
    category: "Enterprise & Financial AI",
    description: "Studio scaffolding for rapid, client-facing AI prototyping and delivery.",
    tags: ["Prototyping", "Consulting"],
  },
  {
    slug: "openwebui-ollama-docker",
    title: "Enterprise Generative AI with OpenWebUI + Ollama on Docker",
    repo: "An-Approach-to-Enterprise-Integration-of-Generative-AI-Models-Using-OpenWebUI-and-Ollama-on-Docker",
    category: "Enterprise & Financial AI",
    description: "Approach for integrating open-source generative AI (OpenWebUI + Ollama) into enterprise environments using Docker.",
    tags: ["OpenWebUI", "Ollama", "Docker"],
  },
  {
    slug: "end-to-end-llm-aks-deployment",
    title: "End-to-End LLM App Deployment on Azure AKS",
    repo: "End-to-End-LLM-App-Deployment-on-Azure-Kubernetes-Service-AKS-with-Streamlit-Prometheus-Grafana",
    category: "Enterprise & Financial AI",
    description: "Full deployment pipeline for an LLM application on Azure Kubernetes Service, with Streamlit UI and Prometheus/Grafana observability.",
    tags: ["Azure AKS", "Kubernetes", "Observability"],
    featured: true,
  },

  // --- GPU, HPC & Infrastructure ---
  {
    slug: "gpu-workload-data-center-decision-framework",
    title: "GPU Workload Data Center Decision Framework",
    repo: "GPU-Workload-Data-Center-Decision-Framework",
    category: "GPU, HPC & Infrastructure",
    description: "Decision framework for sizing and placing GPU workloads across data-center and cloud environments.",
    tags: ["GPU", "Data Center", "Capacity Planning"],
  },
  {
    slug: "gpu-architectures-industry-applications",
    title: "GPU Architectures — Industry Applications",
    repo: "GPU-Architectures-Industry-Applications",
    category: "GPU, HPC & Infrastructure",
    description: "Survey of GPU architecture choices mapped to real industry AI/HPC workloads.",
    tags: ["GPU Architecture", "HPC"],
  },
  {
    slug: "intel-openvino-zero-to-hardware-inference",
    title: "Intel OpenVINO: Zero to Hardware-Accelerated Inference",
    repo: "Intel-OpenVINO-From-Zero-to-Hardware-Accelerated-Inference",
    category: "GPU, HPC & Infrastructure",
    description: "Practical walkthrough of quantizing and serving ONNX/PyTorch/TensorFlow models with OpenVINO across CPU, NPU, and GPU edge targets.",
    tags: ["OpenVINO", "Quantization", "Edge Inference"],
    featured: true,
  },
  {
    slug: "nvidia-hpc-ai-foundation",
    title: "Enterprise-Grade HPC/AI Foundation on Rocky Linux",
    repo: "Nvidia-2.-Enterprise-Grade-HPC-AI-Foundation-Rocky-Linux-NVIDIA-Stack-Kubernetes",
    category: "GPU, HPC & Infrastructure",
    description: "Reference foundation for HPC/AI infrastructure on Rocky Linux with the Nvidia stack and Kubernetes.",
    tags: ["Rocky Linux", "Nvidia", "Kubernetes"],
  },
  {
    slug: "hybrid-edge-cloud-reference-architecture",
    title: "Hybrid Edge/Cloud Reference Architecture",
    repo: "hybrid-edge-cloud-reference-architecture",
    category: "GPU, HPC & Infrastructure",
    description: "Reference architecture for hybrid edge/cloud/on-prem AI workloads, including a tested store-and-forward service for unreliable connectivity.",
    tags: ["Edge Computing", "Hybrid Cloud"],
  },
  {
    slug: "vision-platform-integration-api",
    title: "Vision Platform Integration API",
    repo: "vision-platform-integration-api",
    category: "GPU, HPC & Infrastructure",
    description: "FastAPI integration gateway that normalizes vision-analytics events and dispatches them to pluggable downstream systems.",
    tags: ["FastAPI", "Integration", "Vision AI"],
  },
  {
    slug: "distributed-medical-training",
    title: "Distributed Medical Model Training",
    repo: "distributed-medical-training-",
    category: "GPU, HPC & Infrastructure",
    description: "Distributed training setup for medical imaging models across multi-GPU clusters.",
    tags: ["Distributed Training", "Medical Imaging"],
  },
  {
    slug: "low-latency-llm-serving-benchmark",
    title: "Low-Latency LLM Serving Benchmark",
    repo: "low-latency-llm-serving-benchmark",
    category: "GPU, HPC & Infrastructure",
    description:
      "Reproducible benchmark harness for low-latency LLM serving — a CPU-runnable baseline you can load-test yourself, a documented quantization measurement, and a GPU/vLLM production path behind the same OpenAI-compatible API contract.",
    tags: ["LLM Serving", "vLLM", "Quantization", "Benchmarking"],
  },

  // --- Geospatial & Supply Chain ---
  {
    slug: "last-mile-route-optimization",
    title: "Last-Mile Route Optimization",
    repo: "last-mile-route-optimization",
    category: "Geospatial & Supply Chain",
    description: "Route-optimization models for last-mile delivery networks, balancing cost, time windows, and capacity constraints.",
    tags: ["Route Optimization", "Logistics"],
    featured: true,
  },
  {
    slug: "network-route-dispatch-optimizer",
    title: "Network Route Dispatch Optimizer",
    repo: "Network-Route-Dispatch-Optimizer",
    category: "Geospatial & Supply Chain",
    description: "Dispatch optimization engine for routing decisions across a distribution network.",
    tags: ["Dispatch", "Network Optimization"],
  },
  {
    slug: "agv-amr-geofencing-warehouse",
    title: "AGV/AMR Geofencing for Warehouse Management",
    repo: "AGV-AMR-Geofencing-Geospatial-Warehouse-Management",
    category: "Geospatial & Supply Chain",
    description: "Geospatial geofencing and navigation-zone definition for AGV/AMR fleets inside warehouse and factory environments.",
    tags: ["AGV", "AMR", "Geofencing"],
  },
  {
    slug: "spatial-analysis-geopandas",
    title: "Spatial Analysis with GeoPandas",
    repo: "Spatial-Analysis-with-GeoPandas",
    category: "Geospatial & Supply Chain",
    description: "Applied spatial-analysis techniques with GeoPandas for operational and planning use cases.",
    tags: ["GeoPandas", "Spatial Analysis"],
  },
  {
    slug: "geopandas-fundamentals",
    title: "GeoPandas Fundamentals",
    repo: "GeoPandas-Fundamentals",
    category: "Geospatial & Supply Chain",
    description: "Foundational GeoPandas techniques for geospatial data engineering.",
    tags: ["GeoPandas", "Tutorial"],
  },
  {
    slug: "fiona-shapefile-processing",
    title: "Fiona Shapefile Processing",
    repo: "Fiona-Shapefile-Processing",
    category: "Geospatial & Supply Chain",
    description: "Shapefile ingestion and processing workflows using Fiona.",
    tags: ["Fiona", "Shapefiles"],
  },
  {
    slug: "shapely-geometry-operations",
    title: "Shapely Geometry Operations",
    repo: "shapely-geometry-operations",
    category: "Geospatial & Supply Chain",
    description: "Geometric operations for geofencing, buffering, and spatial joins using Shapely.",
    tags: ["Shapely", "Geometry"],
  },
  {
    slug: "geojson-processing-visualization",
    title: "GeoJSON Processing and Visualization",
    repo: "GeoJSON-Processing-and-Visualization",
    category: "Geospatial & Supply Chain",
    description: "Processing and visualization pipelines for GeoJSON datasets.",
    tags: ["GeoJSON", "Visualization"],
  },
  {
    slug: "large-scale-geospatial-processing",
    title: "Large-Scale Geospatial Processing",
    repo: "Large-Scale-Geospatial-Processing",
    category: "Geospatial & Supply Chain",
    description: "Scalable geospatial-processing patterns for large datasets.",
    tags: ["Geospatial", "Scalability"],
  },
  {
    slug: "feature-extraction-geospatial-shapefiles",
    title: "Feature Extraction from Geospatial Shapefiles",
    repo: "Feature-Extraction-from-Geospatial-Shapefiles",
    category: "Geospatial & Supply Chain",
    description: "Feature-engineering pipeline extracting model-ready features from geospatial shapefile data.",
    tags: ["Feature Engineering", "Shapefiles"],
  },
  {
    slug: "agricultural-zone-mapping",
    title: "Agricultural Zone Mapping",
    repo: "Agricultural-Zone-Mapping",
    category: "Geospatial & Supply Chain",
    description: "Zone-mapping analysis for agricultural land use with geospatial tooling.",
    tags: ["Agriculture", "Zone Mapping"],
  },
  {
    slug: "creating-maps",
    title: "Creating Maps",
    repo: "Creating-Maps",
    category: "Geospatial & Supply Chain",
    description: "Map-generation techniques and cartographic workflows for spatial datasets.",
    tags: ["Cartography", "Mapping"],
  },

  // --- Healthcare & Life Sciences AI ---
  {
    slug: "enterprise-image-fault-diagnosis-faiss",
    title: "Enterprise Image-Based Fault Diagnosis with FAISS Vector Search",
    repo: "Enterprise-Image-based-Fault-Diagnosis-Visual-Similarity-Search-Using-Deep-Learning-and-FAISS-Vect",
    category: "Healthcare & Life Sciences AI",
    description: "Visual similarity search for fault diagnosis using deep-learning embeddings indexed in FAISS for fast nearest-neighbor retrieval.",
    tags: ["FAISS", "Vector Search", "Fault Diagnosis"],
  },
  {
    slug: "gpu-visual-fault-diagnostics-rag",
    title: "GPU-Accelerated Visual Fault Diagnostics with RAG",
    repo: "GPU-Accelerated-Visual-Fault-Diagnostics-with-RAG-Maintenance-PDF-Intelligence",
    category: "Healthcare & Life Sciences AI",
    description: "Vision AI + FAISS-GPU + LLM PDF knowledge retrieval for industrial defect root-cause analysis.",
    tags: ["RAG", "GPU", "Fault Diagnosis"],
    featured: true,
  },
  {
    slug: "medical-foundation-model",
    title: "Medical Foundation Model",
    repo: "medical-foundation-model-",
    category: "Healthcare & Life Sciences AI",
    description: "Foundation-model approach applied to medical imaging tasks, built for downstream fine-tuning.",
    tags: ["Foundation Models", "Medical Imaging"],
  },
  {
    slug: "dicom-preprocessing-pipeline",
    title: "DICOM Data Pre-Processing Pipeline",
    repo: "Dicom-Data-Pre-processing-Pipeline-",
    category: "Healthcare & Life Sciences AI",
    description: "Preprocessing pipeline for DICOM medical imaging data, preparing studies for ML training.",
    tags: ["DICOM", "Medical Imaging"],
  },
  {
    slug: "self-supervised-medical-learning",
    title: "Self-Supervised Learning for Medical Applications",
    repo: "Self-Supervised-Learning-for-Medical-Application",
    category: "Healthcare & Life Sciences AI",
    description: "Self-supervised pretraining techniques applied to medical imaging with limited labeled data.",
    tags: ["Self-Supervised Learning", "Medical Imaging"],
  },
  {
    slug: "mammography-risk-prediction",
    title: "Mammography Risk Prediction",
    repo: "mammography-risk-prediction-",
    category: "Healthcare & Life Sciences AI",
    description: "Risk-prediction modeling from mammography imaging data.",
    tags: ["Mammography", "Risk Prediction"],
  },
  {
    slug: "fda-compliant-ml-pipeline",
    title: "FDA-Compliant ML Pipeline",
    repo: "FDA-Compliant-ML-Pipeline",
    category: "Healthcare & Life Sciences AI",
    description: "ML pipeline scaffolding designed around FDA regulatory-compliance requirements for medical applications.",
    tags: ["FDA Compliance", "MLOps"],
  },
  {
    slug: "medical-image-explainability",
    title: "Medical Image Explainability",
    repo: "-medical-image-explainability-",
    category: "Healthcare & Life Sciences AI",
    description: "Explainability techniques (saliency/attribution methods) applied to medical imaging model predictions.",
    tags: ["Explainability", "Medical Imaging"],
  },
  {
    slug: "enterprise-healthcare-tdm-platform",
    title: "Enterprise Healthcare Test Data Management Platform",
    repo: "enterprise-healthcare-test-data-management-platform",
    category: "Healthcare & Life Sciences AI",
    description: "Full-stack, portfolio-grade Cloud Test Data Management platform for regulated healthcare (React/FastAPI/PySpark): PHI/PII discovery and deterministic masking with referential integrity across 5 heterogeneous systems, production-scale subsetting, synthetic data generation, an automated 12-gate certification pipeline, dataset lifecycle/refresh orchestration, storage/compute capacity planning, RBAC with real JWT authentication, and tamper-evident audit evidence packages. Built as an all-synthetic-data reference implementation with a 20-chapter tutorial and an honest, itemized security-limitations section.",
    tags: ["Test Data Management", "PHI/PII Masking", "FastAPI", "PySpark", "Healthcare Data"],
    featured: true,
  },

  // --- Enterprise Architecture (Palantir Foundry) ---
  {
    slug: "palantir-foundry-fde-playbook",
    title: "Palantir Foundry FDE Playbook (Capstone)",
    repo: "palantir-foundry-fde-playbook",
    category: "Enterprise Architecture (Palantir Foundry)",
    description: "End-to-end Palantir Foundry case study and generalized Forward-Deployed Engineer playbook — the capstone of a 4-part series.",
    tags: ["Palantir Foundry", "FDE", "Case Study"],
    featured: true,
  },
  {
    slug: "palantir-foundry-data-pipelines",
    title: "Palantir Foundry Data Pipelines",
    repo: "palantir-foundry-data-pipelines",
    category: "Enterprise Architecture (Palantir Foundry)",
    description: "Foundry Pipeline Builder walkthrough reframed as a Forward-Deployed Engineer data-integration playbook (Part 1 of 4).",
    tags: ["Palantir Foundry", "Pipeline Builder"],
  },
  {
    slug: "palantir-foundry-ontology",
    title: "Palantir Foundry Ontology",
    repo: "palantir-foundry-ontology",
    category: "Enterprise Architecture (Palantir Foundry)",
    description: "Foundry Ontology Manager walkthrough reframed as a semantic-modeling playbook (Part 2 of 4).",
    tags: ["Palantir Foundry", "Ontology"],
  },
  {
    slug: "palantir-foundry-workshop-apps",
    title: "Palantir Foundry Workshop Apps",
    repo: "palantir-foundry-workshop-apps",
    category: "Enterprise Architecture (Palantir Foundry)",
    description: "Foundry Workshop walkthrough reframed as an operational-app playbook (Part 3 of 4).",
    tags: ["Palantir Foundry", "Workshop"],
  },
  {
    slug: "palantir-foundry-lng-operations",
    title: "Palantir Foundry for LNG Operations",
    repo: "palantir-foundry-lng-operations",
    category: "Enterprise Architecture (Palantir Foundry)",
    description: "Palantir Foundry Workshop mechanics reframed for LNG cargo and terminal operations, using real hands-on screenshots.",
    tags: ["Palantir Foundry", "Energy", "Operations"],
  },
  {
    slug: "lng-kg-ontology-predictive-maintenance",
    title: "LNG Knowledge Graph — Ontology-Driven Predictive Maintenance",
    repo: "LNG-KG-Ontology-Driven-Knowledge-Graph-for-LNG-Plant-Predictive-Maintenance",
    category: "Enterprise Architecture (Palantir Foundry)",
    description: "Ontology-driven knowledge graph for LNG plant predictive maintenance.",
    tags: ["Knowledge Graph", "Ontology", "LNG"],
  },
  {
    slug: "manufacturing-semantic-digital-twin",
    title: "Manufacturing Semantic Digital Twin",
    repo: "Manufacturing-Semantic-Digital-Twin",
    category: "Enterprise Architecture (Palantir Foundry)",
    description: "Semantic digital-twin architecture for manufacturing assets and processes.",
    tags: ["Digital Twin", "Semantic Modeling"],
  },
  {
    slug: "semantics-ontology-engineering-tutorial",
    title: "Semantics & Ontology Engineering — A Practical Tutorial",
    repo: "Semantics-Ontology-Engineering-A-Practical-Tutorial",
    category: "Enterprise Architecture (Palantir Foundry)",
    description: "Practical tutorial on semantics and ontology engineering for enterprise data architecture.",
    tags: ["Ontology", "Semantics", "Tutorial"],
  },

  // --- Semantic Layer, Knowledge Graphs & APIs ---
  {
    slug: "entity-resolution-engine",
    title: "Entity Resolution & Reconciliation Engine",
    repo: "entity-resolution-engine",
    category: "Semantic Layer, Knowledge Graphs & APIs",
    description:
      "Reconciles messy, multi-source infrastructure records (a CMDB export, a cloud-inventory dump, a monitoring heartbeat feed) into unified golden-record entities using custom blocking, multi-field similarity scoring, and configurable survivorship rules — with a human review queue and full field-level provenance and audit trail.",
    tags: ["Entity Resolution", "Data Reconciliation", "FastAPI", "React"],
    featured: true,
  },
  {
    slug: "infra-knowledge-graph",
    title: "Live Infrastructure Knowledge Graph",
    repo: "infra-knowledge-graph",
    category: "Semantic Layer, Knowledge Graphs & APIs",
    description:
      "Neo4j-backed knowledge graph and documented operational ontology for infrastructure topology, reconciling three disparate live feeds (CMDB, service-mesh discovery, telemetry) with staleness/TTL-aware conflict resolution, live WebSocket graph updates, and a blast-radius impact-analysis query.",
    tags: ["Knowledge Graph", "Neo4j", "Ontology", "Real-time"],
    featured: true,
  },
  {
    slug: "semantic-data-pipeline",
    title: "Real-Time Semantic Data Pipeline",
    repo: "semantic-data-pipeline",
    category: "Semantic Layer, Knowledge Graphs & APIs",
    description:
      "Async staged pipeline (ingest → normalize → entity-link → enrich → publish) that turns raw, inconsistent telemetry into a live, queryable semantic layer — consumed by an example rule-based decision agent whose reasoning trace (facts read, rule fired) is shown live on the dashboard.",
    tags: ["Streaming", "Entity Linking", "Agent Reasoning", "FastAPI"],
    featured: true,
  },
  {
    slug: "observability-mcp-gateway",
    title: "Observability MCP Gateway",
    repo: "observability-mcp-gateway",
    category: "Semantic Layer, Knowledge Graphs & APIs",
    description:
      "A remote Model Context Protocol (MCP) server over HTTP/SSE exposing a synthetic observability dataset — logs, latency/error metrics, and alerts for five services — with bearer-token access control, built to learn the remote-MCP pattern instead of the more common local stdio server.",
    tags: ["MCP", "Observability", "HTTP/SSE"],
  },
  {
    slug: "inventory-mcp-toolkit",
    title: "Inventory MCP Toolkit",
    repo: "inventory-mcp-toolkit",
    category: "Semantic Layer, Knowledge Graphs & APIs",
    description:
      "A warehouse/inventory system exposed through the Model Context Protocol — a server (5 tools, a resource, a prompt) and a standalone client, implemented end to end in TypeScript over SQLite, to see exactly how an LLM host and an MCP server talk to each other.",
    tags: ["MCP", "TypeScript", "SQLite"],
  },
  {
    slug: "fulfillment-ops-api",
    title: "Fulfillment Ops API",
    repo: "fulfillment-ops-api",
    category: "Semantic Layer, Knowledge Graphs & APIs",
    description:
      "A layered Express/TypeScript REST API over PostgreSQL modeling a warehouse network — warehouses, SKUs, orders, shipments — seeded with 50,000 realistic orders, with measured query-optimization work and a React analytics dashboard on top.",
    tags: ["REST API", "PostgreSQL", "TypeScript"],
  },
  {
    slug: "service-health-dashboard",
    title: "Service Health Dashboard",
    repo: "service-health-dashboard",
    category: "Semantic Layer, Knowledge Graphs & APIs",
    description:
      "Internal-tooling dashboard for live service health — metrics, alerts, and history — built on a hand-written WebSocket layer (no socket.io) over Express/PostgreSQL so the subscription model and backpressure handling stay visible, with a continuous event simulator keeping it live by default.",
    tags: ["WebSocket", "PostgreSQL", "React"],
  },
  {
    slug: "live-transcription-gateway",
    title: "Live Transcription Gateway",
    repo: "live-transcription-gateway",
    category: "Semantic Layer, Knowledge Graphs & APIs",
    description:
      "Real-time audio transcription gateway — browser mic capture, binary WebSocket streaming, a pluggable speech-to-text provider interface, and live partial/final transcript rendering — runnable fully offline with a mock provider, no API key required.",
    tags: ["WebSocket", "Real-time", "Speech-to-Text"],
  },

  // --- Additional Agentic AI / tooling ---
  {
    slug: "google-adk-tutorial",
    title: "Google ADK",
    repo: "Google-ADK",
    category: "Agentic AI & LLM Systems",
    description: "Working examples and patterns using Google's Agent Development Kit (ADK) for building agentic applications.",
    tags: ["Google ADK", "Agentic AI"],
  },
  {
    slug: "google-adk-banking-agents",
    title: "Google ADK Agents — Customer Servicing & Fraud Triage",
    repo: "Google-ADK-Agents-for-Customer-Servicing-Fraud-Alert-Triage-for-Retail-Banking",
    category: "Agentic AI & LLM Systems",
    description:
      "Hierarchical customer-servicing agent and a fixed-pipeline fraud-triage agent built on Google's Agent Development Kit, with PII-redaction guardrails, an audit trail, and a mandatory human sign-off before a fraud call becomes final — production-hardened with config, logging, containerization, and CI rather than left as a notebook demo.",
    tags: ["Google ADK", "Agentic AI", "Banking", "Governance"],
  },
  {
    slug: "real-time-conversation-signal-copilot",
    title: "Real-Time Conversation Signal Copilot",
    repo: "real-time-conversation-signal-copilot",
    category: "Agentic AI & LLM Systems",
    description:
      "Live conversation-intelligence assistant that tags streamed conversation turns with multi-label signals, retrieves a grounded next-best-action recommendation via FAISS-backed RAG with citations, and enforces a compliance guardrail that withholds — rather than silently rewrites — a recommendation it can't clear.",
    tags: ["RAG", "Guardrails", "WebSocket", "FastAPI"],
  },
  {
    slug: "realtime-streaming-asr-diarization-pipeline",
    title: "Real-Time Streaming ASR + Diarization Pipeline",
    repo: "realtime-streaming-asr-diarization-pipeline",
    category: "Agentic AI & LLM Systems",
    description:
      "Voice-activity-gated audio pipeline that turns a raw microphone stream into timestamped, speaker-attributed transcript events in real time — VAD chunking, streaming speech-to-text (faster-whisper), lightweight diarization, and a WebSocket event feed designed to feed straight into a live conversation copilot.",
    tags: ["ASR", "Diarization", "Streaming", "Whisper"],
  },
  {
    slug: "crew-ai-fraud",
    title: "CrewAI Fraud Detection",
    repo: "crew-ai-fraud",
    category: "Agentic AI & LLM Systems",
    description: "CrewAI agent crew applied to fraud-detection triage and investigation workflows.",
    tags: ["CrewAI", "Fraud Detection"],
  },
  {
    slug: "crewai-market-intelligence-starter",
    title: "CrewAI Market Intelligence Starter",
    repo: "CrewAI-Market-Intelligence-Starter",
    category: "Agentic AI & LLM Systems",
    description: "Starter template for building market-intelligence agent crews with CrewAI.",
    tags: ["CrewAI", "Market Intelligence"],
  },
  {
    slug: "langchain-financial-document-pipeline",
    title: "LangChain-Based Financial Document Pipeline",
    repo: "LangChain-Based-Financial-Document-Pipeline",
    category: "Agentic AI & LLM Systems",
    description: "Document-processing pipeline for financial records built on LangChain.",
    tags: ["LangChain", "Document Processing"],
  },
  // --- Real-time conversation intelligence ---
  {
    slug: "real-time-conversation-signal-copilot",
    title: "Real-Time Conversation Signal Copilot",
    repo: "real-time-conversation-signal-copilot",
    category: "Agentic AI & LLM Systems",
    description:
      "Streams live conversation turns, tags multi-label conversational signals (objection, buying signal, compliance risk, question, action item) with a self-consistency confidence score, retrieves grounded next-best-action recommendations from an approved knowledge base via RAG with citations, and enforces a compliance guardrail layer that withholds and flags rather than silently rewrites non-compliant output.",
    tags: ["FastAPI", "WebSocket", "RAG", "Guardrails", "React"],
    featured: true,
  },
  {
    slug: "conversational-llm-finetuning-sft-dpo-lora",
    title: "Conversational LLM Fine-Tuning — SFT + DPO + LoRA/QLoRA",
    repo: "conversational-llm-finetuning-sft-dpo-lora",
    category: "Agentic AI & LLM Systems",
    description:
      "End-to-end, CPU-runnable fine-tuning pipeline that turns a small instruct model into a conversational signal classifier and compliant-response suggester: synthetic data generation, LoRA-based supervised fine-tuning, DPO preference optimization continuing the SFT adapter, an evaluation harness, and a merge/export step for serving, with a production fine-tuning and promotion playbook.",
    tags: ["SFT", "DPO", "LoRA", "PEFT", "HuggingFace"],
    featured: true,
  },
  {
    slug: "golden-dataset-eval-framework",
    title: "Golden Dataset & Evaluation Framework",
    repo: "golden-dataset-eval-framework",
    category: "Agentic AI & LLM Systems",
    description:
      "Human-in-the-loop golden-dataset annotation workflow for conversational AI, with Cohen's/Fleiss' kappa inter-annotator agreement and Expected Calibration Error implemented from scratch, plus a CI-enforced evaluation gate that fails a build when a model or prompt version regresses against the golden set.",
    tags: ["Evaluation", "Annotation", "Calibration", "CI/CD Gate"],
  },
  {
    slug: "low-latency-llm-serving-benchmark",
    title: "Low-Latency LLM Serving Benchmark",
    repo: "low-latency-llm-serving-benchmark",
    category: "Agentic AI & LLM Systems",
    description:
      "Reference architecture and reproducible benchmark harness for low-latency LLM serving: a CPU baseline streaming server, real quantization and concurrency measurements, Kubernetes autoscaling manifests, and a documented vLLM/continuous-batching production path.",
    tags: ["LLM Serving", "vLLM", "Quantization", "Kubernetes"],
  },
  {
    slug: "realtime-streaming-asr-diarization-pipeline",
    title: "Real-Time Streaming ASR + Diarization Pipeline",
    repo: "realtime-streaming-asr-diarization-pipeline",
    category: "Agentic AI & LLM Systems",
    description:
      "Chunked audio ingestion with voice-activity-gated buffering, faster-whisper streaming transcription, and a lightweight speaker-turn diarizer, emitting timestamped speaker-attributed transcript events designed to feed directly into a real-time conversation-signal pipeline.",
    tags: ["ASR", "faster-whisper", "Diarization", "Streaming"],
  },

  // --- Quality Assurance & Test Automation ---
  {
    slug: "selenium-playwright-test-automation",
    title: "Selenium & Playwright Test Automation Tutorials",
    repo: "Selenium-Playwright-Test-Automation-Tutorials",
    category: "Quality Assurance & Test Automation",
    description:
      "6-part tutorial series on Selenium and Playwright test automation in Python — from fundamentals through pytest, CI/CD-ready patterns, and AI-agent-driven testing with Claude Code and MCP.",
    tags: ["Selenium", "Playwright", "pytest", "Test Automation", "CI/CD"],
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function projectsByCategory(category: Category) {
  return projects.filter((p) => p.category === category);
}
