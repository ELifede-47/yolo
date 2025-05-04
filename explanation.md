## Explanation of Playbook Execution

The playbook `playbook.yml` executes roles in the following order:

1. **db** → sets up the database (PostgreSQL) and initializes the schema.
2. **app** → builds and runs the backend application in a Docker container.
3. **web** → builds and runs the frontend application in a Docker container, and ensures it connects to the backend.

### Why this order?

The database must be up before the backend, since the backend relies on an active DB connection. backend must be up before the frontend to ensure APIs are ready for frontend requests.

---

## Role: db

**Tasks performed:**
- Install PostgreSQL
- Created database and user
- Run initial SQL migrations

**Modules used:**
- `apt`: for installing PostgreSQL
- `postgresql_db`, `postgresql_user`: for database setup
- `copy`, `template`: to deploy initial SQL scripts

---

## Role: app

**Tasks performed:**
- Copy application source code
- Build Docker image
- Run container
- Configure environment variables

**Modules used:**
- `docker_image`, `docker_container`: for Docker operations
- `copy`: copying application files
- `template`: for dynamic config files

---

## Role: web

**Tasks performed:**
- Copy frontend source
- Build Docker image
- Run container

**Modules used:**
- `docker_image`, `docker_container`

---

## Additional Notes

Each role ensures idempotency. Using Docker makes it easier to ensure a consistent environment between runs.

