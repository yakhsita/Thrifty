const supabaseUrl = "https://quwxqpgvaqqgtdjauukk.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1d3hxcGd2YXFxZ3RkamF1dWtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxMjk5MTQsImV4cCI6MjA5NTcwNTkxNH0.qAI3B-RADeMDsP2i6nc-bdBf2ZHmUw4dhZB7EEA-15E";
const db = window.supabase.createClient(supabaseUrl, supabaseKey);

// Helper: show toast notification
function showToast(msg, duration = 2500) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), duration);
}

// Helper: get current user
async function getCurrentUser() {
  const { data: { user } } = await db.auth.getUser();
  return user;
}

// Guard: redirect to login if not authenticated
async function requireAuth() {
  const user = await getCurrentUser();
  if (!user) {
    window.location.href = 'login.html';
    return null;
  }
  return user;
}

// Format price in INR
function formatPrice(p) {
  return '₹' + Number(p).toLocaleString('en-IN');
}

// Category emoji map
const catEmoji = {
  'Electronics': '📱',
  'Fashion': '👗',
  'Household': '🛋️',
  'Games & Toys': '🎮',
  'Books': '📚',
};
