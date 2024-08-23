#include<iostream>
using namespace std;
struct Student
{
    int rollno;
    char name[100];
    int mark[3];
    int sum, p;
};

int main()
{
    struct Student s1[3];

    for (int i = 0; i < 3; i++)
    {
        s1[i].sum = 0;
        cout <<"enter name:";
        cin >>s1[i].name;
        cout << endl;
        cout <<"enter roll no:";
        cin >>s1[i].rollno;
        cout << endl;

        for (int j = 0; j < 3; j++)
        {
            cout<< "enter mark:";
            cin >> s1[i].mark[j];
            cout << endl;
        }
        for (int j = 0; j < 3; j++)
        {
            s1[i].sum += s1[i].mark[j];
        }

        cout << "total mark:" << s1[i].sum;
        cout << endl;
        s1[i].p = s1[i].sum / 3;
        cout <<"per:" << s1[i].p;
        cout << endl;
    }

    return 0;
}
