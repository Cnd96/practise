#include "bits/stdc++.h"
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main()
{
    int t;
    cin >> t;
    for (int i = 1; i <= t; i++)
    {
        double p, w, h, op;
        int n;
        cin >> n >> p;
        vector<vector<double>> pdata(4);
        for (int j = 0; j < 4; j++)
        {
            pdata[j] = vector<double>(n);
        }
        for (int j = 0; j < n; j++)
        {
            cin >> w >> h;
            op = (w * 2) + (h * 2);
            pdata[0][j] = op;
            pdata[1][j] = min(op + (w * 2), op + (h * 2));
            pdata[2][j] = max(op + (w * 2), op + (h * 2));
            pdata[3][j] = op + (sqrt((w * w) + (h * h)) * 2);
        }
        int tempa[n] = {0};
        double totalpp = 0;
        bool iseli = true;
        while (iseli)
        {
            double totalTemp = 0;
            for (int k = 0; k < n; k++)
            {
                totalTemp += pdata[tempa[k]][k];
            }
            if (totalTemp == p)
            {
                totalpp = totalTemp;
                break;
            }
            else
            {
                if (totalTemp < p)
                {
                    totalpp = max(totalTemp,totalpp);
                }
                for (int k = n - 1; k >= 0; k--)
                {
                    if ((tempa[k] + 1) == 4)
                    {

                        int sum = 0;
                        for (int i = 0; i < n; i++)
                            sum += tempa[i];
                        if (sum == (3 * n))
                        {
                            iseli = false;
                            break;
                        }
                        tempa[k] = 0;
                    }
                    else
                    {
                        tempa[k]++;
                        break;
                    }

                    // else if (totalTemp >p)
                    // {
                    //     tempa[k] = 0;
                    // }
                }
            }
        }

        cout << "Case #" << i << ": " << fixed << setprecision(6) << totalpp << endl;
        // for (int j = 0; j < 4; j++)
        // {
        //     for (int k = 0; k < pdata[j].size(); k++)
        //     {
        //         cout << pdata[j][k] << " ";
        //     }
        //     cout << endl;
        // }
    }
    return 0;
}

// 1
// 3 321
// 10 20
// 20 30
// 30 10