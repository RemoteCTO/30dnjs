'use client';

import '../globals.css';
import InteractiveTable from '../../components/InteractiveTable';

export default function Page() {
  const inventors = [
    { firstName: 'Albert', lastName: 'Einstein', year: 1879, passed: 1955 },
    { firstName: 'Isaac', lastName: 'Newton', year: 1643, passed: 1727 },
    { firstName: 'Galileo', lastName: 'Galilei', year: 1564, passed: 1642 },
    { firstName: 'Marie', lastName: 'Curie', year: 1867, passed: 1934 },
    { firstName: 'Johannes', lastName: 'Kepler', year: 1571, passed: 1630 },
    { firstName: 'Nicolaus', lastName: 'Copernicus', year: 1473, passed: 1543 },
    { firstName: 'Max', lastName: 'Planck', year: 1858, passed: 1947 },
    { firstName: 'Katherine', lastName: 'Blodgett', year: 1898, passed: 1979 },
    { firstName: 'Ada', lastName: 'Lovelace', year: 1815, passed: 1852 },
    { firstName: 'Sarah E.', lastName: 'Goode', year: 1855, passed: 1905 },
    { firstName: 'Lise', lastName: 'Meitner', year: 1878, passed: 1968 },
    { firstName: 'Hanna', lastName: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const filters = {
    options: [1500, 1600, 1700, 1800, 1900],
    logic: (data, filter) => {
      return data.filter(
        item => item.year > filter &&
        item.year < filter + 100
      )
    }
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
      <InteractiveTable data={inventors} filters={filters} />
    </div>
  )
}
