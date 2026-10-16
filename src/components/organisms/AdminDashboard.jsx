import React from "react";
import { useState } from "react";
import AdminTab from "../molecules/AdminTab";

function AdminDashboard({ tabs = [] }){
    const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);
    const activeTab = tabs.find(tab => tab.id === activeTabId);

    return(
        <div className="tabs-container">
            <div className="tabs-list">
                {tabs.map((tab) => (
                    <AdminTab
                    key={tab.id}
                    label={tab.label}
                    isActive={tab.id === activeTabId}
                    onClick={() => setActiveTabId(tab.id)}
                    />
                ))}
            </div>
            <div className="tab-content-panel">
                {activeTab ? activeTab.content : <p>Seleciona una pestaña</p>}
            </div>
        </div>
    );
}

export default AdminDashboard