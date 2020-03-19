#include "bits/stdc++.h"
#include <iostream>
#include <algorithm>
#include <fstream>
#include <vector>
#include <deque>
#include <assert.h>
#include <queue>
#include <stack>
#include <set>
#include <map>
#include <stdio.h>
#include <string.h>
#include <utility>
#include <math.h>
#include <bitset>
#include <iomanip>
#include <complex>

using namespace std;

long long xx;
long long temp;
long long fr[2];

int a, range1, range2;
int aaa[26][100005];

int main()
{
    int t;
    cin >> t;
    for (int tt = 1; tt <= t; tt++)
    {
        memset(aaa, 0, sizeof(aaa));
        int sData;
        int n, q;
        string originalS;
        cin >> n >> q >> originalS;

        for (int j = 0; j < n; j++)
        {
            a = originalS[j] - 65;
            for (int i = 0; i < 26; i++)
            {
                aaa[i][j + 1] = aaa[i][j];
            }
            aaa[a][j + 1]++;
        }
        int sCount=0;
        for (int i = 0; i < q; i++)
        {
            cin >> range1 >> range2;
            bool isAble = 1;
            bool odd = false;
            if ((range2 - (range1 - 1)) % 2 == 0)
            {
                for (int i = 0; i < 26; i++)
                {
                    sData = aaa[i][range2] - aaa[i][range1 - 1];
                    if (sData % 2 == 1)
                    {
                        isAble = 0;
                        break;
                    }
                }
            }
            else
            {
                for (int i = 0; i < 26; i++)
                {
                    sData = aaa[i][range2] - aaa[i][range1 - 1];
                    if (sData % 2 == 1)
                    {
                        if (odd)
                        {
                            isAble = 0;
                            break;
                        }
                        odd = true;
                    }
                }
            }
            sCount+=isAble;
        }

        cout << "Case #" << tt << ": " << sCount << endl;
    }
    return 0;
}
