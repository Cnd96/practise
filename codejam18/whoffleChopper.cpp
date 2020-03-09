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
        int r, c, h, v, persons, rowTotal, colTotal, chipsPerson;
        int totalChips = 0;
        cin >> r >> c >> h >> v;
        persons = (h + 1) * (v + 1);
        int rowData[r] = {0};
        int colData[c] = {0};
        int whoffle[r][c];
        char ch;
        vector<int> rowBoundary;
        vector<int> colBoundary;

        for (int j = 0; j < r; j++)
        {
            for (int k = 0; k < c; k++)
            {
                cin >> ch;
                if (ch == '@')
                {
                    totalChips++;
                    rowData[j]++;
                    colData[k]++;
                    whoffle[j][k] = 1;
                }
                else
                {
                    whoffle[j][k] = 0;
                }
            }
        }
        if ((totalChips == 0))
        {
            cout << "Case #" << i << ": POSSIBLE" << endl;
        }
        else if (((totalChips % persons) != 0))
        {
            cout << "Case #" << i << ": IMPOSSIBLE" << endl;
        }
        else
        {
            rowTotal = totalChips / (h + 1);
            colTotal = totalChips / (v + 1);
            chipsPerson = totalChips / persons;
            bool found = true;
            int tem = 0;
            rowBoundary.push_back(0);
            colBoundary.push_back(0);
            for (int j = 0; j < r; j++)
            {
                if ((rowData[j] + tem) == rowTotal)
                {
                    rowBoundary.push_back(j + 1);
                    tem = 0;
                }
                else if ((rowData[j] + tem) < rowTotal)
                {
                    tem += rowData[j];
                    /* code */
                }
                else
                {
                    cout << "Case #" << i << ": IMPOSSIBLE" << endl;
                    found = false;
                    break;
                }
            }
            tem = 0;
            if (found)
            {
                for (int j = 0; j < c; j++)
                {
                    if ((colData[j] + tem) == colTotal)
                    {
                        colBoundary.push_back(j + 1);
                        tem = 0;
                    }
                    else if ((colData[j] + tem) < colTotal)
                    {
                        tem += colData[j];
                    }
                    else
                    {
                        cout << "Case #" << i << ": IMPOSSIBLE" << endl;
                        found = false;
                        break;
                    }
                }
                for (int j = 0; j < rowBoundary.size() - 1; j++)
                {
                    for (int k = 0; k < colBoundary.size() - 1; k++)
                    {
                        int chipCount = 0;
                        for (int q = rowBoundary[j]; q < rowBoundary[j + 1]; q++)
                        {
                            for (int w = colBoundary[k]; w < colBoundary[k + 1]; w++)
                            {
                                chipCount+=whoffle[q][w];
                            }
                        }
                        if (chipCount != chipsPerson)
                        {
                            cout << "Case #" << i << ": IMPOSSIBLE"<< endl;
                            found = false;
                            break;
                        }
                    }
                    if (!found)
                    {
                        break;
                    }
                }
                if (found)
                {
                    cout << "Case #" << i << ": POSSIBLE" << endl;
                }
            }
        }
    }
    return 0;
}
