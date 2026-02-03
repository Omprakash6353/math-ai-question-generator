import sys
from pathlib import Path

# Add backend/ to PYTHONPATH so "app" is importable
ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT))