// import React, { useState } from 'react';

// function Settings() {
//   const [activeTab, setActiveTab] = useState('profile');

//   return (
//     <div className="settings">
//       <h1>Settings</h1>
      
//       <div className="settings-container">
//         <div className="settings-tabs">
//           <button 
//             className={activeTab === 'profile' ? 'active' : ''} 
//             onClick={() => setActiveTab('profile')}
//           >
//             Profile Information
//           </button>
//           <button 
//             className={activeTab === 'password' ? 'active' : ''} 
//             onClick={() => setActiveTab('password')}
//           >
//             Change Password
//           </button>
//           <button 
//             className={activeTab === 'preferences' ? 'active' : ''} 
//             onClick={() => setActiveTab('preferences')}
//           >
//             Preferences
//           </button>
//         </div>
        
//         <div className="settings-content">
//           {activeTab === 'profile' && (
//             <div className="profile-settings">
//               <h2>Profile Information</h2>
//               <form>
//                 <div className="form-group">
//                   <label>Profile Picture</label>
//                   <div className="profile-pic-container">
//                     <div className="profile-pic">
//                       <img src="./src/assets/admin.png" alt="profile" />
//                     </div>
//                     <button type="button">Change Picture</button>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <label>Full Name</label>
//                   <input type="text" defaultValue="Admin User" />
//                 </div>
//                 <div className="form-group">
//                   <label>Email Address</label>
//                   <input type="email" defaultValue="admin@jewelryshop.com" />
//                 </div>
//                 <div className="form-group">
//                   <label>Phone Number</label>
//                   <input type="tel" defaultValue="+91 9876543210" />
//                 </div>
//                 <div className="form-group">
//                   <label>Role</label>
//                   <input type="text" defaultValue="Administrator" disabled />
//                 </div>
//                 <div className="form-actions">
//                   <button type="submit">Save Changes</button>
//                 </div>
//               </form>
//             </div>
//           )}
          
//           {activeTab === 'password' && (
//             <div className="password-settings">
//               <h2>Change Password</h2>
//               <form>
//                 <div className="form-group">
//                   <label>Current Password</label>
//                   <input type="password" />
//                 </div>
//                 <div className="form-group">
//                   <label>New Password</label>
//                   <input type="password" />
//                 </div>
//                 <div className="form-group">
//                   <label>Confirm New Password</label>
//                   <input type="password" />
//                 </div>
//                 <div className="form-actions">
//                   <button type="submit">Update Password</button>
//                 </div>
//               </form>
//             </div>
//           )}
          
//           {activeTab === 'preferences' && (
//             <div className="preferences-settings">
//               <h2>Preferences</h2>
//               <form>
//                 <div className="form-group">
//                   <label>Language</label>
//                   <select defaultValue="en">
//                     <option value="en">English</option>
//                     <option value="hi">Hindi</option>
//                     <option value="gu">Gujarati</option>
//                   </select>
//                 </div>
//                 <div className="form-group">
//                   <label>Time Zone</label>
//                   <select defaultValue="IST">
//                     <option value="IST">Indian Standard Time (IST)</option>
//                     <option value="GMT">Greenwich Mean Time (GMT)</option>
//                     <option value="EST">Eastern Standard Time (EST)</option>
//                   </select>
//                 </div>
//                 <div className="form-group checkbox">
//                   <input type="checkbox" id="emailNotif" defaultChecked />
//                   <label htmlFor="emailNotif">Email Notifications</label>
//                 </div>
//                 <div className="form-group checkbox">
//                   <input type="checkbox" id="smsNotif" defaultChecked />
//                   <label htmlFor="smsNotif">SMS Notifications</label>
//                 </div>
//                 <div className="form-group">
//                   <label>Dashboard View</label>
//                   <select defaultValue="detailed">
//                     <option value="simple">Simple</option>
//                     <option value="detailed">Detailed</option>
//                   </select>
//                 </div>
//                 <div className="form-actions">
//                   <button type="submit">Save Preferences</button>
//                 </div>
//               </form>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Settings;



import React, { useState } from 'react';
// import './Settings.css';

function Settings() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="settings">
      <h1>Settings</h1>
      
      <div className="settings-container">
        <div className="settings-tabs">
          <button 
            className={activeTab === 'profile' ? 'active' : ''} 
            onClick={() => setActiveTab('profile')}
          >
            Profile Information
          </button>
          <button 
            className={activeTab === 'password' ? 'active' : ''} 
            onClick={() => setActiveTab('password')}
          >
            Change Password
          </button>
          <button 
            className={activeTab === 'preferences' ? 'active' : ''} 
            onClick={() => setActiveTab('preferences')}
          >
            Preferences
          </button>
          <button 
            className={activeTab === 'business' ? 'active' : ''} 
            onClick={() => setActiveTab('business')}
          >
            Business Info
          </button>
        </div>
        
        <div className="settings-content">
          {activeTab === 'profile' && (
            <div className="profile-settings">
              <h2>Profile Information</h2>
              <form>
                <div className="form-group">
                  <label>Profile Picture</label>
                  <div className="profile-pic-container">
                    <div className="profile-pic">
                      <img src="./src/assets/admin.png" alt="profile" />
                    </div>
                    <button type="button">Change Picture</button>
                  </div>
                </div>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" defaultValue="Admin User" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" defaultValue="admin@jewelryshop.com" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" defaultValue="+91 9876543210" />
                </div>
                <div className="form-group">
                  <label>Role</label>
                  <input type="text" defaultValue="Administrator" disabled />
                </div>
                <div className="form-actions">
                  <button type="submit">Save Changes</button>
                </div>
              </form>
            </div>
          )}
          
          {activeTab === 'password' && (
            <div className="password-settings">
              <h2>Change Password</h2>
              <form>
                <div className="form-group">
                  <label>Current Password</label>
                  <input type="password" />
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input type="password" />
                </div>
                <div className="form-group">
                  <label>Confirm New Password</label>
                  <input type="password" />
                </div>
                <div className="form-actions">
                  <button type="submit">Update Password</button>
                </div>
              </form>
            </div>
          )}
          
          {activeTab === 'preferences' && (
            <div className="preferences-settings">
              <h2>Preferences</h2>
              <form>
                <div className="form-group">
                  <label>Language</label>
                  <select defaultValue="en">
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="gu">Gujarati</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Time Zone</label>
                  <select defaultValue="IST">
                    <option value="IST">Indian Standard Time (IST)</option>
                    <option value="GMT">Greenwich Mean Time (GMT)</option>
                    <option value="EST">Eastern Standard Time (EST)</option>
                  </select>
                </div>
                <div className="form-group checkbox">
                  <input type="checkbox" id="emailNotif" defaultChecked />
                  <label htmlFor="emailNotif">Email Notifications</label>
                </div>
                <div className="form-group checkbox">
                  <input type="checkbox" id="smsNotif" defaultChecked />
                  <label htmlFor="smsNotif">SMS Notifications</label>
                </div>
                <div className="form-group">
                  <label>Dashboard View</label>
                  <select defaultValue="detailed">
                    <option value="simple">Simple</option>
                    <option value="detailed">Detailed</option>
                  </select>
                </div>
                <div className="form-actions">
                  <button type="submit">Save Preferences</button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'business' && (
            <div className="business-settings">
              <h2>Business Information</h2>
              <form>
                <div className="form-group">
                  <label>Business Logo</label>
                  <div className="profile-pic-container">
                    <div className="profile-pic">
                      <img src="./src/assets/shop.jpg" alt="business logo" />
                    </div>
                    <button type="button">Change Logo</button>
                  </div>
                </div>
                <div className="form-group">
                  <label>Business Address</label>
                  <textarea rows="3" defaultValue="123 Jewelry Street, Mumbai, India"></textarea>
                </div>
                <div className="form-group">
                  <label>Business Location (Map URL)</label>
                  <input type="text" defaultValue="https://maps.google.com/..." />
                </div>
                <div className="form-group">
                  <label>Business Hours</label>
                  <div className="time-range">
                    <select defaultValue="09:00">
                      {Array.from({length: 24}, (_, i) => {
                        const hour = i.toString().padStart(2, '0');
                        return <option key={hour} value={`${hour}:00`}>{hour}:00</option>;
                      })}
                    </select>
                    <span>to</span>
                    <select defaultValue="18:00">
                      {Array.from({length: 24}, (_, i) => {
                        const hour = i.toString().padStart(2, '0');
                        return <option key={hour} value={`${hour}:00`}>{hour}:00</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Facebook Link</label>
                  <input type="url" defaultValue="https://facebook.com/jewelryshop" />
                </div>
                <div className="form-group">
                  <label>Instagram Link</label>
                  <input type="url" defaultValue="https://instagram.com/jewelryshop" />
                </div>
                <div className="form-group">
                  <label>Twitter Link</label>
                  <input type="url" />
                </div>
                <div className="form-actions">
                  <button type="submit">Save Business Info</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;