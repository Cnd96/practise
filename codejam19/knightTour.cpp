#include <bits/stdc++.h>
using namespace std;
using ll = long long;
using ld = long double;

mt19937 rnd(1337);
const int maxn = 22;
vector<pair<int, int>> path;

bool valid(const pair<int, int>& a, const pair<int, int>& b) {
  if (a.first == b.first || a.second == b.second) {
    return false;
  }
  if (a.first + a.second == b.first + b.second) {
    return false;
  }
  if (a.first - a.second == b.first - b.second) {
    return false;
  }
  return true;
}

bool try_fix() {
  for (int i = 0; i + 1 < (int) path.size(); ++i) {
    bool ok = false;
    for (int j = i + 1; j < (int) path.size(); ++j) {
      if (valid(path[i], path[j])) {
        swap(path[i + 1], path[j]);
        ok = true;
        break;
      }
    }
    if (!ok) {
      return false;
    }
  }
  return true;
}

int test = 1;
bool solve(int n, int m) {
  for (int iter = 0; iter < 100; ++iter) {
    path.clear();
    for (int i = 0; i < n; ++i) {
      for (int j = 0; j < m; ++j) {
        path.emplace_back(i, j);
      }
    }
    shuffle(path.begin(), path.end(), rnd);
    if (try_fix()) {
      cout << "Case #" << test++ << ": POSSIBLE\n";
      for (auto p : path) {
        cout << p.first + 1 << ' ' << p.second + 1 << '\n';
      }
      return true;
    }
  }
  cout << "Case #" << test++ << ": IMPOSSIBLE\n";
  return false;
}

signed main() {
#ifdef LOCAL
  assert(freopen("a.in", "r", stdin));
#endif
  //vector<pair<int, int>> bad;
  //for (int i = 2; i <= 20; ++i) {
    //for (int j = 2; j <= 20; ++j) {
      //if (!solve(i, j)) {
        //bad.emplace_back(i, j);
      //}
    //}
  //}
  //cerr << "bads:\n";
  //for (auto p : bad) {
    //cerr << p.first << ' ' << p.second << '\n';
  //}
  //cerr << clock() / 1000 << '\n';
  //return 0;
  int tn;
  cin >> tn;
  for (int i = 0; i < tn; ++i) {
    int n, m;
    cin >> n >> m;
    solve(n, m);
  }
}
