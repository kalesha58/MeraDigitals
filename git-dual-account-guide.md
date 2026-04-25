# Git Creds
## GitHub Dual Account Workflow (id_kalesha & id_work)
Managing two GitHub accounts (id_kalesha personal, id_work work) on same Mac.

### SSH Keys Status
```text
~/.ssh/id_kalesha     # Personal account
~/.ssh/id_work        # Work account (dcleancode-bit)
```

### Quick Status Check
```bash
ssh-add -l                    # Loaded keys
ssh -T git@github.com         # Which account authenticated?
git remote -v                 # Current repo remote
```

### 1. PERSONAL PROJECTS (id_kalesha)
#### Clone Personal Repo
```bash
ssh-add -D                    # Clear all keys
ssh-add ~/.ssh/id_kalesha     # Load personal key
ssh -T git@github.com         # ✅ Hi kalesha_username!
git clone git@github.com:kalesha-username/repo.git
cd repo
```

#### Commit/Push Personal
```bash
git config user.name "Kalesha Baig"
git config user.email "bablu05786bablu@gmail.com"
git add .
git commit -m "Personal commit"
git push origin main
```

### 2. WORK PROJECTS (id_work)
#### Clone Work Repo
```bash
ssh-add -D                    # Clear all keys
ssh-add ~/.ssh/id_work        # Load work key
ssh -T git@github.com         # ✅ Hi dcleancode-bit!
git clone git@github.com:dcleancode-bit/repo.git
cd repo
```

#### Commit/Push Work
```bash
git config user.name "Work Name"
git config user.email "dcleancode@gmail.com"
git add .
git commit -m "Work commit"
git push origin main
```

### 3. SWITCHING BETWEEN PROJECTS
| Scenario | Commands |
| :--- | :--- |
| Start Personal | `ssh-add ~/.ssh/id_kalesha` |
| Start Work | `ssh-add ~/.ssh/id_work` |
| Switch Personal → Work | `ssh-add -D && ssh-add ~/.ssh/id_work` |
| Switch Work → Personal | `ssh-add -D && ssh-add ~/.ssh/id_kalesha` |

### 4. DAILY WORKFLOW CHECKLIST
#### Before Any Git Operation
```bash
# 1. Check loaded key
ssh-add -l

# 2. Verify account
ssh -T git@github.com

# 3. Check git config
git config user.email

# 4. Check remote
git remote -v
```

#### Green Signals ✅
```text
ssh-add -l                # Shows correct key
ssh -T git@github.com     # Greets correct account  
git config user.email     # Matches key comment
```

### 5. AUTO-START SSH AGENT (Add to ~/.zshrc)
```bash
# Auto-start SSH agent
if [ -z "$SSH_AUTH_SOCK" ]; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_kalesha 2>/dev/null || true
fi
```

### 6. TROUBLESHOOTING
| Problem | Solution |
| :--- | :--- |
| Permission denied (publickey) | `ssh-add -D && ssh-add correct_key` |
| Wrong account greeted | Load correct key first |
| non-fast-forward | `git pull origin main --rebase` |
| Files not showing | `git add .` then commit/push |

### 7. CHEAT SHEET
```text
# PERSONAL (id_kalesha)
ssh-add ~/.ssh/id_kalesha
git config user.email "bablu05786bablu@gmail.com"

# WORK (id_work) 
ssh-add ~/.ssh/id_work
git config user.email "dcleancode@gmail.com"

# ALWAYS BEFORE PUSH
ssh -T git@github.com
git pull origin main --rebase
git push origin main
```

Save this MD as ~/git-dual-account-guide.md - your permanent reference! 🚀
