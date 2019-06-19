import React from "react";
import styled from "styled-components";

const NavigationHistory = ({ historyItems, accessItem }) =>
  (historyItems.length > 1 && (
    <div>
      <h1>Navigation History</h1>
      <History>
        {historyItems.map((historyItem, index) => (
          <HistoryItem title={historyItem.url} onClick={() => accessItem(index)}>
            <div className="history-item-title">{historyItem.title || "No Title"}</div>
          </HistoryItem>
        ))}
      </History>
    </div>
  )) ||
  null;

const History = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const HistoryItem = styled.div`
  background: #e3e3e3;
  margin: 5px 5px 0px 0px;
  display: flex;
  cursor: pointer;

  & .history-item-title {
    line-height: 40px;
    text-align: center;
    font-weight: bold;
    padding: 0px 15px;
    font-size: 14px;
  }

  &::after {
    content: " ";
    display: block;
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 10px solid #e3e3e3;
    position: relative;
    right: -10px;
  }
  &::before {
    content: " ";
    display: block;
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 10px solid white;
  }

  &:first-child {
    background: #bdbdbd;
    border-left: 3px solid #232323;
    &::before {
      display: none;
    }
    &::after {
      border-left-color: #bdbdbd;
    }
    & .history-item-title {
      color: #232323;
    }
  }

  &:last-child {
    background: #bdbdbd;
    border-right: 3px solid #232323;
    &::after {
      display: none;
    }
    & .history-item-title {
      color: #232323;
    }
  }
`;

export default NavigationHistory;
