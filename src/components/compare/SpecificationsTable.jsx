import React from "react";

const SpecificationsTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 bg-gray-100 border-b border-gray-200">
              Specification
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 bg-gray-100 border-b border-gray-200">
              Rhyno SE03 Lite
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 bg-gray-100 border-b border-gray-200">
              Rhyno SE03
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 bg-gray-100 border-b border-gray-200">
              Rhyno SE03 Max
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-3 text-sm font-medium text-gray-900 bg-yellow-400 border-b border-gray-200">
              Battery
            </td>
            <td className="px-6 py-3 text-sm text-gray-700 border-b border-gray-200">
              1.8kWh
            </td>
            <td className="px-6 py-3 text-sm text-gray-700 border-b border-gray-200">
              2.7kWh
            </td>
            <td className="px-6 py-3 text-sm text-gray-700 border-b border-gray-200">
              2.7kWh
            </td>
          </tr>
          <tr>
            <td className="px-6 py-3 text-sm font-medium text-gray-900 bg-gray-100 border-b border-gray-200">
              Battery features
            </td>
            <td className="px-6 py-3 text-sm text-gray-700 border-b border-gray-200">
              LFP with 1500 cycles Active Balancing Waterproof (IP67)
            </td>
            <td className="px-6 py-3 text-sm text-gray-700 border-b border-gray-200">
              LFP with 1500 cycles Active Balancing Waterproof (IP67)
            </td>
            <td className="px-6 py-3 text-sm text-gray-700 border-b border-gray-200">
              LFP with 1500 cycles Active Balancing Waterproof (IP67)
            </td>
          </tr>
          {/* Repeat for other rows */}
          <tr>
            <td className="px-6 py-3 text-sm font-medium text-gray-900 bg-gray-100 border-b border-gray-200">
              Other key benefits
            </td>
            <td className="px-6 py-3 text-sm text-gray-700 border-b border-gray-200">
              Fire-safe Battery Range prediction Comfortable ride Stable and safe
            </td>
            <td className="px-6 py-3 text-sm text-gray-700 border-b border-gray-200">
              Fire-safe Battery Range prediction Comfortable ride Stable and safe
            </td>
            <td className="px-6 py-3 text-sm text-gray-700 border-b border-gray-200">
              Fire-safe Battery Range prediction Comfortable ride Stable and safe
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SpecificationsTable;
