# Explanation of Kubernetes Deployment Choices

## 1. Choice of Kubernetes Objects

I used **Deployments** for both the frontend and backend. This is because these components are stateless, and Deployments provide automatic rollouts, rollbacks, and scaling.

For the database, I used a **StatefulSet**. This was chosen because databases require stable network identities and persistent storage. StatefulSets allow each pod to maintain its state across restarts using persistent volume claims (PVCs).

---

## 2. Method Used to Expose Pods to Internet Traffic

I used the **LoadBalancer** service type for both the frontend and backend. This exposes the services to the public internet and automatically provisions an external IP address on GKE.

The database is only needed internally, so it uses a **ClusterIP** service (the default) to restrict access.

---

## 3. Use of Persistent Storage

For the database, I created a **PersistentVolumeClaim** inside the StatefulSet. This ensures that even if the pod restarts, the database data remains intact. I relied on GKE’s default dynamic storage class for provisioning.

---

## 4. Git Workflow

I created a new GitHub repository specifically for this project. I committed changes regularly with meaningful messages and followed a basic Git workflow:

- `main` branch holds the working code
- `feature/*` branches were used for adding components (e.g., `feature/frontend`)
- Pull requests and commits are labeled clearly

---

## 5. Debugging Measures Applied

I used the following commands to troubleshoot issues:

- `kubectl logs <pod-name>` to view logs and error messages
- `kubectl describe pod <pod-name>` to get detailed event info
- Checked Docker image build and push logs to ensure images were updated

---

## 6. Best Practices Followed

- Docker images were tagged using the format: `username/service:week5`
- YAML manifests are cleanly separated by component
- Kubernetes resources are named clearly and consistently
- Used ConfigMaps and Secrets (if needed) for storing environment variables and credentials
