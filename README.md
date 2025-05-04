# 🛒 E-Commerce (YOLO) Platform Deployment

## 🏄‍♂️ Overview

This project involved the **containerization and deployment of a full-stack YOLO application** using **Docker**. The deployment is automated with **Ansible**, and infrastructure provisioning is optionally handled with **Terraform** and **Vagrant**.

The application includes:
- ✅ Database container
- ✅ Backend API container
- ✅ Frontend application container
- ✅ (Optional) Nginx reverse proxy

---

## 🔧 Requirements

You need Docker installed on the target machine. Install Docker using the official instructions here:

👉 [Install Docker Engine](https://docs.docker.com/engine/install/)

Also ensure:
- ✅ Ansible is installed
- ✅ (Optional) Vagrant & VirtualBox are installed for local VM provisioning

---

## 🚀 **How to Launch the Application**

You can launch the application via **Vagrant**:

```bash
vagrant up --provision