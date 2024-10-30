import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const GraficoFrequenciaDoacoes = ({ donations }) => {
    // Function to count donations per month
    const getMonthlyData = (donations) => {
        const monthlyCounts = {};

        donations.forEach(donation => {
            const date = new Date(donation.dataDoacao);
            const month = date.toLocaleString('default', { month: 'long' });

            // Initialize month count if it doesn't exist
            if (monthlyCounts[month]) {
                monthlyCounts[month]++;
            } else {
                monthlyCounts[month] = 1;
            }
        });

        // Transform the object into the required format
        const data1 = Object.keys(monthlyCounts).map(month => ({
            month: month,
            donations: monthlyCounts[month]
        }));

        // Sort the data by month order
        const monthOrder = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        data1.sort((a, b) => monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month));

        return data1;
    };

    const data1 = getMonthlyData(donations);

    return (
        <ResponsiveContainer width="80%" height={205}>
            <BarChart data={data1} margin={{ top: 10, right: 89, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" label={{ value: 'Mês', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'Doações', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => [value, "Doações"]} />
                <Bar dataKey="donations" fill="#003366" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default GraficoFrequenciaDoacoes;
