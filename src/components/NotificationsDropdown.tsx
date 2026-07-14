/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Notification } from "../types";
import { Check, CheckSquare, BellOff, Bell } from "lucide-react";

interface NotificationsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
  onMarkRead: (id: string) => void;
  onMarkAllRead: () => void;
}

export default function NotificationsDropdown({
  isOpen,
  onClose,
  notifications,
  onMarkRead,
  onMarkAllRead,
}: NotificationsDropdownProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Invisible backdrop to dismiss click outside */}
      <div className="fixed inset-0 z-40 cursor-default" onClick={onClose} />

      {/* Dropdown Card */}
      <div className="absolute top-20 right-[4%] z-50 w-80 md:w-96 rounded-md bg-surface-container border border-white/10 shadow-2xl p-4 overflow-hidden font-sans">
        {/* Header */}
        <div className="flex justify-between items-center pb-3 border-b border-white/5 mb-3">
          <h3 className="font-semibold text-sm text-on-surface flex items-center gap-2">
            <Bell className="w-4 h-4 text-primary-container" />
            Inbox &amp; Alerts
          </h3>
          {notifications.some((n) => !n.read) ? (
            <button
              onClick={onMarkAllRead}
              className="text-xs text-secondary hover:text-white flex items-center gap-1 font-medium bg-white/5 px-2 py-1 rounded"
              title="Mark all as read"
            >
              <CheckSquare className="w-3.5 h-3.5" />
              Mark All Read
            </button>
          ) : (
            <span className="text-xs text-secondary/60">All read</span>
          )}
        </div>

        {/* List of Alerts */}
        <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1 hide-scrollbar">
          {notifications.length === 0 ? (
            <div className="text-center py-8 text-secondary/50">
              <BellOff className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p className="text-xs">No notifications in production queue.</p>
            </div>
          ) : (
            notifications.map((notif) => (
              <div
                key={notif.id}
                onClick={() => onMarkRead(notif.id)}
                className={`p-3 rounded-md border text-xs cursor-pointer transition-colors relative group ${
                  notif.read
                    ? "bg-white/[0.01] border-white/[0.03] text-secondary/70"
                    : "bg-white/[0.04] border-white/[0.08] text-on-surface font-semibold"
                }`}
              >
                {!notif.read && (
                  <span className="absolute top-3.5 left-2.5 w-1.5 h-1.5 bg-primary-container rounded-full" />
                )}
                
                <div className={`pl-4 ${!notif.read ? "pr-6" : ""}`}>
                  <p className="leading-relaxed mb-1">{notif.title}</p>
                  <span className="text-[10px] text-secondary/50 font-mono block">
                    {notif.timestamp}
                  </span>
                </div>

                {!notif.read && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onMarkRead(notif.id);
                    }}
                    className="absolute top-3 right-3 text-secondary hover:text-green-500 opacity-0 group-hover:opacity-100 p-0.5 rounded bg-surface-container"
                    title="Mark as read"
                  >
                    <Check className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
