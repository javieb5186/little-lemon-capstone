export default function TimeModal() {
  return (
    <div>
      <div>
        <h3>Available Times</h3>
        <button>Back</button>
      </div>
      <p>Below are available times you can select</p>
      <table>
        <tr>
          <th>Times</th>
        </tr>
        <tr>
          <td>5:45 PM</td>
          <td>6:30 PM</td>
          <td>7:30 PM</td>
        </tr>
        <tr>
          <td>6:00 PM</td>
          <td>6:45 PM</td>
          <td>7:45 PM</td>
        </tr>
        <tr>
          <td>6:15 PM</td>
          <td>7:00 PM</td>
          <td>8:00 PM</td>
        </tr>
        <tr>
          <td>6:30 PM</td>
          <td>7:15 PM</td>
          <td>8:15 PM</td>
        </tr>
      </table>
      <p>NOTE: Grayed out buttons are NOT available.</p>
    </div>
  );
}
