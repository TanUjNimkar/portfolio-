import os
from flask import Flask
from flask_cors import CORS
from database import db
from routes import api
from models import Project, Skill, Experience, Certification, Visitor


def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv(
        "DATABASE_URL", "sqlite:///portfolio.db"
    )
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    CORS(app, resources={r"/api/*": {"origins": "*"}})

    db.init_app(app)
    app.register_blueprint(api, url_prefix="/api")

    # ---------------- ROOT ROUTE ----------------
    @app.route("/")
    def index():
        return {
            "message": "Tanuj Nimkar Portfolio API is running 🚀",
            "endpoints": [
                "/api/profile",
                "/api/projects",
                "/api/skills",
                "/api/experience",
                "/api/certifications",
                "/api/contact (POST)",
                "/api/visitors",
                "/api/health",
            ],
        }

    @app.route("/favicon.ico")
    def favicon():
        return "", 204

    with app.app_context():
        db.create_all()
        seed_data()

    return app


def seed_data():
    """Seed the database only if empty."""

    if Project.query.first() is None:
        projects = [
            Project(
                title="AWS 3-Tier Web Architecture (Terraform)",
                description="Provisioned a production-ready AWS 3-tier architecture using modular Terraform, automating VPC, EC2, ALB, Auto Scaling Groups, RDS MySQL, IAM, and networking for repeatable infrastructure deployments.",
                github="https://github.com/TanUjNimkar/aws-3tier-web-architecture-terraform",
                technologies="Terraform,AWS,VPC,EC2,ALB,Auto Scaling,RDS,MySQL,IAM,NAT Gateway",
                category="Infrastructure as Code",
                icon="diagram",
            ),
            Project(
                title="AWS 3-Tier Web Architecture",
                description="Designed and deployed a secure, highly available 3-tier web architecture on AWS using VPC, EC2, ALB, Auto Scaling Groups, RDS MySQL, IAM, NAT Gateway, and S3 following AWS Well-Architected principles.",
                github="https://github.com/TanUjNimkar/aws-3tier-web-architecture",
                technologies="AWS,VPC,EC2,ALB,Auto Scaling,RDS,S3,IAM,NAT Gateway",
                category="Cloud Infrastructure",
                icon="cloud",
            ),
            Project(
                title="Production-Grade Cloud Native E-Commerce Platform",
                description="Built and deployed a production-ready cloud-native e-commerce platform on Amazon EKS using Terraform, Helm, ArgoCD, NGINX Ingress, and CloudWatch monitoring.",
                github="https://github.com/TanUjNimkar/Production-Grade-Cloud-Native-E-Commerce-Platform",
                technologies="AWS,EKS,Terraform,Docker,ArgoCD,Helm,CloudWatch,NGINX,Cert-Manager",
                category="Cloud Native",
                icon="cart",
            ),
            Project(
                title="Secure Delivery Platform",
                description="Production-style DevSecOps platform integrating GitHub Actions, SonarQube, Trivy, CodeQL, Docker, and AWS for secure software delivery.",
                github="https://github.com/TanUjNimkar/secure-delivery-platform",
                technologies="GitHub Actions,SonarQube,Trivy,CodeQL,Docker,AWS",
                category="DevSecOps",
                icon="shield",
            ),
            Project(
                title="End-to-End DevOps CI/CD Pipeline",
                description="Designed a complete CI/CD pipeline including build, testing, SonarQube quality gates, Trivy vulnerability scanning, Docker image publishing, and automated EC2 deployment.",
                github="https://github.com/TanUjNimkar/end-to-end-devops-cicd-pipeline",
                technologies="Jenkins,Docker,AWS,SonarQube,Trivy,GitHub Actions",
                category="CI/CD",
                icon="jenkins",
            ),
            Project(
                title="Terraform Bootstrap",
                description="Provisioned reusable Terraform remote state infrastructure using Amazon S3 and DynamoDB for secure state management and state locking.",
                github="https://github.com/TanUjNimkar/terraform-bootstrap",
                technologies="Terraform,AWS,S3,DynamoDB",
                category="Infrastructure as Code",
                icon="diagram",
            ),
            Project(
                title="AWS EKS GitOps E-Commerce Platform",
                description="Implemented GitOps-based application delivery on Amazon EKS using ArgoCD, Terraform, Docker, Helm, and Kubernetes best practices.",
                github="https://github.com/TanUjNimkar/aws-eks-gitops-ecommerce-platform",
                technologies="AWS,EKS,Terraform,ArgoCD,Docker,Helm",
                category="GitOps",
                icon="cloud",
            ),
            Project(
                title="EKS GitOps 3-Tier Application",
                description="Deployed a complete 3-tier application on Kubernetes using Helm and ArgoCD with automated synchronization and rollback capabilities.",
                github="https://github.com/TanUjNimkar/eks-gitops-3tier-app",
                technologies="Kubernetes,ArgoCD,Helm,Docker",
                category="Kubernetes",
                icon="layers",
            ),
        ]

        db.session.bulk_save_objects(projects)

    if Skill.query.first() is None:
        skills = [
            Skill(skill="AWS (EC2, IAM, VPC)", category="Cloud", level=90),
            Skill(skill="EKS / Route53 / RDS", category="Cloud", level=85),
            Skill(skill="CloudWatch / S3 / ACM", category="Cloud", level=88),
            Skill(skill="Terraform", category="Infrastructure", level=88),
            Skill(skill="Ansible", category="Infrastructure", level=78),
            Skill(skill="Docker", category="Containers", level=90),
            Skill(skill="Kubernetes", category="Containers", level=85),
            Skill(skill="Helm", category="Containers", level=80),
            Skill(skill="Jenkins", category="CI/CD", level=85),
            Skill(skill="GitHub Actions", category="CI/CD", level=82),
            Skill(skill="ArgoCD", category="CI/CD", level=80),
            Skill(skill="Prometheus & Grafana", category="Monitoring", level=75),
            Skill(skill="AWS CloudWatch", category="Monitoring", level=85),
            Skill(skill="Trivy / SonarQube", category="Security", level=78),
            Skill(skill="Bash / Linux", category="Programming", level=85),
            Skill(skill="Python", category="Programming", level=65),
        ]
        db.session.bulk_save_objects(skills)

    if Experience.query.first() is None:
        exp = Experience(
            role="DevOps Engineer Intern",
            company="SwiftSoft InfoTech",
            location="Hyderabad",
            duration="Feb 2026 - Apr 2026",
            responsibilities="Designed Jenkins & GitHub Actions CI/CD pipelines|Containerized microservices with Docker for AWS deployment|Administered Linux servers and Git workflows|Automated infrastructure with Ansible|Integrated Prometheus & Grafana for monitoring",
        )
        db.session.add(exp)

    if Certification.query.first() is None:
        certs = [
            Certification(title="AWS Certified Solutions Architect - Associate", issuer="Amazon Web Services", code="SAA-C03"),
            Certification(title="AWS Certified Cloud Practitioner", issuer="Amazon Web Services", code="CLF-C02"),
        ]
        db.session.bulk_save_objects(certs)

    if Visitor.query.first() is None:
        db.session.add(Visitor(total_visits=0))

    db.session.commit()


app = create_app()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)